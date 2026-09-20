import { format } from "date-fns";
import { useEffect, useState } from "react";
import { MoodPicker } from "@/components/mood-picker";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  dayIsToday,
  MOOD_BY_ID,
  promptFor,
  wordCount,
  type CustomMood,
  type Entry,
  type MoodId,
} from "@/lib/journal";
import { cn } from "@/lib/utils";

export function TodayEditor({
  date,
  entry,
  ready,
  onMood,
  onCustomMood,
  onNote,
  onClear,
  onToday,
}: {
  date: Date;
  entry?: Entry;
  ready: boolean;
  onMood: (
    mood: MoodId,
    note: string,
  ) => void;
  onCustomMood: (
    mood: CustomMood,
    note: string,
  ) => void;
  onNote: (note: string) => void;
  onClear: () => void;
  onToday: () => void;
}) {
  const [note, setNote] =
    useState(entry?.note ?? "");

  const [kept, setKept] =
    useState(false);

  const today =
    dayIsToday(date);

  useEffect(() => {
    setNote(entry?.note ?? "");
  }, [date, entry?.note]);

  useEffect(() => {
    if (!entry?.mood) return;

    if (
      note ===
      (entry.note ?? "")
    ) {
      return;
    }

    const timer =
      window.setTimeout(() => {
        onNote(note);
        setKept(true);
      }, 400);

    return () =>
      window.clearTimeout(timer);
  }, [
    note,
    entry?.mood,
    entry?.note,
    onNote,
  ]);

  useEffect(() => {
    if (!kept) return;

    const timer =
      window.setTimeout(
        () => setKept(false),
        1400,
      );

    return () =>
      window.clearTimeout(timer);
  }, [kept]);

  const words =
    wordCount(note);

  const prompt =
    promptFor(date);

  const customMood =
    entry?.mood === "custom"
      ? entry.customMood
      : undefined;

  const moodLabel =
    entry?.mood === "custom" &&
    customMood
      ? customMood.label
      : entry?.mood
        ? MOOD_BY_ID[
            entry.mood
          ].label
        : null;

  return (
    <section className="paper-card flex h-full flex-col p-5 sm:p-7">
      {/* =================================================
          DATE HEADER
          ================================================= */}

      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <p className="moon-editor-label text-xs font-semibold uppercase tracking-caps">
            {today
              ? "Today"
              : "Looking back"}
          </p>

          <h2
            className="
              moon-editor-day
              font-display
              text-3xl
              font-semibold
              tracking-tight
              sm:text-4xl
            "
          >
            {format(
              date,
              "EEEE",
            )}
          </h2>

          <p className="moon-editor-date mt-1">
            {format(
              date,
              "MMMM d, yyyy",
            )}
          </p>
        </div>

        {!today && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onToday}
          >
            Back to today
          </Button>
        )}
      </div>

      {/* =================================================
          DAILY PROMPT
          ================================================= */}

      <p
        className="
          moon-daily-prompt
          mb-5
          max-w-md
          font-display
          text-xl
          font-semibold
          leading-snug
        "
      >
        {prompt}
      </p>

      {/* =================================================
          MOOD LABEL
          ================================================= */}

      <div className="mb-2 flex items-center justify-between">
        <p className="moon-editor-label text-xs font-semibold uppercase tracking-caps">
          How it felt
        </p>

        {moodLabel && (
          <span className="moon-selected-mood">
            {moodLabel}
          </span>
        )}
      </div>

      {/* =================================================
          MOOD PICKER
          ================================================= */}

      <MoodPicker
        value={entry?.mood}
        customMood={customMood}
        disabled={!ready}
        onChange={(mood) => {
          onMood(mood, note);
          setKept(true);
        }}
        onCustomMood={(mood) => {
          onCustomMood(
            mood,
            note,
          );
          setKept(true);
        }}
      />

      {/* =================================================
          NOTE
          ================================================= */}

      <label
        className="
          moon-editor-label
          mt-6 mb-2
          text-xs
          font-semibold
          uppercase
          tracking-caps
        "
        htmlFor="lumen-note"
      >
        A few lines
      </label>

      <Textarea
        id="lumen-note"
        value={note}
        maxLength={2000}
        placeholder={
          entry?.mood
            ? "Keep going. The page is already listening."
            : "Pick a mood, then write whatever stays."
        }
        onChange={(event) =>
          setNote(
            event.target.value,
          )
        }
        disabled={!ready}
        className="moon-note-input"
      />

      {/* =================================================
          FOOTER
          ================================================= */}

      <div
        className="
          mt-3
          flex min-h-9
          items-center
          justify-between
          gap-3
          text-sm
        "
      >
        <span className="moon-word-count tabular-nums">
          {words}{" "}
          {words === 1
            ? "word"
            : "words"}
        </span>

        <div className="flex items-center gap-3">
          <span
            className={cn(
              "moon-kept text-xs tracking-wide transition-opacity duration-150",
              kept
                ? "opacity-100"
                : "opacity-0",
            )}
          >
            Kept
          </span>

          {entry && (
            <button
              type="button"
              className="
                moon-clear-button
                text-xs
                tracking-wide
                underline-offset-4
                hover:underline
              "
              onClick={() => {
                setNote("");
                onClear();
              }}
            >
              Clear day
            </button>
          )}
        </div>
      </div>

      {/* =================================================
          MOOD SUMMARY
          ================================================= */}

      {entry?.mood ? (
        <p className="moon-mood-summary mt-6 border-t pt-5 text-sm">
          Logged as{" "}
          <span className="moon-summary-label">
            {moodLabel}
          </span>

          <span className="moon-summary-hint">
            {" "}
            —{" "}
            {entry.mood ===
            "custom"
              ? customMood?.hint
              : MOOD_BY_ID[
                  entry.mood
                ].hint}
          </span>
        </p>
      ) : (
        <p className="moon-mood-summary mt-6 border-t pt-5 text-sm">
          Begin with a mood. One tap,
          a few lines, and the year
          starts to fill.
        </p>
      )}
    </section>
  );
}