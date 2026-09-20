import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";

/* =========================================================
   MOODS
   ========================================================= */

export const MOODS = [
  {
    id: "radiant",
    label: "Radiant",
    hint: "Light, open, lifted",
  },
  {
    id: "calm",
    label: "Calm",
    hint: "Steady, unhurried",
  },
  {
    id: "tender",
    label: "Tender",
    hint: "Soft, close to the surface",
  },
  {
    id: "alive",
    label: "Alive",
    hint: "Moving, hungry, awake",
  },
  {
    id: "quiet",
    label: "Quiet",
    hint: "Low volume, still here",
  },
  {
    id: "storm",
    label: "Storm",
    hint: "Weather, not weather-proof",
  },
  {
    id: "heavy",
    label: "Heavy",
    hint: "Weight without a name",
  },
] as const;

export type PresetMoodId =
  (typeof MOODS)[number]["id"];

/*
 * "custom" is used when the user creates
 * their own mood.
 */
export type MoodId =
  | PresetMoodId
  | "custom";

/* =========================================================
   CUSTOM MOOD
   ========================================================= */

export type CustomMood = {
  label: string;
  hint: string;
  emoji: string;
};

/* =========================================================
   MOOD LOOKUP
   ========================================================= */

export const MOOD_BY_ID: Record<
  MoodId,
  {
    id: MoodId;
    label: string;
    hint: string;
  }
> = {
  ...Object.fromEntries(
    MOODS.map((mood) => [
      mood.id,
      mood,
    ]),
  ),

  custom: {
    id: "custom",
    label: "Custom",
    hint: "A feeling in your own words",
  },
} as Record<
  MoodId,
  {
    id: MoodId;
    label: string;
    hint: string;
  }
>;

/* =========================================================
   MOOD SWATCHES
   ========================================================= */

export const MOOD_SWATCH: Record<
  MoodId,
  string
> = {
  radiant: "bg-mood-radiant",
  calm: "bg-mood-calm",
  tender: "bg-mood-tender",
  alive: "bg-mood-alive",
  quiet: "bg-mood-quiet",
  storm: "bg-mood-storm",
  heavy: "bg-mood-heavy",

  /* Custom moods get a neutral accent */
  custom: "bg-mood-quiet",
};

/* =========================================================
   DAILY PROMPTS
   ========================================================= */

const PROMPTS = [
  "What lingered after the noise went quiet?",
  "Where did the light fall today?",
  "Name one true thing, even if it is small.",
  "What did you almost say?",
  "Who or what made the day feel longer?",
  "What would you keep if the rest washed away?",
  "How did your body vote?",
  "What are you pretending not to know?",
  "A moment that asked to be remembered.",
  "What did kindness look like, given or received?",
  "Where were you when you felt most like yourself?",
  "What did you put down, or refuse to?",
  "Which hour changed the temperature of the day?",
  "What are you grateful for that is not impressive?",
  "If the day had a weather, what was it?",
  "What did you need that you did not ask for?",
  "A sentence you would send to yesterday.",
  "What surprised you by being ordinary?",
  "Where did attention go when you were not steering it?",
  "What felt unfinished, and can it stay that way?",
  "Who did you become for an hour?",
  "What would be honest to leave unsolved tonight?",
  "A texture, a sound, a taste worth keeping.",
  "What did you protect?",
  "Where was the day generous?",
  "What story did you tell yourself, and was it kind?",
  "If you could redo one minute, which one, and why not?",
  "What is quietly working?",
  "What did you notice only after it was gone?",
  "How will you know tomorrow that you were here?",
];

/* =========================================================
   ENTRY
   ========================================================= */

export type Entry = {
  mood: MoodId;
  note: string;

  /*
   * Only present when mood === "custom".
   */
  customMood?: CustomMood;
};

/* =========================================================
   DATE HELPERS
   ========================================================= */

