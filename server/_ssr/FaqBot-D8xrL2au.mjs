import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { A as Phone, L as MessageSquare, S as Send, W as Mail, r as X } from "../_libs/lucide-react.mjs";
import { i as quickQuestions, n as answerQuestion, t as SUPPORT } from "./faq-C1SS7AHa.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FaqBot-D8xrL2au.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INTRO = {
	id: 0,
	from: "bot",
	text: "Vanakkam! I'm the Y.G helper — a basic FAQ bot built only for quick clarity, not a real agent. Ask about products, delivery, offers, cancellations or refunds.",
	followUps: quickQuestions
};
/** Rule-based FAQ assistant. No network, no model — keyword matching only. */
function FaqBot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([INTRO]);
	const [input, setInput] = (0, import_react.useState)("");
	const listRef = (0, import_react.useRef)(null);
	const nextId = (0, import_react.useRef)(1);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		listRef.current?.scrollTo({
			top: listRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, open]);
	const ask = (text) => {
		const question = text.trim();
		if (!question) return;
		const reply = answerQuestion(question);
		setMessages((prev) => [
			...prev,
			{
				id: nextId.current++,
				from: "user",
				text: question
			},
			{
				id: nextId.current++,
				from: "bot",
				text: reply.text,
				escalate: !reply.matched,
				followUps: reply.followUps
			}
		]);
		setInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen((o) => !o),
		"aria-expanded": open,
		"aria-label": open ? "Close the FAQ helper" : "Open the FAQ helper",
		className: "floating-faq-btn fixed z-50 flex h-11 w-11 sm:h-12 sm:w-auto items-center justify-center sm:gap-2 rounded-full bg-[#FFC700] hover:bg-[#F0B800] p-0 sm:px-4 text-xs sm:text-sm font-bold text-[#181206] border border-[#D8A700] shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 text-[#181206]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: open ? "Close" : "FAQ Helper"
		})]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-label": "Y.G FAQ helper",
		style: { bottom: "calc(4.75rem + var(--fab-offset, 0px))" },
		className: "fixed inset-x-3 sm:inset-x-auto sm:right-6 sm:w-96 z-50 flex max-h-[72vh] sm:max-h-[70vh] flex-col overflow-hidden rounded-2xl sm:rounded-[8px] border-2 border-[#FFC700] sm:border-[#E8DEC8] bg-white shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "bg-[#FFC700] text-[#181206] font-black px-4 py-3 flex items-center justify-between border-b border-[#D8A700]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-sm tracking-wide",
					children: "Y.G FAQ Helper"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-[#181206]/80",
					children: "Rule-based answers for instant clarity"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "p-1 text-[#181206]/80 hover:text-[#181206] cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: listRef,
				className: "flex-1 space-y-4 overflow-y-auto px-4 py-4 bg-[#FAF3D6]",
				children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: m.from === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ml-auto w-fit max-w-[85%] rounded-[6px] bg-[#FFC700] px-3.5 py-2 text-xs text-[#181206] font-bold shadow-xs border border-[#D8A700]",
					children: m.text
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[92%] text-xs leading-relaxed text-[#181206] bg-white p-3 rounded-[6px] border border-[#E8DEC8] shadow-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text }),
						m.escalate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-[4px] border border-[#FFC700]/20 bg-[#FAF3D6] p-2.5 text-[11px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-[#181206]",
									children: "Please contact our support team:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-1.5 space-y-1 text-[#6E777D]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3 text-[#181206]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "font-medium text-[#181206] hover:underline",
													href: SUPPORT.phoneHref,
													children: SUPPORT.phone
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", SUPPORT.hours] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3 w-3 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "font-medium text-[#181206] hover:underline",
												href: SUPPORT.whatsappHref,
												target: "_blank",
												rel: "noreferrer",
												children: ["WhatsApp ", SUPPORT.whatsapp]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "font-medium text-[#181206] hover:underline",
												href: SUPPORT.emailHref,
												children: SUPPORT.email
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "mt-2.5 w-full h-8 text-[11px] rounded-[4px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black font-bold",
									onClick: () => setOpen(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Open Support Page"
									})
								})
							]
						}),
						m.followUps && m.followUps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5 flex flex-wrap gap-1.5",
							children: m.followUps.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => ask(f),
								className: "rounded-[4px] border border-[#E8DEC8] bg-[#FAF3D6] px-2 py-1 text-[10px] font-medium text-[#181206] transition-colors hover:border-[#FFC700] hover:text-[#181206] cursor-pointer",
								children: f
							}, f))
						})
					]
				}) }, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex items-center gap-2 border-t border-[#E8DEC8] p-2.5 bg-white",
				onSubmit: (e) => {
					e.preventDefault();
					ask(input);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Type your question here...",
					"aria-label": "Ask the FAQ helper a question",
					className: "min-h-9 flex-1 rounded-[6px] border border-[#E8DEC8] bg-white px-3 text-xs text-[#181206] outline-none focus-visible:border-[#FFC700]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					className: "h-9 w-9 shrink-0 rounded-[6px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black cursor-pointer",
					"aria-label": "Send",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	})] });
}
//#endregion
export { FaqBot };
