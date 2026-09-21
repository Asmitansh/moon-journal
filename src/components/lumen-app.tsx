import { startOfMonth } from "date-fns";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { MoonInfoDialog } from "@/components/moon-info-dialog";
import { MoonSplash } from "@/components/moon-splash";
import { MonthCalendar } from "@/components/month-calendar";
import { TodayEditor } from "@/components/today-editor";
import { YearMosaic } from "@/components/year-mosaic";

import {
  currentStreak,
  dateKey,
  dominantMood,
  isFutureDay,
  MOOD_BY_ID,
  shiftMonth,
  yearCount,
  type CustomMood,
  type Entry,
  type MoodId,
} from "@/lib/journal";

import {
  hydrateJournalStore,
  useJournalStore,
} from "@/lib/store";

type Appearance = "light" | "dark" | "rain" | "system";

/* =========================================================
   MOON BRAND
   ========================================================= */

function Mark() {
  return (
    <div className="moon-brand-mark relative size-50 shrink-0">
      <img
        src="/moon.png"
        alt="Moon"
        className="h-full w-full object-contain"
        draggable={false}
      />
    </div>
  );
}

/* =========================================================
   SETTINGS ICON
   ========================================================= */

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.4h.84A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.68 5.2V5h2.4v.2a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.04H21v2.4h-.04A1.7 1.7 0 0 0 19.4 15Z"
      />
    </svg>
  );
}

/* =========================================================
   APPEARANCE ICONS
   ========================================================= */

function AppearanceIcon({ mode }: { mode: Appearance }) {
  if (mode === "light") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.5" />

        <path
          strokeLinecap="round"
          d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"
        />
      </svg>
    );
  }

  if (mode === "dark") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 15.5A8.5 8.5 0 0 1 8.5 4a8.5 8.5 0 1 0 11.5 11.5Z"
        />
      </svg>
    );
  }

  if (mode === "rain") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16.5h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.2 7.2 4.5 4.5 0 0 0 7 16.5Z"
        />

        <path
          strokeLinecap="round"
          d="M8 19l-.8 2M12 18.5l-.8 2M16 19l-.8 2"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3v18a9 9 0 0 0 0-18Z" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

/* =========================================================
   BACKUP HELPERS
   ========================================================= */

