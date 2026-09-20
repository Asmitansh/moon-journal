import { useState } from "react";
import {
  MOODS,
  type CustomMood,
  type MoodId,
} from "@/lib/journal";
import { cn } from "@/lib/utils";

/* =========================================================
   MOON — MOOD EMOJIS
   ========================================================= */

const MOOD_EMOJI: Record<
  string,
  string
> = {
  radiant: "✨",
  calm: "🌿",
  tender: "🌸",
  alive: "🔥",
  quiet: "🌙",
  storm: "🌧️",
  heavy: "🌊",
};

/* =========================================================
   MOOD CLASSES
   ========================================================= */

const MOOD_CLASS: Record<
  string,
  string
> = {
  radiant: "mood-radiant",
  calm: "mood-calm",
  tender: "mood-tender",
  alive: "mood-alive",
  quiet: "mood-quiet",
  storm: "mood-storm",
  heavy: "mood-heavy",
  custom: "mood-custom",
};

/* =========================================================
   MOOD PICKER
   ========================================================= */

export function MoodPicker({
  value,
  customMood,
  onChange,
  onCustomMood,
  disabled = false,
}: {
  value?: MoodId;
  customMood?: CustomMood;
  onChange: (mood: MoodId) => void;
  onCustomMood: (
    mood: CustomMood,
  ) => void;
  disabled?: boolean;
}) {
  const [
    customOpen,
    setCustomOpen,
  ] = useState(false);

  const [customLabel, setCustomLabel] =
    useState("");

  const [customEmoji, setCustomEmoji] =
    useState("💭");

  const openCustomMood = () => {
    if (disabled) return;

    setCustomLabel(
      customMood?.label ?? "",
    );

    setCustomEmoji(
      customMood?.emoji ?? "💭",
    );

    setCustomOpen(true);
  };

  const saveCustomMood = () => {
    const label =
      customLabel.trim();

    if (!label) {
      return;
    }

    const emoji =
      customEmoji.trim() || "💭";

    onCustomMood({
      label,
      emoji,
      hint: "A feeling in your own words",
    });

    setCustomOpen(false);
  };

  return (
    <>
      <div
        role="radiogroup"
        aria-label="How the day felt"
        className="
          grid
          grid-cols-4
          gap-2.5
          sm:gap-3
        "
      >
        {MOODS.map((mood) => {
          const selected =
            value === mood.id;

          const emoji =
            MOOD_EMOJI[
              mood.id
            ] ?? "✨";

          const moodClass =
            MOOD_CLASS[
              mood.id
            ] ?? "mood-default";

          return (
            <button
              key={mood.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`${mood.label}. ${mood.hint}`}
              title={mood.hint}
              disabled={disabled}
              onClick={() =>
                onChange(mood.id)
              }
              className={cn(
                "moon-mood-button",
                moodClass,
                "group flex min-h-[72px] w-full",
                "flex-col items-center justify-center",
                "gap-1.5 rounded-2xl px-1.5 py-2",
                "transition-all duration-200 ease-out",
                "pressable",
                selected &&
                  "moon-mood-selected",
              )}
            >
              <span
                className={cn(
                  "moon-mood-emoji",
                  selected &&
                    "moon-mood-emoji-selected",
                )}
                aria-hidden="true"
              >
                {emoji}
              </span>

              <span className="moon-mood-label">
                {mood.label}
              </span>
            </button>
          );
        })}

        {/* =================================================
            CUSTOM MOOD / ADD MOOD
            ================================================= */}

        <button
          type="button"
          role="radio"
          aria-checked={
            value === "custom"
          }
          disabled={disabled}
          onClick={openCustomMood}
          className={cn(
            "moon-mood-button",
            "mood-custom",
            "group flex min-h-[72px] w-full",
            "flex-col items-center justify-center",
            "gap-1.5 rounded-2xl px-1.5 py-2",
            "transition-all duration-200 ease-out",
            "pressable",
            value === "custom" &&
              "moon-mood-selected",
          )}
        >
          {value === "custom" &&
          customMood ? (
            <>
              <span
                className="
                  moon-mood-emoji
                  moon-mood-emoji-selected
                "
              >
                {customMood.emoji}
              </span>

              <span className="moon-mood-label">
                {customMood.label}
              </span>
            </>
          ) : (
            <>
              <span className="moon-add-symbol">
                +
              </span>

              <span className="moon-mood-label">
                Add mood
              </span>
            </>
          )}
        </button>
      </div>

      {/* =================================================
          CUSTOM MOOD DIALOG
          ================================================= */}

      {customOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/30
            p-4
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setCustomOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="custom-mood-title"
            className="
              moon-custom-dialog
              w-full max-w-sm
              rounded-3xl
              p-6
            "
          >
            <p
              id="custom-mood-title"
              className="
                moon-dialog-title
                font-display
                text-2xl
                font-semibold
              "
            >
              Add your mood
            </p>

            <p className="moon-dialog-subtitle mt-1 text-sm">
              Give this feeling a name of
              your own.
            </p>

            <label
              className="
                moon-dialog-label
                mt-5 block
                text-xs
                font-semibold
                uppercase
                tracking-caps
              "
              htmlFor="custom-mood-name"
            >
              Mood name
            </label>

            <input
              id="custom-mood-name"
              value={customLabel}
              onChange={(event) =>
                setCustomLabel(
                  event.target.value,
                )
              }
              onKeyDown={(event) => {
                if (
                  event.key ===
                  "Enter"
                ) {
                  saveCustomMood();
                }
              }}
              maxLength={24}
              autoFocus
              placeholder="e.g. Grateful"
              className="
                moon-custom-input
                mt-2
                w-full
                rounded-xl
                px-3 py-2.5
                outline-none
              "
            />

            <label
              className="
                moon-dialog-label
                mt-4 block
                text-xs
                font-semibold
                uppercase
                tracking-caps
              "
              htmlFor="custom-mood-emoji"
            >
              Emoji
            </label>

            <input
              id="custom-mood-emoji"
              value={customEmoji}
              onChange={(event) =>
                setCustomEmoji(
                  event.target.value,
                )
              }
              maxLength={4}
              className="
                moon-custom-input
                mt-2
                w-20
                rounded-xl
                px-3 py-2.5
                text-center
                text-xl
                outline-none
              "
            />

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() =>
                  setCustomOpen(false)
                }
                className="
                  moon-dialog-cancel
                  rounded-xl
                  px-4 py-2.5
                  text-sm
                  font-medium
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveCustomMood}
                disabled={
                  !customLabel.trim()
                }
                className="
                  moon-dialog-save
                  rounded-xl
                  px-4 py-2.5
                  text-sm
                  font-semibold
                "
              >
                Add mood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}