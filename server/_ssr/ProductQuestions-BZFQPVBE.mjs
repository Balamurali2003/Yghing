import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { B as MessageCircleQuestionMark, bt as Clock3 } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as apiFetch } from "./api-client-BMctYueP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-DAvItzJA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductQuestions-BZFQPVBE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "yg-questions-v1";
var DEFAULT_SEEDS = {
	"gold-asafoetida-powder": [{
		id: "q-seed-1",
		slug: "gold-asafoetida-powder",
		question: "How should I store the asafoetida powder to preserve the aroma?",
		answer: "Keep in the airtight container provided, away from direct moisture and sunlight. Do not keep open next to other spices as its aroma is very potent.",
		askedBy: "Kavitha S.",
		answeredBy: "Y.G Quality Team",
		createdAt: Date.now() - 1728e6,
		pending: false
	}, {
		id: "q-seed-2",
		slug: "gold-asafoetida-powder",
		question: "How much powder is recommended per serving of sambar or dal?",
		answer: "A pinch (approx. 1/8 to 1/4 teaspoon) tempered in hot ghee or sesame oil is sufficient for 4-6 servings.",
		askedBy: "Ramesh P.",
		answeredBy: "Y.G Culinary Advisor",
		createdAt: Date.now() - 12096e5,
		pending: false
	}],
	"gluten-free-asafoetida-powder": [{
		id: "q-seed-3",
		slug: "gluten-free-asafoetida-powder",
		question: "Does this contain any traces of wheat or gluten-bearing starches?",
		answer: "No. Our gluten-free asafoetida is formulated using non-gluten starches and processed on dedicated, tested equipment.",
		askedBy: "Deepa N.",
		answeredBy: "Y.G Quality Assurance",
		createdAt: Date.now() - 864e6,
		pending: false
	}]
};
function readStoredQuestions() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		return JSON.parse(raw);
	} catch {
		return [];
	}
}
function writeStoredQuestions(questions) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
	} catch {}
}
function useProductQuestions(slug) {
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const fetchQuestions = (0, import_react.useCallback)(async () => {
		let serverQuestions = [];
		try {
			const res = await apiFetch(`/api/questions?slug=${encodeURIComponent(slug)}&status=published`);
			if (Array.isArray(res)) serverQuestions = res.map((q) => ({
				id: q.id,
				slug: q.slug,
				question: q.question,
				answer: q.answer || void 0,
				askedBy: q.asked_by || q.askedBy || "Customer",
				answeredBy: q.answered_by || q.answeredBy || void 0,
				createdAt: q.created_at || q.createdAt || Date.now(),
				pending: false
			}));
		} catch {}
		const stored = readStoredQuestions().filter((q) => q.slug === slug);
		const seeds = DEFAULT_SEEDS[slug] || [];
		const existingIds = /* @__PURE__ */ new Set();
		const combined = [];
		for (const q of [
			...serverQuestions,
			...stored,
			...seeds
		]) if (!existingIds.has(q.id)) {
			existingIds.add(q.id);
			combined.push(q);
		}
		setQuestions(combined);
	}, [slug]);
	(0, import_react.useEffect)(() => {
		fetchQuestions();
	}, [fetchQuestions]);
	const ask = (0, import_react.useCallback)(async (question, askedBy) => {
		let created = {
			id: `q-${Date.now()}`,
			slug,
			question: question.trim(),
			askedBy: askedBy.trim() || "Guest",
			createdAt: Date.now(),
			pending: true
		};
		try {
			const res = await apiFetch("/api/questions", {
				method: "POST",
				body: JSON.stringify({
					slug,
					question,
					askedBy
				})
			});
			if (res?.question) created = {
				id: res.question.id,
				slug,
				question: res.question.question,
				answer: res.question.answer || void 0,
				askedBy: res.question.asked_by || askedBy,
				answeredBy: res.question.answered_by || void 0,
				createdAt: res.question.created_at || Date.now(),
				pending: false
			};
		} catch (err) {
			console.error("Failed to submit question to server, saving locally:", err);
		}
		const all = readStoredQuestions();
		writeStoredQuestions([created, ...all]);
		setQuestions((prev) => [created, ...prev.filter((q) => q.id !== created.id)]);
		return created;
	}, [slug]);
	return {
		questions,
		answeredCount: questions.filter((q) => !q.pending && q.answer).length,
		ask,
		refresh: fetchQuestions
	};
}
var MAX = 240;
/** Ask-a-question block on the product page. Answers come from the Y.G team. */
function ProductQuestions({ slug }) {
	const { questions, answeredCount, ask } = useProductQuestions(slug);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const invalid = question.trim().length < 8;
	const submit = async (e) => {
		e.preventDefault();
		setTouched(true);
		if (invalid) return;
		setSending(true);
		await new Promise((r) => setTimeout(r, 500));
		ask(question, name);
		setSending(false);
		setQuestion("");
		setName("");
		setTouched(false);
		setOpen(false);
		toast.success("Question sent", { description: "We usually answer within one working day, right here on this page." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border py-10",
		"aria-labelledby": "questions",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "questions",
					className: "font-display text-2xl font-semibold",
					children: ["Questions & answers", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 align-middle text-sm font-normal text-muted-foreground",
						children: [answeredCount, " answered"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: open ? "ghost" : "outline",
					onClick: () => setOpen((o) => !o),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, {
						className: "mr-2 h-4 w-4",
						"aria-hidden": true
					}), open ? "Cancel" : "Ask a question"]
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "surface-card mt-6 space-y-4 p-5",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q-text",
								children: "Your question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "q-text",
								rows: 3,
								maxLength: MAX,
								value: question,
								onChange: (e) => setQuestion(e.target.value),
								onBlur: () => setTouched(true),
								"aria-invalid": touched && invalid,
								placeholder: "Type your question about this product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: touched && invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "Add a little more detail so we can answer properly."
								}) : "Answered publicly by our Tirunelveli team." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									question.length,
									"/",
									MAX
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "q-name",
							children: "Your name (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "q-name",
							value: name,
							autoComplete: "name",
							onChange: (e) => setName(e.target.value),
							placeholder: "Enter your name (optional)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: sending,
						children: sending ? "Sending…" : "Send question"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-border",
				children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: q.question
						}),
						q.answer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: q.answer
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
								className: "h-3.5 w-3.5",
								"aria-hidden": true
							}), " Awaiting an answer from the Y.G team"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								"Asked by ",
								q.askedBy,
								q.answeredBy ? ` · answered by ${q.answeredBy}` : ""
							]
						})
					]
				}, q.id))
			})
		]
	});
}
//#endregion
export { ProductQuestions };
