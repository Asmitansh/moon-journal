import { create } from "zustand";
import {
  createJSONStorage,
  persist,
} from "zustand/middleware";

import type { Entry } from "@/lib/journal";

type JournalState = {
  entries: Record<string, Entry>;
  hydrated: boolean;

  setHydrated: (hydrated: boolean) => void;

  upsert: (
    date: string,
    patch: Partial<Entry> & {
      mood: Entry["mood"];
    },
  ) => void;

  updateNote: (
    date: string,
    note: string,
  ) => void;

  clearDay: (date: string) => void;

  importEntries: (
    entries: Record<string, Entry>,
  ) => void;
};

function clientStorage() {
  if (typeof window === "undefined") {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }

  return localStorage;
}

export const useJournalStore =
  create<JournalState>()(
    persist(
      (set, get) => ({
        entries: {},
        hydrated: false,

        setHydrated: (hydrated) =>
          set({ hydrated }),

        upsert: (date, patch) => {
          const prev = get().entries[date];

          set({
            entries: {
              ...get().entries,

              [date]: {
                mood: patch.mood,

                note:
                  patch.note ??
                  prev?.note ??
                  "",

                customMood:
                  patch.customMood ??
                  prev?.customMood,
              },
            },
          });
        },

        updateNote: (date, note) => {
          const prev =
            get().entries[date];

          if (!prev) return;

          set({
            entries: {
              ...get().entries,

              [date]: {
                ...prev,
                note,
              },
            },
          });
        },

        clearDay: (date) => {
          const next = {
            ...get().entries,
          };

          delete next[date];

          set({
            entries: next,
          });
        },

        importEntries: (importedEntries) => {
          set({
            entries: {
              ...get().entries,
              ...importedEntries,
            },
          });
        },
      }),

      {
        name: "lumen-journal-v1",

        storage:
          createJSONStorage(
            clientStorage,
          ),

        partialize: (state) => ({
          entries: state.entries,
        }),

        skipHydration: true,
      },
    ),
  );

let hydrateStarted = false;

export function hydrateJournalStore() {
  if (hydrateStarted) return;

  hydrateStarted = true;

  void useJournalStore.persist.rehydrate();
}