export function dateKey(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function parseKey(key: string): Date {
  const [year, month, day] =
    key.split("-").map(Number);

  return new Date(
    year,
    (month ?? 1) - 1,
    day ?? 1,
  );
}

export function isFutureDay(
  date: Date,
  today = new Date(),
): boolean {
  return isAfter(
    startOfDay(date),
    startOfDay(today),
  );
}

/* =========================================================
   PROMPTS
   ========================================================= */

export function promptFor(
  date: Date,
): string {
  const start = new Date(
    date.getFullYear(),
    0,
    0,
  );

  const dayOfYear = Math.floor(
    (date.getTime() - start.getTime()) /
      86_400_000,
  );

  return (
    PROMPTS[
      dayOfYear % PROMPTS.length
    ] ?? PROMPTS[0]!
  );
}

/* =========================================================
   WORD COUNT
   ========================================================= */

export function wordCount(
  note: string,
): number {
  const trimmed = note.trim();

  if (!trimmed) return 0;

  return trimmed.split(/\s+/).length;
}

/* =========================================================
   STREAK
   ========================================================= */

export function currentStreak(
  entries: Record<string, Entry>,
  today = new Date(),
): number {
  let cursor = startOfDay(today);

  if (!entries[dateKey(cursor)]) {
    cursor = subDays(cursor, 1);
  }

  let count = 0;

  while (
    entries[dateKey(cursor)]?.mood
  ) {
    count += 1;
    cursor = subDays(cursor, 1);
  }

  return count;
}

/* =========================================================
   DOMINANT MOOD
   ========================================================= */

export function dominantMood(
  entries: Record<string, Entry>,
  month: Date,
): MoodId | null {
  const counts = new Map<
    PresetMoodId,
    number
  >();

  for (const [key, entry] of Object.entries(
    entries,
  )) {
    const date = parseKey(key);

    if (!isSameMonth(date, month)) {
      continue;
    }

    /*
     * Custom moods are valid journal moods,
     * but they are not included in the
     * preset monthly comparison.
     */
    if (entry.mood === "custom") {
      continue;
    }

    counts.set(
      entry.mood,
      (counts.get(entry.mood) ?? 0) + 1,
    );
  }

  let best: PresetMoodId | null = null;
  let bestCount = 0;

  for (const mood of MOODS) {
    const count =
      counts.get(mood.id) ?? 0;

    if (count > bestCount) {
      best = mood.id;
      bestCount = count;
    }
  }

  return best;
}

/* =========================================================
   YEAR COUNT
   ========================================================= */

export function yearCount(
  entries: Record<string, Entry>,
  year: number,
): number {
  let count = 0;

  for (const key of Object.keys(entries)) {
    if (key.startsWith(`${year}-`)) {
      count += 1;
    }
  }

  return count;
}

/* =========================================================
   CALENDAR
   ========================================================= */

export function monthGrid(
  month: Date,
): Date[] {
  const start = startOfWeek(
    startOfMonth(month),
    {
      weekStartsOn: 1,
    },
  );

  const end = endOfWeek(
    endOfMonth(month),
    {
      weekStartsOn: 1,
    },
  );

  return eachDayOfInterval({
    start,
    end,
  });
}

export function yearMonths(
  year: number,
): Date[] {
  return Array.from(
    { length: 12 },
    (_, index) =>
      new Date(year, index, 1),
  );
}

export function shiftMonth(
  month: Date,
  delta: number,
): Date {
  return addMonths(
    startOfMonth(month),
    delta,
  );
}

export function weekdayLabels(): string[] {
  return [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S",
  ];
}

export function sameDay(
  a: Date,
  b: Date,
): boolean {
  return isSameDay(a, b);
}

export function dayIsToday(
  date: Date,
): boolean {
  return isToday(date);
}

export function inMonth(
  date: Date,
  month: Date,
): boolean {
  return isSameMonth(date, month);
}