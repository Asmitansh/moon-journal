import { format } from "date-fns";
import {
  dateKey,
  isFutureDay,
  monthGrid,
  MOOD_SWATCH,
  yearMonths,
  type Entry,
} from "@/lib/journal";
import { cn } from "@/lib/utils";

export function YearMosaic({
  year,
  viewMonth,
  entries,
  onSelectMonth,
}: {
  year: number;
  viewMonth: Date;
  entries: Record<string, Entry>;
  onSelectMonth: (month: Date) => void;
}) {
  const months = yearMonths(year);

  return (
    <section className="paper-card p-4 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-caps text-subtle">Year</p>
      <h2 className="mb-5 font-display text-2xl font-medium tracking-tight text-fg">{year}</h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
        {months.map((month) => {
          const days = monthGrid(month).filter((day) => day.getMonth() === month.getMonth());
          const active = month.getMonth() === viewMonth.getMonth() && month.getFullYear() === year;
          return (
            <button
              key={format(month, "yyyy-MM")}
              type="button"
              onClick={() => onSelectMonth(month)}
              className={cn(
                "min-h-11 rounded-xl p-2 text-left transition-[background-color,box-shadow] duration-150 ease-out pressable",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                active ? "bg-fg/5 ring-1 ring-fg/15" : "hover:bg-fg/4",
              )}
            >
              <div className="mb-2 text-xs font-medium uppercase tracking-label text-muted">
                {format(month, "MMM")}
              </div>
              <div className="grid grid-cols-7 gap-px">
                {days.map((day) => {
                  const entry = entries[dateKey(day)];
                  const future = isFutureDay(day);
                  return (
                    <span
                      key={dateKey(day)}
                      className={cn(
                        "aspect-square rounded-xs",
                        entry ? MOOD_SWATCH[entry.mood] : "bg-mood-empty",
                        future && "opacity-30",
                      )}
                    />
                  );
                })}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
