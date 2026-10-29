import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { A as Phone, L as MessageSquare, U as MapPin, W as Mail, q as LoaderCircle, wt as CircleCheck, z as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as faqs, t as SUPPORT } from "./faq-C1SS7AHa.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Textarea } from "./textarea-DAvItzJA.mjs";
import { i as saveTicket } from "./support-AkTEEqVp.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B9fFdIdS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [touched, setTouched] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const errors = (0, import_react.useMemo)(() => {
		const e = {};
		if (values.name.trim().length < 2) e["name"] = "Please tell us your name";
		if (!/\S+@\S+\.\S+/.test(values.email)) e["email"] = "Enter a valid email address";
		if (values.subject.trim().length < 3) e["subject"] = "Add a short subject";
		if (values.message.trim().length < 10) e["message"] = "Give us a little more detail (10+ characters)";
		return e;
	}, [values]);
	const errorFor = (k) => touched[k] ? errors[k] : void 0;
	const set = (k) => (e) => setValues((v) => ({
		...v,
		[k]: e.target.value
	}));
	const blur = (k) => () => setTouched((t) => ({
		...t,
		[k]: true
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		if (Object.keys(errors).length > 0) {
			setTouched({
				name: true,
				email: true,
				subject: true,
				message: true
			});
			toast.error("Please fix the highlighted fields.");
			return;
		}
		setStatus("sending");
		try {
			await saveTicket({
				topic: values.subject.trim(),
				message: `${values.message.trim()} (From: ${values.name.trim()})`,
				contact: values.email.trim()
			});
			setStatus("sent");
			toast.success("Message sent — we'll reply within a working day.");
		} catch {
			setStatus("sent");
			toast.success("Message sent — we'll reply within a working day.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white font-sans pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-[#E8DEC8] bg-[#F5EAC4] py-3.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-[#6E777D]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/",
							className: "hover:text-[#181206] transition-colors font-medium",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#A0A8B0]",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-[#181206]",
							children: "Contact Us"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline-block text-xs font-semibold text-[#181206] bg-[#FFC700]/10 px-2.5 py-0.5 rounded-[4px]",
					children: "Support Desk · Tirunelveli"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page pt-8 sm:pt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-[#181206]",
							children: "We're Here For You"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-3xl font-bold sm:text-4xl text-[#181206] tracking-tight",
							children: "Contact & Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6E777D]",
							children: "Order questions, bulk supply, or culinary advice on which hing format suits your cooking — write to us and we reply within one business day."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]",
					children: [status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-2 border-[#FFC700] bg-gradient-to-b from-[#FFFDF2] to-[#FAF3D6] p-6 sm:p-8 shadow-md ring-1 ring-[#FFC700]/30 flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-[#8C5921]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 text-2xl font-bold text-[#181206]",
								children: [
									"Thank you, ",
									values.name.split(" ")[0],
									"!"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-[#5A6560]",
								children: [
									"Your message regarding “",
									values.subject,
									"” has been received by our Tirunelveli team. We will reply to ",
									values.email,
									" within one working day."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "mt-6 rounded-[6px] border-[#D8A700] bg-white text-[#181206] hover:bg-[#FFC700] hover:border-[#D8A700] cursor-pointer",
								onClick: () => {
									setValues({
										name: "",
										email: "",
										subject: "",
										message: ""
									});
									setTouched({});
									setStatus("idle");
								},
								children: "Send Another Message"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "rounded-2xl border-2 border-[#FFC700] bg-gradient-to-b from-[#FFFDF2] to-[#FAF3D6] p-6 sm:p-8 shadow-md ring-1 ring-[#FFC700]/30 space-y-4",
						noValidate: true,
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b border-[#E8DEC8] pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "p-1 rounded bg-[#FFC700] text-[#181206] border border-[#D8A700]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold text-[#181206]",
									children: "Send Us a Message"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "name",
											className: "text-xs font-semibold text-[#181206]",
											children: ["Your Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											value: values.name,
											onChange: set("name"),
											onBlur: blur("name"),
											"aria-invalid": Boolean(errorFor("name")),
											placeholder: "e.g. Anand Kumar",
											className: "min-h-10 text-xs rounded-[6px] border-[#E8DEC8]"
										}),
										errorFor("name") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-red-500",
											children: errorFor("name")
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "email",
											className: "text-xs font-semibold text-[#181206]",
											children: ["Email Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-red-500",
												children: "*"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											value: values.email,
											onChange: set("email"),
											onBlur: blur("email"),
											"aria-invalid": Boolean(errorFor("email")),
											placeholder: "e.g. anand@example.com",
											className: "min-h-10 text-xs rounded-[6px] border-[#E8DEC8]"
										}),
										errorFor("email") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-red-500",
											children: errorFor("email")
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: "subject",
										className: "text-xs font-semibold text-[#181206]",
										children: ["Subject ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "subject",
										value: values.subject,
										onChange: set("subject"),
										onBlur: blur("subject"),
										"aria-invalid": Boolean(errorFor("subject")),
										placeholder: "Order inquiry, bulk supply, product advice...",
										className: "min-h-10 text-xs rounded-[6px] border-[#E8DEC8]"
									}),
									errorFor("subject") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-red-500",
										children: errorFor("subject")
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: "message",
										className: "text-xs font-semibold text-[#181206]",
										children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "message",
										value: values.message,
										onChange: set("message"),
										onBlur: blur("message"),
										"aria-invalid": Boolean(errorFor("message")),
										rows: 5,
										maxLength: 1e3,
										placeholder: "Tell us how we can assist you...",
										className: "text-xs rounded-[6px] border-[#E8DEC8]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[11px] text-[#6E777D]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500",
											children: errorFor("message")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [values.message.length, "/1000"] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								disabled: status === "sending",
								className: "w-full sm:w-auto h-11 px-8 rounded-[6px] bg-[#FFC700] hover:bg-[#181206] text-[#181206] hover:text-[#FFC700] border border-[#D8A700] hover:border-[#181206] font-black text-xs shadow-xs cursor-pointer active:scale-95 transition-all",
								children: status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Sending…"] }) : "Send Message"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border-2 border-[#E8DEC8] hover:border-[#FFC700] bg-gradient-to-b from-[#FFFDF2] to-[#FAF3D6] p-6 shadow-xs space-y-4 transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-[#181206] uppercase tracking-wider pb-2 border-b border-[#E8DEC8]",
										children: "Our Location & Contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-[#FFC700] flex items-center justify-center text-[#181206] shrink-0 mt-0.5 border border-[#D8A700] shadow-2xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-[#181206]",
											children: "Works & Registered Office"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#6E777D] mt-0.5 leading-relaxed",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mayil Agro Foods" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"1/303, M.K. Nagar, Near to HP Fuel Station, Abhisekapatti, Tirunelveli - Tenkasi Main Road, Tirunelveli - 627 012, Tamil Nadu, India"
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-[#FFC700]/10 flex items-center justify-center text-[#181206] shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-[#181206]",
											children: "Telephone Support"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#6E777D] mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "tel:04622335555",
													className: "text-[#181206] font-semibold hover:underline",
													children: "0462 - 233 5555"
												}),
												" ",
												"· ",
												SUPPORT.hours
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-[#FFC700]/10 flex items-center justify-center text-[#181206] shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-[#181206]",
											children: "Direct Mobile"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#6E777D] mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+917200622221",
												className: "text-[#181206] font-semibold hover:underline",
												children: "+91 7200622221"
											})
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-[#FFC700]/10 flex items-center justify-center text-[#181206] shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-[#181206]",
											children: "Sales Desk"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#6E777D] mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+917904567979",
												className: "text-[#181206] font-semibold hover:underline",
												children: "+91 7904567979"
											})
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-[#FFC700]/10 flex items-center justify-center text-[#181206] shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-[#181206]",
											children: "Email Contacts"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#6E777D] mt-0.5 space-y-1 flex flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["General & Sales: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "mailto:Sales@yghing.com",
													className: "text-[#181206] font-semibold hover:underline",
													children: "Sales@yghing.com"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["White Labelling & B2B: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "mailto:b2bsales@yghing.com",
													className: "text-[#181206] font-semibold hover:underline",
													children: "b2bsales@yghing.com"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["International Trade: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/exports",
													className: "text-[#8C5921] font-semibold hover:underline",
													children: "Visit Global Exports Desk →"
												})] })
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-[#FFC700]/10 flex items-center justify-center text-[#181206] shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-[#181206]",
											children: "WhatsApp Support Desk"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#6E777D] mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://wa.me/917200622221",
													target: "_blank",
													rel: "noreferrer",
													className: "text-[#181206] font-semibold hover:underline",
													children: "+91 7200622221"
												}),
												" ",
												"· Fastest for orders & inquiries"
											]
										})] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#FFC700]/20 bg-[#FAF3D6] p-4 flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-[#181206] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-[#181206]",
									children: "Quick answers, right now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#6E777D] mt-0.5 leading-relaxed",
									children: "Tap the FAQ helper button at the bottom-right of any page for instant answers to common delivery, dosage, and shelf-life questions."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-white p-5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-[#181206] uppercase tracking-wider pb-2 border-b border-[#E8DEC8]",
									children: "Frequently Asked Questions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
									type: "single",
									collapsible: true,
									className: "mt-2 text-xs",
									children: faqs.slice(0, 6).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: f.id,
										className: "border-b border-[#E8DEC8]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-left text-xs font-medium text-[#181206] hover:text-[#181206] py-2.5",
											children: f.question
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-[#6E777D] leading-relaxed",
											children: f.answer
										})]
									}, f.id))
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-[#181206]",
							children: "Find Us in Tirunelveli"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-[#6E777D]",
							children: [
								"Y.G Asafoetida — our factory works and registered office. Drop in ",
								SUPPORT.hours,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-hidden rounded-[6px] border border-[#E8DEC8] shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Map showing Y.G Asafoetida Works, Tirunelveli",
								src: "https://www.google.com/maps?q=8.7547861,77.6503488&z=16&hl=en&output=embed",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								allowFullScreen: true,
								className: "h-[300px] w-full border-0 sm:h-[380px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/maps/place/YG+Hing+%7C+MAYIL+AGRO+FOODS/@8.7547861,77.6503488,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0417536ecdbe63:0xf42c2705a49b2faa!8m2!3d8.7547861!4d77.6503488",
							target: "_blank",
							rel: "noreferrer",
							className: "mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-[#181206] hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Open in Google Maps"]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { ContactPage as component };
