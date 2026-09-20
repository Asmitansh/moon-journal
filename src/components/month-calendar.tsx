import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import {
  dateKey,
  dayIsToday,
  inMonth,
  isFutureDay,
  monthGrid,
  MOOD_BY_ID,
  MOOD_SWATCH,
  sameDay,
  weekdayLabels,
  type Entry,
} from "@/lib/journal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function MonthCalendar({
  month,
  selected,
  entries,
  onSelect,
  onShiftMonth,
}: {
  month: Date;
  selected: Date;
  entries: Record<string, Entry>;
  onSelect: (date: Date) => void;
  onShiftMonth: (delta: number) => void;
}) {
  const days = monthGrid(month);

  return (
    <section className="paper-card p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-caps text-subtle">Month</p>
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">
            {format(month, "MMMM yyyy")}
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Previous month"
            onClick={() => onShiftMonth(-1)}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Next month"
            onClick={() => onShiftMonth(1)}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-subtle">
        {weekdayLabels().map((label, index) => (
          <div key={`${label}-${index}`} className="py-1">
            {label}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {days.map((day) => {
          const key = dateKey(day);
          const entry = entries[key];
          const future = isFutureDay(day);
          const outside = !inMonth(day, month);
          const selectedDay = sameDay(day, selected);
          const today = dayIsToday(day);
          const moodClass = entry ? MOOD_SWATCH[entry.mood] : "bg-mood-empty";
          const label = entry
            ? `${format(day, "MMMM d")}. ${MOOD_BY_ID[entry.mood].label}`
            : format(day, "MMMM d");

          return (
            <button
              key={key}
              type="button"
              disabled={future}
              onClick={() => onSelect(day)}
              aria-label={label}
              aria-current={today ? "date" : undefined}
              aria-pressed={selectedDay}
              className={cn(
                "relative flex h-10 w-full items-center justify-center rounded-lg text-sm tabular-nums sm:h-11",
                "transition-[background-color,box-shadow,color] duration-150 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                future && "cursor-default opacity-35",
                !future && "pressable hover:bg-fg/5",
                outside && "opacity-40",
                selectedDay && "bg-fg/5 ring-1 ring-fg/20",
              )}
            >
              <span
                className={cn(
                  "absolute left-1/2 top-1 size-2 -translate-x-1/2 rounded-full",
                  moodClass,
                  !entry && "opacity-70",
                )}
              />
              <span className={cn("mt-1", today && "font-semibold text-fg")}>{format(day, "d")}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