function downloadJson(
  filename: string,
  data: unknown,
) {
  const json = JSON.stringify(data, null, 2);

  const blob = new Blob([json], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

function isValidEntry(value: unknown): value is Entry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;

  if (typeof entry.mood !== "string") {
    return false;
  }

  if (typeof entry.note !== "string") {
    return false;
  }

  if (
    entry.customMood !== undefined &&
    entry.customMood !== null
  ) {
    if (
      typeof entry.customMood !== "object" ||
      entry.customMood === null
    ) {
      return false;
    }

    const customMood =
      entry.customMood as Record<string, unknown>;

    if (
      typeof customMood.label !== "string" ||
      typeof customMood.hint !== "string" ||
      typeof customMood.emoji !== "string"
    ) {
      return false;
    }
  }

  return true;
}

function isValidEntries(
  value: unknown,
): value is Record<string, Entry> {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entries =
    value as Record<string, unknown>;

  return Object.entries(entries).every(
    ([date, entry]) =>
      /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      isValidEntry(entry),
  );
}

/* =========================================================
   MAIN APP
   ========================================================= */

export function LumenApp() {
  const [showSplash, setShowSplash] = useState(true);

  const entries = useJournalStore(
    (state) => state.entries,
  );

  const hydrated = useJournalStore(
    (state) => state.hydrated,
  );

  const upsert = useJournalStore(
    (state) => state.upsert,
  );

  const updateNote = useJournalStore(
    (state) => state.updateNote,
  );

  const clearDay = useJournalStore(
    (state) => state.clearDay,
  );

  const importEntries = useJournalStore(
    (state) => state.importEntries,
  );

  const setHydrated = useJournalStore(
    (state) => state.setHydrated,
  );

  const [today] = useState(() => new Date());

  const [selected, setSelected] =
    useState(() => new Date());

  const [viewMonth, setViewMonth] =
    useState(() =>
      startOfMonth(new Date()),
    );

  /* =======================================================
     APPEARANCE
     ======================================================= */

  const [appearance, setAppearance] =
    useState<Appearance>(() => {
      if (typeof window === "undefined") {
        return "system";
      }

      const saved =
        localStorage.getItem(
          "moon-appearance",
        );

      if (
        saved === "light" ||
        saved === "dark" ||
        saved === "rain" ||
        saved === "system"
      ) {
        return saved;
      }

      return "system";
    });

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  /* =======================================================
     PRIVACY / ABOUT
     ======================================================= */

  const [infoDialog, setInfoDialog] =
    useState<
      "privacy" | "about" | null
    >(null);

  /* =======================================================
     IMPORT FILE INPUT
     ======================================================= */

  const importInputRef =
    useRef<HTMLInputElement | null>(null);

  /* =======================================================
     JOURNAL HYDRATION
     ======================================================= */

  useEffect(() => {
    const unsub =
      useJournalStore.persist.onFinishHydration(
        () => {
          setHydrated(true);
        },
      );

    hydrateJournalStore();

    if (
      useJournalStore.persist.hasHydrated()
    ) {
      setHydrated(true);
    }

    return unsub;
  }, [setHydrated]);

  /* =======================================================
     APPLY THEME
     ======================================================= */

  useEffect(() => {
    const applyTheme = (
      mode: Appearance,
    ) => {
      let theme:
        | "light"
        | "dark"
        | "rain";

      if (mode === "rain") {
        theme = "rain";
      } else if (mode === "dark") {
        theme = "dark";
      } else if (mode === "light") {
        theme = "light";
      } else {
        theme =
          window.matchMedia(
            "(prefers-color-scheme: dark)",
          ).matches
            ? "dark"
            : "light";
      }

      document.documentElement.setAttribute(
        "data-theme",
        theme,
      );

      document.documentElement.setAttribute(
        "data-appearance",
        theme,
      );
    };

    applyTheme(appearance);

    localStorage.setItem(
      "moon-appearance",
      appearance,
    );

    if (appearance !== "system") {
      return;
    }

    const media =
      window.matchMedia(
        "(prefers-color-scheme: dark)",
      );

    const handleChange = () => {
      applyTheme("system");
    };

    media.addEventListener(
      "change",
      handleChange,
    );

    return () => {
      media.removeEventListener(
        "change",
        handleChange,
      );
    };
  }, [appearance]);

  /* =======================================================
     JOURNAL DATA
     ======================================================= */

  const key = dateKey(selected);
  const entry = entries[key];

  const streak = currentStreak(
    entries,
    today,
  );

  const logged = yearCount(
    entries,
    viewMonth.getFullYear(),
  );

  const weather = dominantMood(
    entries,
    viewMonth,
  );

  const visibleEntries =
    hydrated ? entries : {};

  /* =======================================================
     DATE SELECTION
     ======================================================= */

  const selectDate = useCallback(
    (date: Date) => {
      if (isFutureDay(date, today)) {
        return;
      }

      setSelected(date);
      setViewMonth(
        startOfMonth(date),
      );
    },
    [today],
  );

  const goToday = useCallback(() => {
    selectDate(today);
  }, [selectDate, today]);

  /* =======================================================
     NORMAL MOOD
     ======================================================= */

  const onMood = useCallback(
    (
      mood: MoodId,
      note: string,
    ) => {
      upsert(key, {
        mood,
        note,
        customMood: undefined,
      });
    },
    [key, upsert],
  );

  /* =======================================================
     CUSTOM MOOD
     ======================================================= */

  const onCustomMood =
    useCallback(
      (
        mood: CustomMood,
        note: string,
      ) => {
        upsert(key, {
          mood: "custom",
          note,
          customMood: mood,
        });
      },
      [key, upsert],
    );

  /* =======================================================
     NOTE
     ======================================================= */

  const onNote = useCallback(
    (note: string) => {
      updateNote(key, note);
    },
    [key, updateNote],
  );

  /* =======================================================
     EXPORT ENTIRE JOURNAL
     ======================================================= */

  const exportJournal =
    useCallback(() => {
      if (!hydrated) {
        window.alert(
          "Moon is still loading your journal. Please try again in a moment.",
        );
        return;
      }

      const backup = {
        app: "Moon",
        version: 1,
        exportedAt:
          new Date().toISOString(),
        entries,
      };

      const date =
        new Date()
          .toISOString()
          .slice(0, 10);

      downloadJson(
        `moon-backup-${date}.json`,
        backup,
      );
    }, [entries, hydrated]);

  /* =======================================================
     IMPORT JOURNAL
     ======================================================= */

  const handleImportFile =
    useCallback(
      async (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        const file =
          event.target.files?.[0];

        event.target.value = "";

        if (!file) {
          return;
        }

        try {
          const text =
            await file.text();

          const parsed =
            JSON.parse(text);

          const importedEntries =
            parsed?.entries;

          if (
            !isValidEntries(
              importedEntries,
            )
          ) {
            window.alert(
              "This doesn't look like a valid Moon journal backup.",
            );
            return;
          }

          const count =
            Object.keys(
              importedEntries,
            ).length;

          const confirmed =
            window.confirm(
              `Import ${count} journal ${
                count === 1
                  ? "entry"
                  : "entries"
              } into Moon?\n\nExisting entries on the same dates will be replaced by the backup.`,
            );

          if (!confirmed) {
            return;
          }

          importEntries(
            importedEntries,
          );

          window.alert(
            `Successfully imported ${count} ${
              count === 1
                ? "entry"
                : "entries"
            }.`,
          );
        } catch {
          window.alert(
            "Moon couldn't read that file. Please choose a valid Moon JSON backup.",
          );
        }
      },
      [importEntries],
    );

  /* =======================================================
     EXPORT TODAY'S ENTRY
     ======================================================= */

  const exportCurrentEntry =
    useCallback(() => {
      if (!entry) {
        window.alert(
          "There is no journal entry for this day yet.",
        );
        return;
      }

      const exportData = {
        app: "Moon",
        version: 1,
        date: key,
        entry,
        exportedAt:
          new Date().toISOString(),
      };

      downloadJson(
        `moon-entry-${key}.json`,
        exportData,
      );
    }, [entry, key]);

  /* =======================================================
     STATS
     ======================================================= */

  const stats = useMemo(
    () => [
      {
        label: "Streak",
        value:
          streak === 0
            ? "—"
            : `${streak}d`,
      },
      {
        label: "This year",
        value: String(logged),
      },
      {
        label: "This month",
        value: weather
          ? MOOD_BY_ID[weather].label
          : "—",
      },
    ],
    [logged, streak, weather],
  );

  /* =======================================================
     APPEARANCE OPTIONS
     ======================================================= */

  const appearanceOptions: {
    value: Appearance;
    label: string;
  }[] = [
    {
      value: "light",
      label: "Light",
    },
    {
      value: "dark",
      label: "Dark",
    },
    {
      value: "rain",
      label: "Rain",
    },
    {
      value: "system",
      label: "System",
    },
  ];

 /* =======================================================
   UI
   ======================================================= */

if (showSplash) {
  return (
    <MoonSplash
      onComplete={() => setShowSplash(false)}
    />
  );
}

return (
    <div className="moon-app relative min-h-dvh pb-10">
      {/* BACKGROUND */}

      <div
        className="moon-background"
        aria-hidden="true"
      />

      <div
        className="moon-background-shade"
        aria-hidden="true"
      />

      {/* HEADER */}

      <header
        className="
          relative z-10
          mx-auto
          flex max-w-6xl
          flex-col gap-6
          px-4 pb-2 pt-7
          sm:px-6 sm:pt-10
          lg:flex-row
          lg:items-end
          lg:justify-between
        "
      >
        {/* BRAND */}

        <div className="flex items-start gap-3">
          <Mark />

          <div className="moon-brand-text">
            <h1
              className="
                moon-title
                font-display
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
              "
            >
              Moon
            </h1>

            <p className="moon-subtitle mt-2 max-w-sm">
              A quiet place for how the day felt.
            </p>

            <p className="moon-quote max-w-sm">
              Tell the moon what the day couldn't hear.
            </p>
          </div>
        </div>

        {/* SETTINGS */}

        <div
          className="
            absolute
            right-4 top-7
            sm:right-6 sm:top-10
          "
        >
          <button
            type="button"
            onClick={() =>
              setSettingsOpen(
                (open) => !open,
              )
            }
            className="
              moon-settings-button
              flex size-11
              items-center
              justify-center
              rounded-full
              border
              text-muted
              shadow-sm
              backdrop-blur-xl
              transition-all
              hover:-translate-y-0.5
              hover:text-fg
              hover:shadow-md
            "
            aria-label="Open settings"
            aria-expanded={
              settingsOpen
            }
          >
            <SettingsIcon />
          </button>

          {settingsOpen && (
            <div
              className="
                moon-settings-menu
                absolute
                right-0
                z-50
                mt-3
                w-64
                overflow-hidden
                rounded-2xl
                border
                p-2
                shadow-xl
                backdrop-blur-2xl
              "
            >
              {/* APPEARANCE */}

              <div className="px-3 pb-2 pt-2">
                <p className="moon-settings-heading">
                  Appearance
                </p>

                <p className="moon-settings-description">
                  Choose how Moon looks.
                </p>
              </div>

              <div className="space-y-1">
                {appearanceOptions.map(
                  (option) => {
                    const active =
                      appearance ===
                      option.value;

                    return (
                      <button
                        key={
                          option.value
                        }
                        type="button"
                        onClick={() => {
                          setAppearance(
                            option.value,
                          );
                          setSettingsOpen(
                            false,
                          );
                        }}
                        className={`
                          moon-settings-option
                          flex w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-3 py-2.5
                          text-left text-sm
                          transition
                          ${
                            active
                              ? "moon-settings-active"
                              : ""
                          }
                        `}
                      >
                        <span
                          className="
                            flex size-7
                            items-center
                            justify-center
                            rounded-lg
                          "
                        >
                          <AppearanceIcon
                            mode={
                              option.value
                            }
                          />
                        </span>

                        <span className="flex-1">
                          {option.label}
                        </span>

                        {active && (
                          <span
                            className="
                              size-1.5
                              rounded-full
                              bg-accent
                            "
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>

              {/* DIVIDER */}

              <div className="my-2 h-px bg-white/20" />

              {/* EXPORT JOURNAL */}

              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(
                    false,
                  );
                  exportJournal();
                }}
                className="
                  moon-settings-option
                  flex w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3 py-2.5
                  text-left text-sm
                  transition
                "
              >
                <span
                  className="
                    flex size-7
                    items-center
                    justify-center
                    rounded-lg
                    text-sm
                  "
                >
                  💾
                </span>

                <span className="flex-1">
                  Export Journal
                </span>
              </button>

              {/* IMPORT JOURNAL */}

              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(
                    false,
                  );
                  importInputRef.current?.click();
                }}
                className="
                  moon-settings-option
                  flex w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3 py-2.5
                  text-left text-sm
                  transition
                "
              >
                <span
                  className="
                    flex size-7
                    items-center
                    justify-center
                    rounded-lg
                    text-sm
                  "
                >
                  📥
                </span>

                <span className="flex-1">
                  Import Journal
                </span>
              </button>

              {/* EXPORT CURRENT ENTRY */}

              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(
                    false,
                  );
                  exportCurrentEntry();
                }}
                className="
                  moon-settings-option
                  flex w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3 py-2.5
                  text-left text-sm
                  transition
                "
              >
                <span
                  className="
                    flex size-7
                    items-center
                    justify-center
                    rounded-lg
                    text-sm
                  "
                >
                  📤
                </span>

                <span className="flex-1">
                  Export Today's Entry
                </span>
              </button>

              {/* DIVIDER */}

              <div className="my-2 h-px bg-white/20" />

              {/* PRIVACY POLICY */}

              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(
                    false,
                  );
                  setInfoDialog(
                    "privacy",
                  );
                }}
                className="
                  moon-settings-option
                  flex w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3 py-2.5
                  text-left text-sm
                  transition
                "
              >
                <span
                  className="
                    flex size-7
                    items-center
                    justify-center
                    rounded-lg
                    text-sm
                  "
                >
                  🔒
                </span>

                <span className="flex-1">
                  Privacy Policy
                </span>
              </button>

              {/* ABOUT MOON */}

              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(
                    false,
                  );
                  setInfoDialog(
                    "about",
                  );
                }}
                className="
                  moon-settings-option
                  flex w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3 py-2.5
                  text-left text-sm
                  transition
                "
              >
                <span
                  className="
                    flex size-7
                    items-center
                    justify-center
                    rounded-lg
                    text-sm
                  "
                >
                  🌙
                </span>

                <span className="flex-1">
                  About Moon
                </span>
              </button>
            </div>
          )}

          {/* HIDDEN IMPORT INPUT */}

          <input
            ref={importInputRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={
              handleImportFile
            }
          />
        </div>

        {/* STATS */}

        <dl
          className="
            moon-stats
            grid
            grid-cols-3
            gap-4
            sm:gap-8
          "
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="moon-stat-label">
                {stat.label}
              </dt>

              <dd className="moon-stat-value">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* MAIN */}

      <main
        className="
          relative z-10
          mx-auto
          grid max-w-6xl
          gap-4
          px-4 py-6
          sm:px-6
          lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
          lg:gap-5
          lg:py-8
        "
      >
        {/* TODAY */}

        <div className="moon-glass-wrapper">
          <TodayEditor
            date={selected}
            entry={entry}
            ready={hydrated}
            onMood={onMood}
            onCustomMood={
              onCustomMood
            }
            onNote={onNote}
            onClear={() =>
              clearDay(key)
            }
            onToday={goToday}
          />
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            flex flex-col
            gap-4
            lg:gap-5
          "
        >
          <div className="moon-glass-wrapper">
            <MonthCalendar
              month={viewMonth}
              selected={selected}
              entries={visibleEntries}
              onSelect={selectDate}
              onShiftMonth={(
                delta,
              ) =>
                setViewMonth(
                  (current) =>
                    shiftMonth(
                      current,
                      delta,
                    ),
                )
              }
            />
          </div>

          <div className="moon-glass-wrapper">
            <YearMosaic
              year={
                viewMonth.getFullYear()
              }
              viewMonth={viewMonth}
              entries={visibleEntries}
              onSelectMonth={(
                month,
              ) =>
                setViewMonth(
                  startOfMonth(
                    month,
                  ),
                )
              }
            />
          </div>
        </div>
      </main>

      {/* PRIVACY / ABOUT */}

      {infoDialog && (
        <MoonInfoDialog
          type={infoDialog}
          onClose={() =>
            setInfoDialog(null)
          }
        />
      )}
    </div>
  );
}