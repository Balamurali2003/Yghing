import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { At as Check, K as Lock, M as Pencil, Ot as ChevronLeft, U as MapPin, l as Truck, n as Zap, q as LoaderCircle, st as Gift } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as useNavigate, g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Textarea } from "./textarea-DAvItzJA.mjs";
import { t as SmartImage } from "./SmartImage-2X-zOlSj.mjs";
import { n as formatPrice } from "./products-DheZb9xp.mjs";
import { i as useLiveMetrics } from "./metrics-DiN42Nnk.mjs";
import { n as useCart } from "./cart-BXXNqqeG.mjs";
import { d as useOrders } from "./orders-DqR90r7S.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-BJ3sdkEm.mjs";
import { t as lookupPincode } from "./pincode.functions-DMq4TuqT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DUQqvh_f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var pinCache = /* @__PURE__ */ new Map();
var GIFT_FEE = 49;
var steps = [
	"Details",
	"Delivery",
	"Payment"
];
var emptyForm = {
	email: "",
	phone: "",
	firstName: "",
	lastName: "",
	line1: "",
	city: "",
	state: "",
	pin: ""
};
function CheckoutPage() {
	const cart = useCart();
	const metrics = useLiveMetrics();
	const navigate = useNavigate();
	const { profile, addresses, orders, saveAddress, placeOrder, signIn } = useOrders();
	const [step, setStep] = (0, import_react.useState)(0);
	const goToStep = (nextStep) => {
		setStep(nextStep);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [selectedAddress, setSelectedAddress] = (0, import_react.useState)("new");
	const [saveForNext, setSaveForNext] = (0, import_react.useState)(true);
	const [delivery, setDelivery] = (0, import_react.useState)("standard");
	const [gift, setGift] = (0, import_react.useState)(false);
	const [giftMessage, setGiftMessage] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [payment, setPayment] = (0, import_react.useState)("paytm");
	const [placing, setPlacing] = (0, import_react.useState)(false);
	const [promoInput, setPromoInput] = (0, import_react.useState)("");
	const [promoMsg, setPromoMsg] = (0, import_react.useState)(null);
	const [touched, setTouched] = (0, import_react.useState)({});
	const blur = (key) => () => setTouched((t) => ({
		...t,
		[key]: true
	}));
	const runLookup = lookupPincode;
	const [pinState, setPinState] = (0, import_react.useState)("idle");
	const [pinInfo, setPinInfo] = (0, import_react.useState)(null);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const fieldsRef = (0, import_react.useRef)(null);
	const lastPin = (0, import_react.useRef)("");
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		router.preloadRoute({
			to: "/order-confirmed",
			search: {
				order: void 0,
				total: void 0
			}
		});
	}, [router]);
	const [prefilled, setPrefilled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!prefilled && (profile || addresses.length)) {
			const def = addresses.find((a) => a.isDefault) ?? addresses[0];
			setForm((f) => ({
				...f,
				email: profile?.email ?? f.email,
				phone: def?.phone ?? profile?.phone ?? f.phone,
				firstName: def?.firstName ?? f.firstName,
				lastName: def?.lastName ?? f.lastName,
				line1: def?.line1 ?? f.line1,
				city: def?.city ?? f.city,
				state: def?.state ?? f.state,
				pin: def?.pin ?? f.pin
			}));
			if (def) setSelectedAddress(def.id);
			setPrefilled(true);
		}
	}, [
		profile,
		addresses,
		prefilled
	]);
	const set = (key) => (e) => setForm((f) => ({
		...f,
		[key]: e.target.value
	}));
	const pickAddress = (a) => {
		setSelectedAddress(a.id);
		setEditingId(null);
		setForm((f) => ({
			...f,
			firstName: a.firstName,
			lastName: a.lastName,
			line1: a.line1,
			city: a.city,
			state: a.state,
			pin: a.pin,
			phone: a.phone
		}));
	};
	const editAddress = (a) => {
		pickAddress(a);
		setEditingId(a.id);
		requestAnimationFrame(() => fieldsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		}));
	};
	(0, import_react.useEffect)(() => {
		const pin = form.pin.trim();
		if (!/^\d{6}$/.test(pin)) {
			setPinState("idle");
			setPinInfo(null);
			lastPin.current = "";
			return;
		}
		if (lastPin.current === pin) return;
		if (pinCache.has(pin)) {
			const cached = pinCache.get(pin);
			lastPin.current = pin;
			setPinInfo(cached);
			setPinState(cached.ok ? "ok" : "error");
			if (cached.ok) setForm((f) => f.pin === pin ? {
				...f,
				city: cached.city || f.city,
				state: cached.state || f.state
			} : f);
			return;
		}
		let cancelled = false;
		setPinState("loading");
		const t = setTimeout(() => {
			runLookup({ data: { pin } }).then((res) => {
				if (cancelled) return;
				lastPin.current = pin;
				pinCache.set(pin, res);
				setPinInfo(res);
				setPinState(res.ok ? "ok" : "error");
				if (res.ok) setForm((f) => f.pin === pin ? {
					...f,
					city: res.city || f.city,
					state: res.state || f.state
				} : f);
			}).catch(() => {
				if (!cancelled) setPinState("error");
			});
		}, 350);
		return () => {
			cancelled = true;
			clearTimeout(t);
		};
	}, [form.pin, runLookup]);
	const applyArea = (area) => {
		setForm((f) => {
			const has = f.line1.toLowerCase().includes(area.toLowerCase());
			const base = f.line1.trim().replace(/,\s*$/, "");
			return {
				...f,
				line1: has ? f.line1 : base ? `${base}, ${area}` : area
			};
		});
	};
	const expressFeeAmount = metrics.expressDeliveryFee || 120;
	const codFeeAmount = metrics.codHandlingFee || 40;
	const payments = [
		{
			id: "paytm",
			label: "Paytm",
			hint: "UPI, wallet & cards via Paytm gateway"
		},
		{
			id: "upi",
			label: "UPI",
			hint: "GPay, PhonePe, BHIM"
		},
		{
			id: "card",
			label: "Card",
			hint: "Credit or debit card"
		},
		{
			id: "netbanking",
			label: "Net banking",
			hint: "All major Indian banks"
		},
		{
			id: "cod",
			label: "Cash on delivery",
			hint: `₹${codFeeAmount} handling fee`
		}
	];
	const expressFee = delivery === "express" ? expressFeeAmount : 0;
	const giftFee = gift ? GIFT_FEE : 0;
	const codFee = payment === "cod" ? codFeeAmount : 0;
	const grandTotal = cart.total + expressFee + giftFee + codFee;
	const fieldErrors = (0, import_react.useMemo)(() => {
		const e = {};
		if (!form.email.trim()) e.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address";
		const digits = form.phone.replace(/\D/g, "");
		if (!digits) e.phone = "Phone number is required";
		else if (digits.length < 10) e.phone = "Enter a 10-digit mobile number";
		if (form.firstName.trim().length < 2) e.firstName = "Enter your first name";
		if (form.line1.trim().length < 5) e.line1 = "Add house no., street and area";
		if (!form.city.trim()) e.city = "City is required";
		if (!form.state.trim()) e.state = "State is required";
		if (!/^\d{6}$/.test(form.pin)) e.pin = "Enter a 6-digit PIN code";
		return e;
	}, [form]);
	const errorFor = (key) => touched[key] ? fieldErrors[key] : void 0;
	const detailsValid = (0, import_react.useMemo)(() => /\S+@\S+\.\S+/.test(form.email) && form.phone.replace(/\D/g, "").length >= 10 && form.firstName.trim().length > 1 && form.line1.trim().length > 4 && form.city.trim().length > 1 && form.state.trim().length > 1 && /^\d{6}$/.test(form.pin), [form]);
	const lastOrder = orders[0];
	const useLastOrderDetails = () => {
		if (!lastOrder) return;
		const a = lastOrder.address;
		setSelectedAddress(a.id);
		setEditingId(null);
		setForm({
			email: lastOrder.email,
			phone: lastOrder.phone || a.phone,
			firstName: a.firstName,
			lastName: a.lastName,
			line1: a.line1,
			city: a.city,
			state: a.state,
			pin: a.pin
		});
		setTouched({});
		toast.success("Details filled from your last order");
	};
	if (cart.resolved.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[50vh] flex-col items-center justify-center text-center py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-16 w-16 rounded-full bg-[#FAF3D6] border border-[#E8DEC8] flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-8 w-8 text-[#181206]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-2xl sm:text-3xl font-bold text-[#181206]",
				children: "Your basket is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Add some authentic compounded hing before checking out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6 bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					children: "Shop all products"
				})
			})
		]
	});
	const submit = async () => {
		if (!detailsValid) {
			toast.error("Some delivery details are missing.");
			setStep(0);
			return;
		}
		setPlacing(true);
		try {
			const address = {
				id: selectedAddress !== "new" ? selectedAddress : `addr_${Math.random().toString(36).slice(2, 9)}`,
				label: `${form.city} address`,
				firstName: form.firstName,
				lastName: form.lastName,
				line1: form.line1,
				city: form.city,
				state: form.state,
				pin: form.pin,
				phone: form.phone,
				isDefault: addresses.length === 0
			};
			if (saveForNext) saveAddress(address);
			if (!profile) signIn({
				name: `${form.firstName} ${form.lastName}`.trim(),
				email: form.email,
				phone: form.phone
			});
			const order = await placeOrder({
				email: form.email,
				phone: form.phone,
				items: cart.resolved.map((l) => ({
					slug: l.slug,
					variantId: l.variantId,
					name: l.product.name,
					variantLabel: l.variant.label,
					image: l.product.image,
					qty: l.qty,
					price: l.variant.price
				})),
				totals: {
					subtotal: cart.subtotal,
					discount: cart.discount,
					shipping: cart.shipping + expressFee,
					giftWrap: giftFee,
					codFee,
					total: grandTotal
				},
				promoCode: cart.appliedPromo?.code ?? null,
				address,
				payment,
				delivery,
				notes,
				gift,
				giftMessage
			});
			cart.clear();
			toast.success(`Order ${order.id} placed`);
			navigate({
				to: "/order-confirmed",
				search: {
					order: order.id,
					total: order.totals.total
				}
			});
		} catch (err) {
			console.error(err);
			setPlacing(false);
			toast.error("We couldn't place your order. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 sm:py-14 px-3 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Breadcrumb",
				className: "mb-6 flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-[#181206] transition-colors",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-[#181206] transition-colors",
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: "Checkout"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-[#E8DEC8] pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-[#181206] sm:text-3xl",
					children: "Secure Checkout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Complete your hing order with verified delivery and payment"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "inline-flex items-center gap-1 text-xs font-bold text-[#181206] hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					}), " Return to shop"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 flex items-center gap-2 text-sm",
				"aria-label": "Checkout progress",
				children: steps.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-1 items-center gap-2",
					"aria-current": i === step ? "step" : void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: i >= step,
							"aria-label": `Step ${i + 1} of ${steps.length}: ${label}${i < step ? " — completed, go back" : i === step ? " — current step" : ""}`,
							onClick: () => i < step && goToStep(i),
							className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors ${i < step ? "border-[#FFC700] bg-[#FFC700] text-[#181206] font-black" : i === step ? "border-[#FFC700] text-[#181206] bg-[#FFC700]/10" : "border-[#E8DEC8] text-muted-foreground bg-white"}`,
							children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-4 w-4",
								"aria-hidden": true
							}) : i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: i === step ? "font-bold text-[#181206]" : "text-muted-foreground",
							children: label
						}),
						i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px flex-1 bg-[#E2E2E2] sm:block" })
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-8",
					children: [
						step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 sm:p-8 shadow-xs animate-in fade-in-50 slide-in-from-right-3 duration-250",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold text-[#181206]",
									children: "Contact & delivery address"
								}),
								lastOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: useLastOrderDetails,
									className: "mt-4 flex w-full items-center gap-3 rounded-[6px] border border-[#FFC700]/40 bg-[#FFC700]/5 px-4 py-3 text-left transition-colors hover:bg-[#FFC700]/10 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
										className: "h-5 w-5 shrink-0 text-[#181206]",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-bold text-[#181206]",
											children: "Express fill — use my last order’s details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs text-muted-foreground",
											children: [
												lastOrder.address.firstName,
												" · ",
												lastOrder.address.city,
												" ",
												lastOrder.address.pin,
												" ·",
												" ",
												lastOrder.email
											]
										})]
									})]
								}),
								addresses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold tracking-wider text-muted-foreground uppercase",
											children: "Saved addresses"
										}),
										addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flex items-center gap-2 rounded-[6px] border px-4 py-3 text-sm transition-colors ${selectedAddress === a.id ? "border-[#FFC700] bg-[#FFC700]/5" : "border-[#E8DEC8]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => pickAddress(a),
												"aria-pressed": selectedAddress === a.id,
												"aria-label": `Deliver to ${a.firstName} ${a.lastName}, ${a.line1}, ${a.city} ${a.pin}`,
												className: "flex-1 rounded-md text-left cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-bold text-[#181206]",
													children: [
														a.firstName,
														" ",
														a.lastName,
														editingId === a.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-2 text-xs text-[#181206]",
															children: "editing"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block text-xs text-muted-foreground",
													children: [
														a.line1,
														", ",
														a.city,
														", ",
														a.state,
														" ",
														a.pin,
														" · ",
														a.phone
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												"aria-label": `Edit address of ${a.firstName}`,
												onClick: () => editAddress(a),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
													className: "h-4 w-4",
													"aria-hidden": true
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only sm:not-sr-only sm:ml-1",
													children: "Edit"
												})]
											})]
										}, a.id)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setSelectedAddress("new");
												setForm((f) => ({
													...f,
													firstName: "",
													lastName: "",
													line1: "",
													city: "",
													state: "",
													pin: ""
												}));
											},
											"aria-pressed": selectedAddress === "new",
											className: `block min-h-11 w-full rounded-[6px] border px-4 py-3 text-left text-sm font-semibold transition-colors cursor-pointer ${selectedAddress === "new" ? "border-[#FFC700] bg-[#FFC700]/5 text-[#181206]" : "border-[#E8DEC8] text-foreground"}`,
											children: "+ Use a new address"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: fieldsRef,
									className: "mt-5 grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "email",
													children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "email",
													type: "email",
													autoComplete: "email",
													value: form.email,
													onChange: set("email"),
													onBlur: blur("email"),
													"aria-invalid": Boolean(errorFor("email")),
													"aria-describedby": errorFor("email") ? "email-error" : void 0,
													className: "min-h-11",
													placeholder: "Enter your email address"
												}),
												errorFor("email") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "email-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("email")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "phone",
													children: ["Phone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "phone",
													type: "tel",
													autoComplete: "tel",
													value: form.phone,
													onChange: set("phone"),
													onBlur: blur("phone"),
													"aria-invalid": Boolean(errorFor("phone")),
													"aria-describedby": errorFor("phone") ? "phone-error" : void 0,
													className: "min-h-11",
													placeholder: "Enter your 10-digit mobile number"
												}),
												errorFor("phone") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "phone-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("phone")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "first",
													children: ["First name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "first",
													"aria-describedby": errorFor("firstName") ? "first-error" : void 0,
													autoComplete: "given-name",
													value: form.firstName,
													onChange: set("firstName"),
													onBlur: blur("firstName"),
													"aria-invalid": Boolean(errorFor("firstName")),
													className: "min-h-11",
													placeholder: "Enter your first name"
												}),
												errorFor("firstName") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "first-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("firstName")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "last",
												children: "Last name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "last",
												autoComplete: "family-name",
												value: form.lastName,
												onChange: set("lastName"),
												className: "min-h-11",
												placeholder: "Enter your last name"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "pin",
													children: ["PIN code ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															id: "pin",
															autoComplete: "postal-code",
															value: form.pin,
															onChange: (e) => setForm((f) => ({
																...f,
																pin: e.target.value.replace(/\D/g, "").slice(0, 6)
															})),
															onBlur: blur("pin"),
															"aria-invalid": Boolean(errorFor("pin")),
															inputMode: "numeric",
															maxLength: 6,
															className: "min-h-11 pr-10",
															placeholder: "Enter your 6-digit PIN code"
														}),
														pinState === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
															className: "absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground",
															"aria-hidden": true
														}),
														pinState === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
															className: "absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-primary",
															"aria-hidden": true
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "sr-only",
													role: "status",
													"aria-live": "polite",
													children: pinState === "loading" ? "Looking up your PIN code" : pinState === "ok" && pinInfo ? `PIN matched ${pinInfo.district}, ${pinInfo.state}. City and state auto-filled.` : pinState === "error" ? "We couldn't look up that PIN code." : ""
												}),
												pinState === "ok" && pinInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "flex items-center gap-1.5 text-xs text-muted-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
																className: "h-3.5 w-3.5 text-primary",
																"aria-hidden": true
															}),
															pinInfo.district,
															", ",
															pinInfo.state,
															" — auto-filled"
														]
													}), pinInfo.areas.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-2",
														role: "group",
														"aria-label": "Pick your area to fill the address",
														children: pinInfo.areas.slice(0, 8).map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => applyArea(area),
															"aria-label": `Use area ${area}`,
															className: "min-h-11 rounded-full border border-border px-3 text-xs transition-colors hover:border-primary hover:bg-primary/5",
															children: area
														}, area))
													})]
												}),
												errorFor("pin") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "pin-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("pin")
												}),
												pinState === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													role: "alert",
													className: "text-xs text-destructive",
													children: pinInfo?.message ?? "Couldn't look up that PIN — please fill city and state manually."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "address",
													children: ["Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "address",
													"aria-describedby": errorFor("line1") ? "address-error" : void 0,
													autoComplete: "address-line1",
													value: form.line1,
													onChange: set("line1"),
													onBlur: blur("line1"),
													"aria-invalid": Boolean(errorFor("line1")),
													className: "min-h-11",
													placeholder: "Enter house no., street and area"
												}),
												errorFor("line1") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "address-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("line1")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "city",
													children: ["City ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "city",
													"aria-describedby": errorFor("city") ? "city-error" : void 0,
													autoComplete: "address-level2",
													value: form.city,
													onChange: set("city"),
													onBlur: blur("city"),
													"aria-invalid": Boolean(errorFor("city")),
													className: "min-h-11",
													placeholder: "Enter your city"
												}),
												errorFor("city") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "city-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("city")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "state",
													children: ["State ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "state",
													"aria-describedby": errorFor("state") ? "state-error" : void 0,
													autoComplete: "address-level1",
													value: form.state,
													onChange: set("state"),
													onBlur: blur("state"),
													"aria-invalid": Boolean(errorFor("state")),
													className: "min-h-11",
													placeholder: "Enter your state"
												}),
												errorFor("state") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "state-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("state")
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-5 flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: saveForNext,
										onCheckedChange: (v) => setSaveForNext(Boolean(v))
									}), "Save this address for faster checkout next time"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-6 w-full sm:w-auto bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold shadow-xs",
									size: "lg",
									onClick: () => {
										if (detailsValid) {
											goToStep(1);
											return;
										}
										setTouched({
											email: true,
											phone: true,
											firstName: true,
											line1: true,
											city: true,
											state: true,
											pin: true
										});
										toast.error("Please complete the highlighted fields.");
										fieldsRef.current?.scrollIntoView({
											behavior: "smooth",
											block: "start"
										});
									},
									children: "Continue to delivery"
								}),
								!detailsValid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Fill in email, phone, name, address and a 6-digit PIN to continue."
								})
							]
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 sm:p-8 shadow-xs animate-in fade-in-50 slide-in-from-right-3 duration-250",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold text-[#181206]",
									children: "Delivery speed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									"aria-label": "Delivery speed",
									value: delivery,
									onValueChange: (v) => setDelivery(v),
									className: "mt-4 space-y-3",
									children: [{
										id: "standard",
										icon: Truck,
										label: "Standard Delivery",
										hint: "2–6 working days (Direct from Tirunelveli)",
										fee: cart.shipping
									}, {
										id: "express",
										icon: Zap,
										label: "Express Air Dispatch",
										hint: "1–2 working days (Priority couriered)",
										fee: expressFeeAmount
									}].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: opt.id,
										className: `flex min-h-16 cursor-pointer items-center gap-3 rounded-[6px] border px-4 transition-colors ${delivery === opt.id ? "border-[#FFC700] bg-[#FFC700]/5" : "border-[#E8DEC8]"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												value: opt.id,
												id: opt.id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(opt.icon, {
												className: "h-5 w-5 text-[#181206]",
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm font-bold text-[#181206]",
													children: opt.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-muted-foreground",
													children: opt.hint
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold text-[#181206]",
												children: opt.fee === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#181206]",
													children: "Free"
												}) : formatPrice(opt.fee)
											})
										]
									}, opt.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6 border-[#E8DEC8]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold text-[#181206]",
									children: "Gifting & notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-4 flex items-start gap-3 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6]/50 px-4 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: gift,
										onCheckedChange: (v) => setGift(Boolean(v)),
										className: "mt-0.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 font-bold text-[#181206]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {
												className: "h-4 w-4 text-[#181206]",
												"aria-hidden": true
											}), " Heritage gift wrap"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs text-muted-foreground",
											children: ["Khadi wrap, wax seal and a handwritten note — ", formatPrice(GIFT_FEE)]
										})]
									})]
								}),
								gift && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: giftMessage,
									onChange: (e) => setGiftMessage(e.target.value),
									maxLength: 200,
									placeholder: "Write your gift message (optional)",
									className: "mt-3 rounded-[6px] border-[#E8DEC8]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "notes",
										className: "font-bold text-[#181206]",
										children: "Delivery instructions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "notes",
										value: notes,
										onChange: (e) => setNotes(e.target.value),
										maxLength: 300,
										placeholder: "Add landmark, preferred time or gate details (optional)",
										className: "rounded-[6px] border-[#E8DEC8]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "lg",
										className: "rounded-[6px] border-[#E8DEC8]",
										onClick: () => goToStep(0),
										children: "Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										className: "flex-1 sm:flex-none bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold shadow-xs",
										onClick: () => goToStep(2),
										children: "Continue to payment"
									})]
								})
							]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 sm:p-8 shadow-xs animate-in fade-in-50 slide-in-from-right-3 duration-250",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold text-[#181206]",
									children: "Payment Method"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									"aria-label": "Payment method",
									value: payment,
									onValueChange: setPayment,
									className: "mt-4 space-y-3",
									children: payments.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: opt.id,
										className: `flex min-h-14 cursor-pointer items-center gap-3 rounded-[6px] border px-4 transition-colors ${payment === opt.id ? "border-[#FFC700] bg-[#FFC700]/5" : "border-[#E8DEC8]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
											value: opt.id,
											id: opt.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-bold text-[#181206]",
												children: opt.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-muted-foreground",
												children: opt.hint
											})]
										})]
									}, opt.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
										className: "h-3.5 w-3.5 text-[#181206]",
										"aria-hidden": true
									}), " Payments are processed securely via Paytm. 100% Encrypted & Safe."]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 sm:p-8 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold text-[#181206]",
									children: "Review Order Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 space-y-3 text-sm divide-y divide-[#E2E2E2]/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 pt-2 first:pt-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "shrink-0 text-muted-foreground",
												children: "Ship to"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "min-w-0 sm:text-right font-semibold text-[#181206]",
												children: [
													form.firstName,
													" ",
													form.lastName,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "block text-xs text-muted-foreground font-normal",
														children: [
															form.line1,
															", ",
															form.city,
															", ",
															form.state,
															" ",
															form.pin
														]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "shrink-0 text-muted-foreground",
												children: "Contact"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "min-w-0 break-words sm:text-right font-semibold text-[#181206]",
												children: [form.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-muted-foreground font-normal",
													children: form.phone
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Delivery"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-semibold text-[#181206]",
												children: delivery === "express" ? "Express Air, 1–2 days" : "Standard Ground, 2–6 days"
											})]
										}),
										gift && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Gift wrap"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-semibold text-[#181206]",
												children: "Yes (Khadi wax sealed)"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "lg",
										className: "rounded-[6px] border-[#E8DEC8]",
										onClick: () => goToStep(1),
										children: "Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										className: "flex-1 bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold shadow-md text-base",
										disabled: placing,
										onClick: submit,
										children: placing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											className: "mr-2 h-4 w-4 animate-spin",
											"aria-hidden": true
										}), " Placing order…"] }) : `Complete Order · ${formatPrice(grandTotal)}`
									})]
								})
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "min-w-0 lg:sticky lg:top-28 lg:self-start",
					"aria-labelledby": "order-summary-heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "order-summary-heading",
								className: "text-lg font-bold text-[#181206] pb-3 border-b border-[#E8DEC8]",
								children: "Order summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-4 divide-y divide-[#F0F0F0]",
								children: cart.resolved.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 pt-3 first:pt-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: line.product.image,
											alt: line.product.name,
											width: 1e3,
											height: 1e3,
											wrapperClassName: "h-16 w-16 shrink-0 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6]",
											className: "h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-bold text-[#181206] hover:text-[#181206] transition-colors",
												children: line.product.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													line.variant.label,
													" × ",
													line.qty
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-[#DC2626]",
											children: formatPrice(line.lineTotal)
										})
									]
								}, `${line.slug}-${line.variantId}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5 border-[#E8DEC8]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "promo",
										className: "text-xs font-bold text-[#181206] uppercase tracking-wider",
										children: "Promo code"
									}),
									cart.appliedPromo && !cart.promoIsAutomatic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-[6px] border border-[#FFC700]/40 bg-[#FFC700]/5 px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-[#181206]",
											children: cart.appliedPromo.code
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												cart.removePromo();
												setPromoInput("");
												setPromoMsg(null);
											},
											"aria-label": `Remove promo code ${cart.appliedPromo.code}`,
											className: "min-h-11 px-2 text-xs font-semibold text-muted-foreground underline hover:text-[#DC2626]",
											children: "Remove"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "promo",
											value: promoInput,
											maxLength: 24,
											onChange: (e) => setPromoInput(e.target.value.toUpperCase()),
											placeholder: "Enter promo code (e.g. FESTIVE10)",
											className: "min-h-11 rounded-[6px] border-[#E8DEC8]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											className: "min-h-11 rounded-[6px] border-[#FFC700] text-[#181206] hover:bg-[#FFC700] hover:text-white font-bold px-4",
											onClick: () => {
												const res = cart.applyPromo(promoInput);
												setPromoMsg(res.ok ? {
													ok: true,
													text: `${res.promo.label} applied.`
												} : {
													ok: false,
													text: res.reason
												});
											},
											children: "Apply"
										})]
									}),
									promoMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										role: "status",
										"aria-live": "polite",
										className: `text-xs font-semibold ${promoMsg.ok ? "text-[#181206]" : "text-[#DC2626]"}`,
										children: promoMsg.text
									}),
									cart.promoIsAutomatic && cart.appliedPromo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-semibold text-[#181206]",
										children: ["Auto-applied: ", cart.appliedPromo.description]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5 border-[#E8DEC8]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: formatPrice(cart.subtotal)
										})]
									}),
									cart.appliedPromo && cart.totalSavings > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 rounded-[6px] bg-[#FFC700]/5 border border-[#FFC700]/30 px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between font-bold text-xs text-[#181206]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Promo ",
												cart.appliedPromo.code,
												cart.promoIsAutomatic ? " (auto)" : ""
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(cart.totalSavings)] })]
										}), cart.discountLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(line.amount)] })]
										}, line.label))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Shipping"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: cart.shipping === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#181206]",
												children: "Free"
											}) : formatPrice(cart.shipping)
										})]
									}),
									expressFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Express delivery"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: formatPrice(expressFee)
										})]
									}),
									giftFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Gift wrap"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: formatPrice(giftFee)
										})]
									}),
									codFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "COD handling"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: formatPrice(codFee)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5 border-[#E8DEC8]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-base font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#181206]",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold text-[#DC2626]",
									children: formatPrice(grandTotal)
								})]
							})
						]
					})
				})]
			}),
			placing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/85 backdrop-blur-md animate-in fade-in duration-200 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex flex-col items-center p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center space-y-4 border border-primary/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6 text-primary absolute" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-foreground",
						children: "Securing Your Order"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
						children: "Confirming reservation and preparing your freshly compounded hing parcel from Tirunelveli..."
					})] })]
				})
			})
		]
	});
}
//#endregion
export { CheckoutPage as component };
