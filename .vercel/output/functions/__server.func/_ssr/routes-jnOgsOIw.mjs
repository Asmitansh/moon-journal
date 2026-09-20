import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronLeft, r as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { a as format, c as eachDayOfInterval, d as startOfDay, f as startOfWeek, i as isAfter, l as endOfMonth, n as isToday, o as endOfWeek, p as addMonths, r as isSameMonth, s as startOfMonth, t as subDays, u as isSameDay } from "../_libs/date-fns.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jnOgsOIw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MoonInfoDialog({ type, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "moon-info-overlay",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "moon-info-title",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "moon-info-dialog",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "moon-info-close",
				onClick: onClose,
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
			}), type === "privacy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "moon-info-icon",
					children: "🔒"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "moon-info-title",
					className: "moon-info-title",
					children: "Privacy Policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "moon-info-updated",
					children: "Last updated: September 20, 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "moon-info-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Moon is a quiet journaling space designed to help you pause, reflect, and remember how your days felt." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Journal Entries & Local Storage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In the current version of Moon, your journal entries are stored locally in your browser using local storage. Your entries are not synced between devices." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Accounts" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Moon does not currently require an account, login, or signup to use the journal." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Analytics & Advertising" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The current Moon client does not use advertising or analytics services." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Your Data" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Because journal entries are stored locally, you control the entries saved by Moon on your device. Clearing Moon's site data or browser storage can permanently remove locally stored journal entries." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Deleting Journal Entries" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You can remove an individual day's entry using the clear option available in Moon. To remove all locally stored Moon data, clear the site's local storage from your browser settings." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Third-Party Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Moon does not currently require third-party services to store your journal entries." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Changes to This Policy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If Moon's data practices change in a future version, this policy may be updated to reflect those changes." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Privacy Questions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you have a question about Moon's privacy practices, please use the contact information provided with the version of the app you are using." })] })
					]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "moon-info-icon",
					children: "🌙"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "moon-info-title",
					className: "moon-info-title",
					children: "About Moon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "moon-about-tagline",
					children: "A quiet place for how the day felt."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "moon-info-content moon-about-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Moon is a private journaling space designed to help you pause, reflect, and remember how your days felt." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Choose a mood, write what is on your mind, and let your days become a small collection of moments worth keeping." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "moon-about-credit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Version 1.0.0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Created by Asmit" })]
						})
					]
				})
			] })]
		})
	});
}
var MOODS = [
	{
		id: "radiant",
		label: "Radiant",
		hint: "Light, open, lifted"
	},
	{
		id: "calm",
		label: "Calm",
		hint: "Steady, unhurried"
	},
	{
		id: "tender",
		label: "Tender",
		hint: "Soft, close to the surface"
	},
	{
		id: "alive",
		label: "Alive",
		hint: "Moving, hungry, awake"
	},
	{
		id: "quiet",
		label: "Quiet",
		hint: "Low volume, still here"
	},
	{
		id: "storm",
		label: "Storm",
		hint: "Weather, not weather-proof"
	},
	{
		id: "heavy",
		label: "Heavy",
		hint: "Weight without a name"
	}
];
var MOOD_BY_ID = {
	...Object.fromEntries(MOODS.map((mood) => [mood.id, mood])),
	custom: {
		id: "custom",
		label: "Custom",
		hint: "A feeling in your own words"
	}
};
var MOOD_SWATCH = {
	radiant: "bg-mood-radiant",
	calm: "bg-mood-calm",
	tender: "bg-mood-tender",
	alive: "bg-mood-alive",
	quiet: "bg-mood-quiet",
	storm: "bg-mood-storm",
	heavy: "bg-mood-heavy",
	custom: "bg-mood-quiet"
};
var PROMPTS = [
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
	"How will you know tomorrow that you were here?"
];
function dateKey(date) {
	return format(date, "yyyy-MM-dd");
}
function parseKey(key) {
	const [year, month, day] = key.split("-").map(Number);
	return new Date(year, (month ?? 1) - 1, day ?? 1);
}
function isFutureDay(date, today = /* @__PURE__ */ new Date()) {
	return isAfter(startOfDay(date), startOfDay(today));
}
function promptFor(date) {
	const start = new Date(date.getFullYear(), 0, 0);
	return PROMPTS[Math.floor((date.getTime() - start.getTime()) / 864e5) % PROMPTS.length] ?? PROMPTS[0];
}
function wordCount(note) {
	const trimmed = note.trim();
	if (!trimmed) return 0;
	return trimmed.split(/\s+/).length;
}
function currentStreak(entries, today = /* @__PURE__ */ new Date()) {
	let cursor = startOfDay(today);
	if (!entries[dateKey(cursor)]) cursor = subDays(cursor, 1);
	let count = 0;
	while (entries[dateKey(cursor)]?.mood) {
		count += 1;
		cursor = subDays(cursor, 1);
	}
	return count;
}
function dominantMood(entries, month) {
	const counts = /* @__PURE__ */ new Map();
	for (const [key, entry] of Object.entries(entries)) {
		const date = parseKey(key);
		if (!isSameMonth(date, month)) continue;
		if (entry.mood === "custom") continue;
		counts.set(entry.mood, (counts.get(entry.mood) ?? 0) + 1);
	}
	let best = null;
	let bestCount = 0;
	for (const mood of MOODS) {
		const count = counts.get(mood.id) ?? 0;
		if (count > bestCount) {
			best = mood.id;
			bestCount = count;
		}
	}
	return best;
}
function yearCount(entries, year) {
	let count = 0;
	for (const key of Object.keys(entries)) if (key.startsWith(`${year}-`)) count += 1;
	return count;
}
function monthGrid(month) {
	const start = startOfWeek(startOfMonth(month), { weekStartsOn: 1 });
	const end = endOfWeek(endOfMonth(month), { weekStartsOn: 1 });
	return eachDayOfInterval({
		start,
		end
	});
}
function yearMonths(year) {
	return Array.from({ length: 12 }, (_, index) => new Date(year, index, 1));
}
function shiftMonth(month, delta) {
	return addMonths(startOfMonth(month), delta);
}
function weekdayLabels() {
	return [
		"M",
		"T",
		"W",
		"T",
		"F",
		"S",
		"S"
	];
}
function sameDay(a, b) {
	return isSameDay(a, b);
}
function dayIsToday(date) {
	return isToday(date);
}
function inMonth(date, month) {
	return isSameMonth(date, month);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[color,background-color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 pressable", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-paper hover:opacity-90",
			ghost: "text-muted hover:text-fg hover:bg-fg/5",
			outline: "bg-surface text-fg shadow-paper hover:shadow-paper-hover"
		},
		size: {
			md: "h-11 rounded-lg px-4 text-sm",
			sm: "h-9 rounded-md px-3 text-sm",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function MonthCalendar({ month, selected, entries, onSelect, onShiftMonth }) {
	const days = monthGrid(month);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "paper-card p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-caps text-subtle",
					children: "Month"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight text-fg",
					children: format(month, "MMMM yyyy")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						"aria-label": "Previous month",
						onClick: () => onShiftMonth(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						"aria-label": "Next month",
						onClick: () => onShiftMonth(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-1 text-center text-xs font-medium text-subtle",
				children: weekdayLabels().map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-1",
					children: label
				}, `${label}-${index}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 grid grid-cols-7 gap-1",
				children: days.map((day) => {
					const key = dateKey(day);
					const entry = entries[key];
					const future = isFutureDay(day);
					const outside = !inMonth(day, month);
					const selectedDay = sameDay(day, selected);
					const today = dayIsToday(day);
					const moodClass = entry ? MOOD_SWATCH[entry.mood] : "bg-mood-empty";
					const label = entry ? `${format(day, "MMMM d")}. ${MOOD_BY_ID[entry.mood].label}` : format(day, "MMMM d");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: future,
						onClick: () => onSelect(day),
						"aria-label": label,
						"aria-current": today ? "date" : void 0,
						"aria-pressed": selectedDay,
						className: cn("relative flex h-10 w-full items-center justify-center rounded-lg text-sm tabular-nums sm:h-11", "transition-[background-color,box-shadow,color] duration-150 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50", future && "cursor-default opacity-35", !future && "pressable hover:bg-fg/5", outside && "opacity-40", selectedDay && "bg-fg/5 ring-1 ring-fg/20"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-1/2 top-1 size-2 -translate-x-1/2 rounded-full", moodClass, !entry && "opacity-70") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-1", today && "font-semibold text-fg"),
							children: format(day, "d")
						})]
					}, key);
				})
			})
		]
	});
}
var MOOD_EMOJI = {
	radiant: "✨",
	calm: "🌿",
	tender: "🌸",
	alive: "🔥",
	quiet: "🌙",
	storm: "🌧️",
	heavy: "🌊"
};
var MOOD_CLASS = {
	radiant: "mood-radiant",
	calm: "mood-calm",
	tender: "mood-tender",
	alive: "mood-alive",
	quiet: "mood-quiet",
	storm: "mood-storm",
	heavy: "mood-heavy",
	custom: "mood-custom"
};
function MoodPicker({ value, customMood, onChange, onCustomMood, disabled = false }) {
	const [customOpen, setCustomOpen] = (0, import_react.useState)(false);
	const [customLabel, setCustomLabel] = (0, import_react.useState)("");
	const [customEmoji, setCustomEmoji] = (0, import_react.useState)("💭");
	const openCustomMood = () => {
		if (disabled) return;
		setCustomLabel(customMood?.label ?? "");
		setCustomEmoji(customMood?.emoji ?? "💭");
		setCustomOpen(true);
	};
	const saveCustomMood = () => {
		const label = customLabel.trim();
		if (!label) return;
		onCustomMood({
			label,
			emoji: customEmoji.trim() || "💭",
			hint: "A feeling in your own words"
		});
		setCustomOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "radiogroup",
		"aria-label": "How the day felt",
		className: "\n          grid\n          grid-cols-4\n          gap-2.5\n          sm:gap-3\n        ",
		children: [MOODS.map((mood) => {
			const selected = value === mood.id;
			const emoji = MOOD_EMOJI[mood.id] ?? "✨";
			const moodClass = MOOD_CLASS[mood.id] ?? "mood-default";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": selected,
				"aria-label": `${mood.label}. ${mood.hint}`,
				title: mood.hint,
				disabled,
				onClick: () => onChange(mood.id),
				className: cn("moon-mood-button", moodClass, "group flex min-h-[72px] w-full", "flex-col items-center justify-center", "gap-1.5 rounded-2xl px-1.5 py-2", "transition-all duration-200 ease-out", "pressable", selected && "moon-mood-selected"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("moon-mood-emoji", selected && "moon-mood-emoji-selected"),
					"aria-hidden": "true",
					children: emoji
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "moon-mood-label",
					children: mood.label
				})]
			}, mood.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "radio",
			"aria-checked": value === "custom",
			disabled,
			onClick: openCustomMood,
			className: cn("moon-mood-button", "mood-custom", "group flex min-h-[72px] w-full", "flex-col items-center justify-center", "gap-1.5 rounded-2xl px-1.5 py-2", "transition-all duration-200 ease-out", "pressable", value === "custom" && "moon-mood-selected"),
			children: value === "custom" && customMood ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "\n                  moon-mood-emoji\n                  moon-mood-emoji-selected\n                ",
				children: customMood.emoji
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "moon-mood-label",
				children: customMood.label
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "moon-add-symbol",
				children: "+"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "moon-mood-label",
				children: "Add mood"
			})] })
		})]
	}), customOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "\n            fixed inset-0 z-[100]\n            flex items-center justify-center\n            bg-black/30\n            p-4\n            backdrop-blur-sm\n          ",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) setCustomOpen(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "custom-mood-title",
			className: "\n              moon-custom-dialog\n              w-full max-w-sm\n              rounded-3xl\n              p-6\n            ",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "custom-mood-title",
					className: "\n                moon-dialog-title\n                font-display\n                text-2xl\n                font-semibold\n              ",
					children: "Add your mood"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "moon-dialog-subtitle mt-1 text-sm",
					children: "Give this feeling a name of your own."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "\n                moon-dialog-label\n                mt-5 block\n                text-xs\n                font-semibold\n                uppercase\n                tracking-caps\n              ",
					htmlFor: "custom-mood-name",
					children: "Mood name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "custom-mood-name",
					value: customLabel,
					onChange: (event) => setCustomLabel(event.target.value),
					onKeyDown: (event) => {
						if (event.key === "Enter") saveCustomMood();
					},
					maxLength: 24,
					autoFocus: true,
					placeholder: "e.g. Grateful",
					className: "\n                moon-custom-input\n                mt-2\n                w-full\n                rounded-xl\n                px-3 py-2.5\n                outline-none\n              "
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "\n                moon-dialog-label\n                mt-4 block\n                text-xs\n                font-semibold\n                uppercase\n                tracking-caps\n              ",
					htmlFor: "custom-mood-emoji",
					children: "Emoji"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "custom-mood-emoji",
					value: customEmoji,
					onChange: (event) => setCustomEmoji(event.target.value),
					maxLength: 4,
					className: "\n                moon-custom-input\n                mt-2\n                w-20\n                rounded-xl\n                px-3 py-2.5\n                text-center\n                text-xl\n                outline-none\n              "
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCustomOpen(false),
						className: "\n                  moon-dialog-cancel\n                  rounded-xl\n                  px-4 py-2.5\n                  text-sm\n                  font-medium\n                ",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: saveCustomMood,
						disabled: !customLabel.trim(),
						className: "\n                  moon-dialog-save\n                  rounded-xl\n                  px-4 py-2.5\n                  text-sm\n                  font-semibold\n                ",
						children: "Add mood"
					})]
				})
			]
		})
	})] });
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("w-full min-h-44 resize-y rounded-xl bg-bg-deep/60 px-4 py-3.5 font-display text-lg leading-relaxed text-fg placeholder:text-subtle/80", "shadow-paper transition-[box-shadow] duration-150 ease-out", "hover:shadow-paper-hover", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface", className),
		...props
	});
}
function TodayEditor({ date, entry, ready, onMood, onCustomMood, onNote, onClear, onToday }) {
	const [note, setNote] = (0, import_react.useState)(entry?.note ?? "");
	const [kept, setKept] = (0, import_react.useState)(false);
	const today = dayIsToday(date);
	(0, import_react.useEffect)(() => {
		setNote(entry?.note ?? "");
	}, [date, entry?.note]);
	(0, import_react.useEffect)(() => {
		if (!entry?.mood) return;
		if (note === (entry.note ?? "")) return;
		const timer = window.setTimeout(() => {
			onNote(note);
			setKept(true);
		}, 400);
		return () => window.clearTimeout(timer);
	}, [
		note,
		entry?.mood,
		entry?.note,
		onNote
	]);
	(0, import_react.useEffect)(() => {
		if (!kept) return;
		const timer = window.setTimeout(() => setKept(false), 1400);
		return () => window.clearTimeout(timer);
	}, [kept]);
	const words = wordCount(note);
	const prompt = promptFor(date);
	const customMood = entry?.mood === "custom" ? entry.customMood : void 0;
	const moodLabel = entry?.mood === "custom" && customMood ? customMood.label : entry?.mood ? MOOD_BY_ID[entry.mood].label : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "paper-card flex h-full flex-col p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "moon-editor-label text-xs font-semibold uppercase tracking-caps",
						children: today ? "Today" : "Looking back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "\n              moon-editor-day\n              font-display\n              text-3xl\n              font-semibold\n              tracking-tight\n              sm:text-4xl\n            ",
						children: format(date, "EEEE")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "moon-editor-date mt-1",
						children: format(date, "MMMM d, yyyy")
					})
				] }), !today && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: onToday,
					children: "Back to today"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "\n          moon-daily-prompt\n          mb-5\n          max-w-md\n          font-display\n          text-xl\n          font-semibold\n          leading-snug\n        ",
				children: prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "moon-editor-label text-xs font-semibold uppercase tracking-caps",
					children: "How it felt"
				}), moodLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "moon-selected-mood",
					children: moodLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoodPicker, {
				value: entry?.mood,
				customMood,
				disabled: !ready,
				onChange: (mood) => {
					onMood(mood, note);
					setKept(true);
				},
				onCustomMood: (mood) => {
					onCustomMood(mood, note);
					setKept(true);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "\n          moon-editor-label\n          mt-6 mb-2\n          text-xs\n          font-semibold\n          uppercase\n          tracking-caps\n        ",
				htmlFor: "lumen-note",
				children: "A few lines"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "lumen-note",
				value: note,
				maxLength: 2e3,
				placeholder: entry?.mood ? "Keep going. The page is already listening." : "Pick a mood, then write whatever stays.",
				onChange: (event) => setNote(event.target.value),
				disabled: !ready,
				className: "moon-note-input"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n          mt-3\n          flex min-h-9\n          items-center\n          justify-between\n          gap-3\n          text-sm\n        ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "moon-word-count tabular-nums",
					children: [
						words,
						" ",
						words === 1 ? "word" : "words"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("moon-kept text-xs tracking-wide transition-opacity duration-150", kept ? "opacity-100" : "opacity-0"),
						children: "Kept"
					}), entry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "\n                moon-clear-button\n                text-xs\n                tracking-wide\n                underline-offset-4\n                hover:underline\n              ",
						onClick: () => {
							setNote("");
							onClear();
						},
						children: "Clear day"
					})]
				})]
			}),
			entry?.mood ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "moon-mood-summary mt-6 border-t pt-5 text-sm",
				children: [
					"Logged as",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "moon-summary-label",
						children: moodLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "moon-summary-hint",
						children: [
							" ",
							"—",
							" ",
							entry.mood === "custom" ? customMood?.hint : MOOD_BY_ID[entry.mood].hint
						]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "moon-mood-summary mt-6 border-t pt-5 text-sm",
				children: "Begin with a mood. One tap, a few lines, and the year starts to fill."
			})
		]
	});
}
function YearMosaic({ year, viewMonth, entries, onSelectMonth }) {
	const months = yearMonths(year);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "paper-card p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-caps text-subtle",
				children: "Year"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-5 font-display text-2xl font-medium tracking-tight text-fg",
				children: year
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4",
				children: months.map((month) => {
					const days = monthGrid(month).filter((day) => day.getMonth() === month.getMonth());
					const active = month.getMonth() === viewMonth.getMonth() && month.getFullYear() === year;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectMonth(month),
						className: cn("min-h-11 rounded-xl p-2 text-left transition-[background-color,box-shadow] duration-150 ease-out pressable", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50", active ? "bg-fg/5 ring-1 ring-fg/15" : "hover:bg-fg/4"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-xs font-medium uppercase tracking-label text-muted",
							children: format(month, "MMM")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-7 gap-px",
							children: days.map((day) => {
								const entry = entries[dateKey(day)];
								const future = isFutureDay(day);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("aspect-square rounded-xs", entry ? MOOD_SWATCH[entry.mood] : "bg-mood-empty", future && "opacity-30") }, dateKey(day));
							})
						})]
					}, format(month, "yyyy-MM"));
				})
			})
		]
	});
}
function clientStorage() {
	if (typeof window === "undefined") return {
		getItem: () => null,
		setItem: () => {},
		removeItem: () => {}
	};
	return localStorage;
}
var useJournalStore = create()(persist((set, get) => ({
	entries: {},
	hydrated: false,
	setHydrated: (hydrated) => set({ hydrated }),
	upsert: (date, patch) => {
		const prev = get().entries[date];
		set({ entries: {
			...get().entries,
			[date]: {
				mood: patch.mood,
				note: patch.note ?? prev?.note ?? "",
				customMood: patch.customMood ?? prev?.customMood
			}
		} });
	},
	updateNote: (date, note) => {
		const prev = get().entries[date];
		if (!prev) return;
		set({ entries: {
			...get().entries,
			[date]: {
				...prev,
				note
			}
		} });
	},
	clearDay: (date) => {
		const next = { ...get().entries };
		delete next[date];
		set({ entries: next });
	}
}), {
	name: "lumen-journal-v1",
	storage: createJSONStorage(clientStorage),
	partialize: (state) => ({ entries: state.entries }),
	skipHydration: true
}));
var hydrateStarted = false;
function hydrateJournalStore() {
	if (hydrateStarted) return;
	hydrateStarted = true;
	useJournalStore.persist.rehydrate();
}
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "moon-brand-mark relative size-50 shrink-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/moon.png",
			alt: "Moon",
			className: "h-full w-full object-contain",
			draggable: false
		})
	});
}
function SettingsIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.4h.84A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.68 5.2V5h2.4v.2a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.04H21v2.4h-.04A1.7 1.7 0 0 0 19.4 15Z"
		})]
	});
}
function AppearanceIcon({ mode }) {
	if (mode === "light") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			d: "M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"
		})]
	});
	if (mode === "dark") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M20 15.5A8.5 8.5 0 0 1 8.5 4a8.5 8.5 0 1 0 11.5 11.5Z"
		})
	});
	if (mode === "rain") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M7 16.5h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.2 7.2 4.5 4.5 0 0 0 7 16.5Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			d: "M8 19l-.8 2M12 18.5l-.8 2M16 19l-.8 2"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v18a9 9 0 0 0 0-18Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		})]
	});
}
function LumenApp() {
	const entries = useJournalStore((state) => state.entries);
	const hydrated = useJournalStore((state) => state.hydrated);
	const upsert = useJournalStore((state) => state.upsert);
	const updateNote = useJournalStore((state) => state.updateNote);
	const clearDay = useJournalStore((state) => state.clearDay);
	const setHydrated = useJournalStore((state) => state.setHydrated);
	const [today] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [selected, setSelected] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [viewMonth, setViewMonth] = (0, import_react.useState)(() => startOfMonth(/* @__PURE__ */ new Date()));
	const [appearance, setAppearance] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "system";
		const saved = localStorage.getItem("moon-appearance");
		if (saved === "light" || saved === "dark" || saved === "rain" || saved === "system") return saved;
		return "system";
	});
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [infoDialog, setInfoDialog] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const unsub = useJournalStore.persist.onFinishHydration(() => {
			setHydrated(true);
		});
		hydrateJournalStore();
		if (useJournalStore.persist.hasHydrated()) setHydrated(true);
		return unsub;
	}, [setHydrated]);
	(0, import_react.useEffect)(() => {
		const applyTheme = (mode) => {
			let theme;
			if (mode === "rain") theme = "rain";
			else if (mode === "dark") theme = "dark";
			else if (mode === "light") theme = "light";
			else theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			document.documentElement.setAttribute("data-theme", theme);
			document.documentElement.setAttribute("data-appearance", theme);
		};
		applyTheme(appearance);
		localStorage.setItem("moon-appearance", appearance);
		if (appearance !== "system") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			applyTheme("system");
		};
		media.addEventListener("change", handleChange);
		return () => {
			media.removeEventListener("change", handleChange);
		};
	}, [appearance]);
	const key = dateKey(selected);
	const entry = entries[key];
	const streak = currentStreak(entries, today);
	const logged = yearCount(entries, viewMonth.getFullYear());
	const weather = dominantMood(entries, viewMonth);
	const visibleEntries = hydrated ? entries : {};
	const selectDate = (0, import_react.useCallback)((date) => {
		if (isFutureDay(date, today)) return;
		setSelected(date);
		setViewMonth(startOfMonth(date));
	}, [today]);
	const goToday = (0, import_react.useCallback)(() => {
		selectDate(today);
	}, [selectDate, today]);
	const onMood = (0, import_react.useCallback)((mood, note) => {
		upsert(key, {
			mood,
			note,
			customMood: void 0
		});
	}, [key, upsert]);
	const onCustomMood = (0, import_react.useCallback)((mood, note) => {
		upsert(key, {
			mood: "custom",
			note,
			customMood: mood
		});
	}, [key, upsert]);
	const onNote = (0, import_react.useCallback)((note) => {
		updateNote(key, note);
	}, [key, updateNote]);
	const stats = (0, import_react.useMemo)(() => [
		{
			label: "Streak",
			value: streak === 0 ? "—" : `${streak}d`
		},
		{
			label: "This year",
			value: String(logged)
		},
		{
			label: "This month",
			value: weather ? MOOD_BY_ID[weather].label : "—"
		}
	], [
		logged,
		streak,
		weather
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "moon-app relative min-h-dvh pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "moon-background",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "moon-background-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "\n          relative z-10\n          mx-auto\n          flex max-w-6xl\n          flex-col gap-6\n          px-4 pb-2 pt-7\n          sm:px-6 sm:pt-10\n          lg:flex-row\n          lg:items-end\n          lg:justify-between\n        ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "moon-brand-text",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "\n                moon-title\n                font-display\n                text-4xl\n                font-bold\n                tracking-tight\n                sm:text-5xl\n              ",
									children: "Moon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "moon-subtitle mt-2 max-w-sm",
									children: "A quiet place for how the day felt."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "moon-quote max-w-sm",
									children: "Tell the moon what the day couldn't hear."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\n            absolute\n            right-4 top-7\n            sm:right-6 sm:top-10\n          ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSettingsOpen((open) => !open),
							className: "\n              moon-settings-button\n              flex size-11\n              items-center\n              justify-center\n              rounded-full\n              border\n              text-muted\n              shadow-sm\n              backdrop-blur-xl\n              transition-all\n              hover:-translate-y-0.5\n              hover:text-fg\n              hover:shadow-md\n            ",
							"aria-label": "Open settings",
							"aria-expanded": settingsOpen,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsIcon, {})
						}), settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\n                moon-settings-menu\n                absolute\n                right-0\n                z-50\n                mt-3\n                w-56\n                overflow-hidden\n                rounded-2xl\n                border\n                p-2\n                shadow-xl\n                backdrop-blur-2xl\n              ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-3 pb-2 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "moon-settings-heading",
										children: "Appearance"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "moon-settings-description",
										children: "Choose how Moon looks."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1",
									children: [
										{
											value: "light",
											label: "Light"
										},
										{
											value: "dark",
											label: "Dark"
										},
										{
											value: "rain",
											label: "Rain"
										},
										{
											value: "system",
											label: "System"
										}
									].map((option) => {
										const active = appearance === option.value;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setAppearance(option.value);
												setSettingsOpen(false);
											},
											className: `
                        moon-settings-option
                        flex w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3 py-2.5
                        text-left text-sm
                        transition
                        ${active ? "moon-settings-active" : ""}
                      `,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "\n                          flex size-7\n                          items-center\n                          justify-center\n                          rounded-lg\n                        ",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearanceIcon, { mode: option.value })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex-1",
													children: option.label
												}),
												active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "\n                            size-1.5\n                            rounded-full\n                            bg-accent\n                          ",
													"aria-hidden": "true"
												})
											]
										}, option.value);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 h-px bg-white/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setSettingsOpen(false);
										setInfoDialog("privacy");
									},
									className: "\n                  moon-settings-option\n                  flex w-full\n                  items-center\n                  gap-3\n                  rounded-xl\n                  px-3 py-2.5\n                  text-left text-sm\n                  transition\n                ",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "\n                    flex size-7\n                    items-center\n                    justify-center\n                    rounded-lg\n                    text-sm\n                  ",
										children: "🔒"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1",
										children: "Privacy Policy"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setSettingsOpen(false);
										setInfoDialog("about");
									},
									className: "\n                  moon-settings-option\n                  flex w-full\n                  items-center\n                  gap-3\n                  rounded-xl\n                  px-3 py-2.5\n                  text-left text-sm\n                  transition\n                ",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "\n                    flex size-7\n                    items-center\n                    justify-center\n                    rounded-lg\n                    text-sm\n                  ",
										children: "🌙"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1",
										children: "About Moon"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "\n            moon-stats\n            grid\n            grid-cols-3\n            gap-4\n            sm:gap-8\n          ",
						children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "moon-stat-label",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "moon-stat-value",
							children: stat.value
						})] }, stat.label))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "\n          relative z-10\n          mx-auto\n          grid max-w-6xl\n          gap-4\n          px-4 py-6\n          sm:px-6\n          lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]\n          lg:gap-5\n          lg:py-8\n        ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "moon-glass-wrapper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayEditor, {
						date: selected,
						entry,
						ready: hydrated,
						onMood,
						onCustomMood,
						onNote,
						onClear: () => clearDay(key),
						onToday: goToday
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\n            flex flex-col\n            gap-4\n            lg:gap-5\n          ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "moon-glass-wrapper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthCalendar, {
							month: viewMonth,
							selected,
							entries: visibleEntries,
							onSelect: selectDate,
							onShiftMonth: (delta) => setViewMonth((current) => shiftMonth(current, delta))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "moon-glass-wrapper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearMosaic, {
							year: viewMonth.getFullYear(),
							viewMonth,
							entries: visibleEntries,
							onSelectMonth: (month) => setViewMonth(startOfMonth(month))
						})
					})]
				})]
			}),
			infoDialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonInfoDialog, {
				type: infoDialog,
				onClose: () => setInfoDialog(null)
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LumenApp, {});
}
//#endregion
export { Home as component };
