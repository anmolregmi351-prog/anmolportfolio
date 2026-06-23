import { n as useTheme } from "./theme-provider-CmbepL9Y.js";
import * as React from "react";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { z } from "zod";
import { AnimatePresence, LayoutGroup, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUp, ArrowUpRight, Award, Briefcase, Check, Clock, Code, Copy, Download, FileText, GraduationCap, Home, Mail, MapPin, Menu, Moon, Quote, Search, Send, Star, Sun, User, X } from "lucide-react";
import { Command } from "cmdk";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//#region src/hooks/use-scroll-spy.ts
function useScrollSpy(ids, offset = 120) {
	const [active, setActive] = useState(ids[0] ?? null);
	useEffect(() => {
		function onScroll() {
			const y = window.scrollY + offset;
			let current = null;
			for (const id of ids) {
				const el = document.getElementById(id);
				if (!el) continue;
				if (el.offsetTop <= y) current = id;
			}
			setActive(current);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [ids, offset]);
	return active;
}
//#endregion
//#region src/content/nav.ts
var navSections = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "blog",
		label: "Blog"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var socials = {
	github: "https://github.com/",
	linkedin: "https://linkedin.com/",
	instagram: "https://instagram.com/",
	whatsapp: "https://wa.me/",
	email: "anmol@example.com"
};
//#endregion
//#region src/components/layout/ThemeToggle.tsx
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ jsx("button", {
		onClick: toggle,
		"aria-label": "Toggle theme",
		"data-cursor": "hover",
		className: "glass relative grid h-9 w-9 place-items-center rounded-full overflow-hidden hover:shadow-[var(--shadow-glow-purple)] transition-shadow",
		children: /* @__PURE__ */ jsx(AnimatePresence, {
			mode: "wait",
			initial: false,
			children: theme === "dark" ? /* @__PURE__ */ jsx(motion.span, {
				initial: {
					y: -20,
					opacity: 0,
					rotate: -90
				},
				animate: {
					y: 0,
					opacity: 1,
					rotate: 0
				},
				exit: {
					y: 20,
					opacity: 0,
					rotate: 90
				},
				transition: { duration: .25 },
				children: /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
			}, "moon") : /* @__PURE__ */ jsx(motion.span, {
				initial: {
					y: -20,
					opacity: 0,
					rotate: -90
				},
				animate: {
					y: 0,
					opacity: 1,
					rotate: 0
				},
				exit: {
					y: 20,
					opacity: 0,
					rotate: 90
				},
				transition: { duration: .25 },
				children: /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
			}, "sun")
		})
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/ui/command.tsx
var Command$1 = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$1.displayName = Command.displayName;
var CommandDialog = ({ children, ...props }) => {
	return /* @__PURE__ */ jsx(Dialog, {
		...props,
		children: /* @__PURE__ */ jsx(DialogContent, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ jsx(Command$1, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			})
		})
	});
};
var CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ jsx(Command.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = Command.Input.displayName;
var CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = Command.List.displayName;
var CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = Command.Empty.displayName;
var CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = Command.Group.displayName;
var CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = Command.Separator.displayName;
var CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = Command.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
//#endregion
//#region src/components/icons/Socials.tsx
var base = {
	fill: "currentColor",
	viewBox: "0 0 24 24",
	width: "1em",
	height: "1em",
	"aria-hidden": true
};
function GithubIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		...base,
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" })
	});
}
function LinkedinIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		...base,
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" })
	});
}
function InstagramIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		...base,
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.39A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.39 2.13a5.86 5.86 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.39 5.86 5.86 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.39-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" })
	});
}
function WhatsappIcon(props) {
	return /* @__PURE__ */ jsx("svg", {
		...base,
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34ZM12 .03A11.97 11.97 0 0 0 1.7 18l-1.7 6.2 6.36-1.67A11.97 11.97 0 1 0 12 .03Zm0 21.94c-1.86 0-3.69-.5-5.28-1.45l-.38-.22-3.77.99 1.01-3.67-.25-.39A9.96 9.96 0 1 1 12 21.97Z" })
	});
}
//#endregion
//#region src/components/layout/CommandPalette.tsx
function CommandPaletteTrigger() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("button", {
		onClick: () => setOpen(true),
		"aria-label": "Open command palette",
		"data-cursor": "hover",
		className: "hidden md:inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-[var(--text-secondary)] hover:shadow-[var(--shadow-glow-blue)] transition-shadow",
		children: /* @__PURE__ */ jsx("span", {
			className: "font-mono",
			children: "⌘K"
		})
	}), /* @__PURE__ */ jsx(CommandPalette, {
		open,
		setOpen
	})] });
}
function CommandPalette({ open, setOpen }) {
	const { setTheme } = useTheme();
	const navigate = (id) => {
		setOpen(false);
		setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 100);
	};
	const navIcons = {
		home: Home,
		about: User,
		skills: Star,
		projects: Code,
		experience: Briefcase,
		education: GraduationCap,
		achievements: Award,
		blog: FileText,
		contact: Mail
	};
	return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(CommandDialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search…" }), /* @__PURE__ */ jsxs(CommandList, { children: [
			/* @__PURE__ */ jsx(CommandEmpty, { children: "No results." }),
			/* @__PURE__ */ jsx(CommandGroup, {
				heading: "Navigate",
				children: navSections.map((s) => {
					return /* @__PURE__ */ jsxs(CommandItem, {
						onSelect: () => navigate(s.id),
						children: [/* @__PURE__ */ jsx(navIcons[s.id] ?? Home, { className: "mr-2 h-4 w-4" }), s.label]
					}, s.id);
				})
			}),
			/* @__PURE__ */ jsx(CommandSeparator, {}),
			/* @__PURE__ */ jsxs(CommandGroup, {
				heading: "Theme",
				children: [/* @__PURE__ */ jsxs(CommandItem, {
					onSelect: () => {
						setTheme("dark");
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx(Moon, { className: "mr-2 h-4 w-4" }), " Dark mode"]
				}), /* @__PURE__ */ jsxs(CommandItem, {
					onSelect: () => {
						setTheme("light");
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx(Sun, { className: "mr-2 h-4 w-4" }), " Light mode"]
				})]
			}),
			/* @__PURE__ */ jsx(CommandSeparator, {}),
			/* @__PURE__ */ jsxs(CommandGroup, {
				heading: "Social",
				children: [
					/* @__PURE__ */ jsxs(CommandItem, {
						onSelect: () => window.open(socials.github, "_blank"),
						children: [/* @__PURE__ */ jsx(GithubIcon, { className: "mr-2 h-4 w-4" }), " GitHub"]
					}),
					/* @__PURE__ */ jsxs(CommandItem, {
						onSelect: () => window.open(socials.linkedin, "_blank"),
						children: [/* @__PURE__ */ jsx(LinkedinIcon, { className: "mr-2 h-4 w-4" }), " LinkedIn"]
					}),
					/* @__PURE__ */ jsxs(CommandItem, {
						onSelect: () => window.open(socials.instagram, "_blank"),
						children: [/* @__PURE__ */ jsx(InstagramIcon, { className: "mr-2 h-4 w-4" }), " Instagram"]
					}),
					/* @__PURE__ */ jsxs(CommandItem, {
						onSelect: () => window.open(socials.whatsapp, "_blank"),
						children: [/* @__PURE__ */ jsx(WhatsappIcon, { className: "mr-2 h-4 w-4" }), " WhatsApp"]
					})
				]
			}),
			/* @__PURE__ */ jsx(CommandSeparator, {}),
			/* @__PURE__ */ jsxs(CommandGroup, {
				heading: "Actions",
				children: [/* @__PURE__ */ jsxs(CommandItem, {
					onSelect: () => {
						window.open("/resume.pdf", "_blank");
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }), " Download résumé"]
				}), /* @__PURE__ */ jsxs(CommandItem, {
					onSelect: () => {
						navigator.clipboard.writeText(socials.email);
						setOpen(false);
					},
					children: [/* @__PURE__ */ jsx(Copy, { className: "mr-2 h-4 w-4" }), " Copy email"]
				})]
			})
		] })]
	}) });
}
//#endregion
//#region src/components/layout/Navbar.tsx
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const active = useScrollSpy(navSections.map((s) => s.id));
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const go = (id) => {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			],
			delay: .2
		},
		className: "fixed left-1/2 top-4 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("glass rounded-full flex items-center justify-between gap-4 transition-all duration-300", scrolled ? "py-2 px-3" : "py-3 px-4"),
			children: [
				/* @__PURE__ */ jsxs("button", {
					onClick: () => go("home"),
					"data-cursor": "hover",
					className: "flex items-center gap-2 font-display font-bold text-lg",
					"aria-label": "Home",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-7 w-7 place-items-center rounded-md aurora-bg text-white text-sm",
						children: "A"
					}), /* @__PURE__ */ jsx("span", {
						className: "hidden sm:inline",
						children: "Anmol"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: /* @__PURE__ */ jsx(LayoutGroup, { children: navSections.map((s) => /* @__PURE__ */ jsxs("button", {
						onClick: () => go(s.id),
						"data-cursor": "hover",
						className: cn("relative font-mono text-xs uppercase tracking-wider px-3 py-2 rounded-full transition-colors", active === s.id ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"),
						children: [active === s.id && /* @__PURE__ */ jsx(motion.span, {
							layoutId: "navPill",
							className: "absolute inset-0 rounded-full bg-[var(--bg-tertiary)]",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 30
							}
						}), /* @__PURE__ */ jsx("span", {
							className: "relative z-10",
							children: s.label
						})]
					}, s.id)) })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(CommandPaletteTrigger, {}),
						/* @__PURE__ */ jsx(ThemeToggle, {}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen(true),
							"aria-label": "Open menu",
							"data-cursor": "hover",
							className: "lg:hidden glass grid h-9 w-9 place-items-center rounded-full",
							children: /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[70] bg-[var(--bg-primary)]/95 backdrop-blur-xl lg:hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-end p-6",
			children: /* @__PURE__ */ jsx("button", {
				onClick: () => setOpen(false),
				"aria-label": "Close menu",
				className: "glass grid h-10 w-10 place-items-center rounded-full",
				children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
			})
		}), /* @__PURE__ */ jsx("nav", {
			className: "flex flex-col items-start gap-2 px-8 pt-8",
			children: navSections.map((s, i) => /* @__PURE__ */ jsx(motion.button, {
				initial: {
					opacity: 0,
					x: -30
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					delay: .04 * i,
					duration: .4,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				onClick: () => go(s.id),
				className: "text-display-l text-left hover:aurora-text",
				children: s.label
			}, s.id))
		})]
	}) })] });
}
//#endregion
//#region src/components/layout/Footer.tsx
function Footer() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const h = () => setShow(window.scrollY > window.innerHeight);
		h();
		window.addEventListener("scroll", h, { passive: true });
		return () => window.removeEventListener("scroll", h);
	}, []);
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative z-10 border-t border-[var(--border-hairline)] py-10 px-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "text-xs font-mono text-[var(--text-secondary)]",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ANMOL — BUILT WITH PRECISION."
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-2",
				children: [
					{
						href: socials.github,
						Icon: GithubIcon,
						label: "GitHub"
					},
					{
						href: socials.linkedin,
						Icon: LinkedinIcon,
						label: "LinkedIn"
					},
					{
						href: socials.instagram,
						Icon: InstagramIcon,
						label: "Instagram"
					},
					{
						href: socials.whatsapp,
						Icon: WhatsappIcon,
						label: "WhatsApp"
					}
				].map(({ href, Icon, label }) => /* @__PURE__ */ jsx("a", {
					href,
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": label,
					"data-cursor": "hover",
					className: "glass grid h-9 w-9 place-items-center rounded-full hover:shadow-[var(--shadow-glow-blue)] transition-shadow",
					children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
				}, label))
			})]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(motion.button, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: 20
			},
			whileHover: { rotate: 360 },
			transition: { rotate: { duration: .6 } },
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			"aria-label": "Back to top",
			className: "fixed bottom-6 right-6 z-40 glass grid h-12 w-12 place-items-center rounded-full hover:shadow-[var(--shadow-glow-purple)] transition-shadow",
			children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
		}) })]
	});
}
//#endregion
//#region src/components/layout/ScrollProgress.tsx
function ScrollProgress() {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		function onScroll() {
			const h = document.documentElement;
			const total = h.scrollHeight - h.clientHeight;
			setProgress(total > 0 ? window.scrollY / total : 0);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx(motion.div, {
		className: "aurora-bg fixed left-0 top-0 z-[60] h-[2px] origin-left",
		style: {
			width: "100%",
			scaleX: progress
		}
	});
}
//#endregion
//#region src/components/layout/LoadingScreen.tsx
function LoadingScreen() {
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (sessionStorage.getItem("anmol-loaded")) {
			setVisible(false);
			return;
		}
		const t = setTimeout(() => {
			setVisible(false);
			sessionStorage.setItem("anmol-loaded", "1");
		}, 1600);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsx(motion.div, {
		initial: { clipPath: "inset(0% 0% 0% 0%)" },
		exit: { clipPath: "inset(0% 0% 100% 0%)" },
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			],
			delay: .1
		},
		className: "fixed inset-0 z-[100] grid place-items-center bg-[var(--bg-primary)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center gap-6",
			children: [
				/* @__PURE__ */ jsxs("svg", {
					viewBox: "0 0 100 100",
					className: "h-24 w-24",
					children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
						id: "lg",
						x1: "0%",
						y1: "0%",
						x2: "100%",
						y2: "100%",
						children: [
							/* @__PURE__ */ jsx("stop", {
								offset: "0%",
								stopColor: "#007ACC"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "50%",
								stopColor: "#A855F7"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "100%",
								stopColor: "#06B6D4"
							})
						]
					}) }), /* @__PURE__ */ jsx(motion.path, {
						d: "M20 85 L50 15 L80 85 M32 60 L68 60",
						fill: "none",
						stroke: "url(#lg)",
						strokeWidth: "4",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						initial: { pathLength: 0 },
						animate: { pathLength: 1 },
						transition: {
							duration: .7,
							ease: [
								.16,
								1,
								.3,
								1
							]
						}
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "h-[2px] w-40 overflow-hidden rounded-full bg-[var(--bg-tertiary)]",
					children: /* @__PURE__ */ jsx(motion.div, {
						initial: { x: "-100%" },
						animate: { x: "0%" },
						transition: {
							duration: .9,
							ease: [
								.16,
								1,
								.3,
								1
							],
							delay: .4
						},
						className: "h-full w-full aurora-bg"
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-mono-label text-[var(--text-secondary)]",
					children: "INITIALIZING…"
				})
			]
		})
	}) });
}
//#endregion
//#region src/components/layout/CustomCursor.tsx
function CustomCursor() {
	const dot = useRef(null);
	const ring = useRef(null);
	useEffect(() => {
		if (!window.matchMedia("(hover: hover)").matches) return;
		document.body.classList.add("custom-cursor-active");
		let mx = window.innerWidth / 2;
		let my = window.innerHeight / 2;
		let rx = mx;
		let ry = my;
		let raf = 0;
		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
		};
		const onOver = (e) => {
			const hover = !!e.target.closest("[data-cursor=\"hover\"], a, button, input, textarea, [role=\"button\"]");
			if (ring.current) {
				ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${hover ? 1.6 : 1})`;
				ring.current.style.borderColor = hover ? "var(--accent-2)" : "var(--text-primary)";
			}
		};
		const loop = () => {
			rx += (mx - rx) * .18;
			ry += (my - ry) * .18;
			if (ring.current) {
				const scale = ring.current.style.transform.match(/scale\(([^)]+)\)/)?.[1] ?? "1";
				ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseover", onOver);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseover", onOver);
			document.body.classList.remove("custom-cursor-active");
		};
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		ref: dot,
		className: "pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-[var(--accent-2)] mix-blend-difference hidden md:block"
	}), /* @__PURE__ */ jsx("div", {
		ref: ring,
		className: "pointer-events-none fixed left-0 top-0 z-[90] h-8 w-8 rounded-full border transition-[border-color] hidden md:block",
		style: { borderColor: "var(--text-primary)" }
	})] });
}
//#endregion
//#region src/components/shared/MagneticButton.tsx
function MagneticButton({ children, strength = .4, className, ...rest }) {
	const ref = useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 120,
		damping: 14
	});
	const sy = useSpring(y, {
		stiffness: 120,
		damping: 14
	});
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const cx = r.left + r.width / 2;
		const cy = r.top + r.height / 2;
		x.set((e.clientX - cx) * strength);
		y.set((e.clientY - cy) * strength);
	}
	function onLeave() {
		x.set(0);
		y.set(0);
	}
	return /* @__PURE__ */ jsx(motion.button, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		style: {
			x: sx,
			y: sy
		},
		"data-cursor": "hover",
		className: cn("relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-shadow", className),
		...rest,
		children
	});
}
//#endregion
//#region src/components/shared/GradientText.tsx
function GradientText({ children, className }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("aurora-text", className),
		children
	});
}
//#endregion
//#region src/hooks/use-reduced-motion.ts
function useReducedMotion() {
	const [reduced, setReduced] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const handler = (e) => setReduced(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	return reduced;
}
//#endregion
//#region src/components/sections/Hero.tsx
var ConstellationOrb = lazy(() => import("./ConstellationOrb-DRPlBj23.js").then((m) => ({ default: m.ConstellationOrb })));
var fullHeadline = "Entrepreneur | Future Software Engineer | Startup Builder";
function useTyped(text, speed = 45, enabled = true) {
	const [out, setOut] = useState(enabled ? "" : text);
	useEffect(() => {
		if (!enabled) {
			setOut(text);
			return;
		}
		let i = 0;
		const id = setInterval(() => {
			i++;
			setOut(text.slice(0, i));
			if (i >= text.length) clearInterval(id);
		}, speed);
		return () => clearInterval(id);
	}, [
		text,
		speed,
		enabled
	]);
	return out;
}
function Hero() {
	const reduced = useReducedMotion();
	const typed = useTyped(fullHeadline, 38, !reduced);
	const [mouse, setMouse] = useState({
		x: 0,
		y: 0
	});
	const [spot, setSpot] = useState({
		x: .5,
		y: .5
	});
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	function onMove(e) {
		const r = e.currentTarget.getBoundingClientRect();
		setMouse({
			x: (e.clientX - r.left) / r.width - .5,
			y: (e.clientY - r.top) / r.height - .5
		});
		setSpot({
			x: (e.clientX - r.left) / r.width,
			y: (e.clientY - r.top) / r.height
		});
	}
	const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ jsx("section", {
		id: "home",
		onMouseMove: onMove,
		className: "relative min-h-screen w-full overflow-hidden pt-32 pb-16 px-6",
		style: { background: `radial-gradient(900px circle at ${spot.x * 100}% ${spot.y * 100}%, color-mix(in oklab, var(--accent-1) 10%, transparent), transparent 60%)` },
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center min-h-[80vh]",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: "hidden",
				animate: "visible",
				variants: {
					hidden: {},
					visible: { transition: {
						staggerChildren: .12,
						delayChildren: .2
					} }
				},
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsxs(motion.p, {
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						transition: {
							duration: .8,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "text-mono-label inline-flex items-center gap-2 mb-6",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--accent-success)] animate-pulse" }), /* @__PURE__ */ jsx("span", {
							style: { color: "var(--accent-success)" },
							children: "// available for opportunities"
						})]
					}),
					/* @__PURE__ */ jsx(motion.h1, {
						variants: {
							hidden: {
								opacity: 0,
								y: 24
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						transition: {
							duration: 1,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "text-display-xl",
						children: /* @__PURE__ */ jsx(GradientText, { children: "Anmol" })
					}),
					/* @__PURE__ */ jsxs(motion.p, {
						variants: {
							hidden: {
								opacity: 0,
								y: 24
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						transition: {
							duration: 1,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "text-display-l mt-2 font-mono text-[var(--text-primary)] min-h-[3.2em] md:min-h-[1.6em]",
						children: [typed, /* @__PURE__ */ jsx("span", { className: "inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-[var(--accent-2)] animate-pulse" })]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						variants: {
							hidden: {
								opacity: 0,
								y: 24
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						transition: {
							duration: 1,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "text-body-l text-[var(--text-secondary)] mt-6 max-w-xl",
						children: "Passionate about technology, entrepreneurship, and building impactful solutions."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: 24
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						transition: {
							duration: 1,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [
							/* @__PURE__ */ jsxs(MagneticButton, {
								onClick: () => go("projects"),
								className: "aurora-bg text-white hover:shadow-[var(--shadow-glow-purple)]",
								children: ["View Projects ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })]
							}),
							/* @__PURE__ */ jsxs(MagneticButton, {
								onClick: () => window.open("/resume.pdf", "_blank"),
								className: "glass text-[var(--text-primary)] hover:shadow-[var(--shadow-glow-blue)]",
								children: [/* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }), " Download Resume"]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => go("contact"),
								"data-cursor": "hover",
								className: "font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1",
								children: ["Contact Me ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative h-[420px] sm:h-[520px] lg:h-[600px] opacity-30 lg:opacity-100",
				children: [mounted && !reduced && /* @__PURE__ */ jsx(Suspense, {
					fallback: /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-full aurora-bg opacity-10 blur-3xl" }),
					children: /* @__PURE__ */ jsx(ConstellationOrb, { mouse })
				}), (reduced || !mounted) && /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 grid place-items-center",
					children: /* @__PURE__ */ jsx("div", { className: "h-80 w-80 rounded-full aurora-bg opacity-30 blur-2xl" })
				})]
			})]
		})
	});
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			]
		}
	}
};
var staggerContainer = {
	hidden: {},
	visible: { transition: {
		staggerChildren: .08,
		delayChildren: .05
	} }
};
//#endregion
//#region src/components/shared/Reveal.tsx
function Reveal({ children, className, delay = 0, stagger = false, amount = .2 }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount
		},
		variants: stagger ? staggerContainer : fadeUp,
		transition: { delay },
		className: cn(className),
		children
	});
}
//#endregion
//#region src/components/shared/SectionHeading.tsx
function SectionHeading({ eyebrow, title, description, align = "left", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("mb-12 md:mb-16", align === "center" && "text-center mx-auto max-w-3xl", className),
		children: [
			eyebrow && /* @__PURE__ */ jsx("p", {
				className: "text-mono-label aurora-text mb-4 inline-block",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-display-l",
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: "text-body-l text-[var(--text-secondary)] mt-4 max-w-2xl",
				children: description
			})
		]
	});
}
//#endregion
//#region src/components/shared/GlassCard.tsx
function GlassCard({ children, className, glow = "none", ...rest }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("glass rounded-[var(--radius-md)] transition-all duration-300 ease-[var(--ease-standard)]", glow === "blue" ? "hover:shadow-[var(--shadow-glow-blue)]" : glow === "purple" ? "hover:shadow-[var(--shadow-glow-purple)]" : glow === "cyan" ? "hover:shadow-[var(--shadow-glow-cyan)]" : "", className),
		...rest,
		children
	});
}
//#endregion
//#region src/assets/portrait.jpg
var portrait_default = "/assets/portrait-DkC4qWRz.jpg";
//#endregion
//#region src/components/sections/About.tsx
var blocks = [
	{
		title: "Story",
		body: "I started building because I kept noticing the same gap — useful things that simply weren't being made for the people who needed them. Entrepreneurship gave me the why. Engineering is giving me the how."
	},
	{
		title: "Goals",
		body: "Near-term: go deep on software engineering — systems, distributed architecture, real product craft. Long-term: keep founding companies that turn that depth into something people actually use."
	},
	{
		title: "Startup journey",
		body: "Three projects in three different domains — civic tech, agritech, public safety. Each one taught me that the unsexy parts (trust, logistics, latency) are where products actually win or die."
	},
	{
		title: "Education",
		body: "Currently in Grade 11 with a Science focus, heading toward a Software Engineering degree. Self-directed across web development, Python, and systems fundamentals."
	}
];
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "relative py-24 md:py-32 px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "// about",
				title: "Builder, founder, engineer in progress."
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16",
				children: [/* @__PURE__ */ jsx("div", {
					className: "relative",
					children: /* @__PURE__ */ jsx("div", {
						className: "lg:sticky lg:top-32",
						children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(GlassCard, {
							className: "overflow-hidden p-0 rounded-[var(--radius-lg)]",
							children: /* @__PURE__ */ jsx("img", {
								src: portrait_default,
								alt: "Portrait of Anmol",
								width: 896,
								height: 1152,
								loading: "lazy",
								className: "w-full h-auto object-cover"
							})
						}) })
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative pl-6 lg:pl-8 border-l border-[var(--border-hairline)]",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-px aurora-bg opacity-40" }), blocks.map((b, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative mb-10",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "absolute -left-[34px] top-2 grid h-3 w-3 place-items-center",
									children: /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full aurora-bg" })
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-mono-label text-[var(--text-secondary)] mb-2",
									children: [
										"/",
										(i + 1).toString().padStart(2, "0"),
										" — ",
										b.title
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-body-l text-[var(--text-primary)]",
									children: b.body
								})
							]
						})
					}, b.title))]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/shared/TiltCard.tsx
function TiltCard({ children, className, maxTilt = 8 }) {
	const ref = useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 150,
		damping: 18
	});
	const sy = useSpring(y, {
		stiffness: 150,
		damping: 18
	});
	const rotateY = useTransform(sx, [-.5, .5], [-maxTilt, maxTilt]);
	const rotateX = useTransform(sy, [-.5, .5], [maxTilt, -maxTilt]);
	function handleMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - r.left) / r.width - .5);
		y.set((e.clientY - r.top) / r.height - .5);
	}
	function handleLeave() {
		x.set(0);
		y.set(0);
	}
	return /* @__PURE__ */ jsx(motion.div, {
		ref,
		onMouseMove: handleMove,
		onMouseLeave: handleLeave,
		style: {
			rotateX,
			rotateY,
			transformPerspective: 1e3,
			transformStyle: "preserve-3d"
		},
		className: cn("will-change-transform", className),
		children
	});
}
//#endregion
//#region src/content/skills.ts
var skills = [
	{
		name: "Python",
		category: "Programming",
		level: 85
	},
	{
		name: "JavaScript",
		category: "Programming",
		level: 90
	},
	{
		name: "TypeScript",
		category: "Programming",
		level: 82
	},
	{
		name: "Java",
		category: "Programming",
		level: 70
	},
	{
		name: "C++",
		category: "Programming",
		level: 68
	},
	{
		name: "React",
		category: "Frontend",
		level: 90
	},
	{
		name: "Next.js",
		category: "Frontend",
		level: 85
	},
	{
		name: "Tailwind CSS",
		category: "Frontend",
		level: 92
	},
	{
		name: "Node.js",
		category: "Backend",
		level: 80
	},
	{
		name: "Express",
		category: "Backend",
		level: 78
	},
	{
		name: "PostgreSQL",
		category: "Database",
		level: 75
	},
	{
		name: "MongoDB",
		category: "Database",
		level: 78
	},
	{
		name: "Git",
		category: "Tools",
		level: 88
	},
	{
		name: "Docker",
		category: "Tools",
		level: 65
	},
	{
		name: "VS Code",
		category: "Tools",
		level: 95
	},
	{
		name: "Figma",
		category: "Tools",
		level: 72
	}
];
var skillCategories = [
	"Programming",
	"Frontend",
	"Backend",
	"Database",
	"Tools"
];
//#endregion
//#region src/components/sections/Skills.tsx
function Skills() {
	const [tab, setTab] = useState("Programming");
	const visible = skills.filter((s) => s.category === tab);
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "// stack",
					title: "Tools I actually use."
				}) }),
				/* @__PURE__ */ jsx("div", {
					className: "mb-10 flex flex-wrap gap-2",
					children: skillCategories.map((c) => /* @__PURE__ */ jsxs("button", {
						"data-cursor": "hover",
						onClick: () => setTab(c),
						className: cn("relative font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[var(--border-hairline)] transition-colors", tab === c ? "text-[var(--text-primary)] bg-[var(--bg-tertiary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"),
						children: [tab === c && /* @__PURE__ */ jsx(motion.span, {
							layoutId: "skillUnderline",
							className: "absolute -bottom-px left-3 right-3 h-[2px] aurora-bg rounded-full"
						}), c]
					}, c))
				}),
				/* @__PURE__ */ jsx(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -12
						},
						transition: { duration: .3 },
						className: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
						children: visible.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * .04,
							children: /* @__PURE__ */ jsx(TiltCard, {
								maxTilt: 6,
								children: /* @__PURE__ */ jsxs("div", {
									className: "glass rounded-[var(--radius-md)] p-6 hover:shadow-[var(--shadow-glow-purple)] transition-shadow group hover:-translate-y-1 duration-300",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "font-display font-semibold text-lg",
											children: s.name
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-mono-label text-[var(--text-secondary)]",
											children: [s.level, "%"]
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "h-1.5 w-full rounded-full bg-[var(--bg-tertiary)] overflow-hidden",
										children: /* @__PURE__ */ jsx(motion.div, {
											initial: { width: 0 },
											whileInView: { width: `${s.level}%` },
											viewport: { once: true },
											transition: {
												duration: .9,
												ease: [
													.16,
													1,
													.3,
													1
												],
												delay: .1
											},
											className: "h-full aurora-bg"
										})
									})]
								})
							})
						}, s.name))
					}, tab)
				})
			]
		})
	});
}
//#endregion
//#region src/content/projects.ts
var projects = [
	{
		title: "Eshara Nepal",
		category: "Civic Tech",
		description: "A crowdfunding and volunteering platform connecting people who want to help with causes that need it — built to make giving and volunteering in Nepal faster to find and easier to trust.",
		tech: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Tailwind",
			"Stripe"
		],
		image: "/assets/project-eshara-DAaU1aT-.jpg",
		github: "#",
		demo: "#"
	},
	{
		title: "Smart Agro Hub",
		category: "Agritech",
		description: "Cuts out the middle layer between farmers and the people who buy from them, so farmers see fairer prices and buyers see fresher, more transparent sourcing.",
		tech: [
			"React",
			"Node.js",
			"MongoDB",
			"Express",
			"Tailwind"
		],
		image: "/assets/project-agro-DDY59gjq.jpg",
		github: "#",
		demo: "#"
	},
	{
		title: "Emergency Vehicle Alert System",
		category: "Public Safety",
		description: "Detects accidents and automatically notifies emergency responders — built to shrink the minutes between an accident happening and help arriving.",
		tech: [
			"Python",
			"IoT",
			"Firebase",
			"Twilio",
			"Mapbox"
		],
		image: "/assets/project-emergency-VOSLITJ4.jpg",
		github: "#",
		demo: "#"
	}
];
//#endregion
//#region src/components/sections/Projects.tsx
function Projects() {
	return /* @__PURE__ */ jsx("section", {
		id: "projects",
		className: "relative py-24 md:py-32 px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "// projects",
				title: "What I've built so far.",
				description: "Three projects in three different domains — all of them about connecting two sides that weren't talking to each other."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-10 md:gap-16",
				children: projects.map((p, i) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(TiltCard, {
					maxTilt: 4,
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("glass rounded-[var(--radius-lg)] overflow-hidden grid md:grid-cols-2 gap-0 group", i % 2 === 1 && "md:[&>*:first-child]:order-2"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative overflow-hidden",
							children: [/* @__PURE__ */ jsx("img", {
								src: p.image,
								alt: `${p.title} cover`,
								width: 1280,
								height: 720,
								loading: "lazy",
								className: "h-full w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 aurora-bg mix-blend-overlay" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-8 md:p-10 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-mono-label aurora-text mb-3",
									children: p.category
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display font-semibold text-2xl md:text-3xl mb-4",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[var(--text-secondary)] text-body-l mb-6",
									children: p.description
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2 mb-6",
									children: p.tech.map((t) => /* @__PURE__ */ jsx("span", {
										className: "text-mono-label px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)]",
										children: t
									}, t))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ jsxs("a", {
										href: p.github,
										target: "_blank",
										rel: "noreferrer",
										"data-cursor": "hover",
										className: "inline-flex items-center gap-2 text-sm font-medium hover:aurora-text transition-colors",
										children: [/* @__PURE__ */ jsx(GithubIcon, { className: "h-4 w-4" }), " GitHub"]
									}), /* @__PURE__ */ jsxs("a", {
										href: p.demo,
										target: "_blank",
										rel: "noreferrer",
										"data-cursor": "hover",
										className: "inline-flex items-center gap-2 text-sm font-medium hover:aurora-text transition-colors",
										children: ["Live Demo ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
									})]
								})
							]
						})]
					})
				}) }, p.title))
			})]
		})
	});
}
//#endregion
//#region src/content/experience.ts
var experience = [
	{
		position: "Founder",
		org: "Eshara Nepal",
		duration: "2024 — Present",
		responsibilities: ["Designed product strategy and feature roadmap for a national crowdfunding platform.", "Led a small engineering and design team across frontend, backend and brand."],
		achievements: ["Onboarded first volunteer cohort", "Validated MVP with active campaigns"]
	},
	{
		position: "Co-Founder & Builder",
		org: "Smart Agro Hub",
		duration: "2023 — Present",
		responsibilities: ["Built marketplace pricing logic and buyer ↔ farmer matching flow.", "Conducted field interviews with local farmers to ground product decisions."],
		achievements: ["Featured in school innovation showcase"]
	},
	{
		position: "Project Lead",
		org: "Emergency Vehicle Alert System",
		duration: "2023",
		responsibilities: ["Engineered IoT prototype for crash detection paired with SMS/voice dispatch.", "Coordinated hardware sourcing, embedded firmware and cloud function design."],
		achievements: ["Demoed working prototype at regional STEM event"]
	}
];
//#endregion
//#region src/components/sections/Experience.tsx
function Experience() {
	return /* @__PURE__ */ jsx("section", {
		id: "experience",
		className: "relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "// experience",
				title: "Where I've been building."
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", {
					className: "hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border-hairline)]",
					children: /* @__PURE__ */ jsx(motion.div, {
						initial: { scaleY: 0 },
						whileInView: { scaleY: 1 },
						viewport: {
							once: true,
							amount: .1
						},
						transition: {
							duration: 1.4,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						style: { originY: 0 },
						className: "absolute inset-0 aurora-bg opacity-60"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-12",
					children: experience.map((e, i) => {
						const left = i % 2 === 0;
						return /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
							className: cn("relative grid md:grid-cols-2 gap-6", "md:items-start"),
							children: [/* @__PURE__ */ jsx(motion.span, {
								initial: { scale: 0 },
								whileInView: { scale: [
									0,
									1.3,
									1
								] },
								viewport: { once: true },
								transition: {
									duration: .6,
									delay: .2
								},
								className: "hidden md:block absolute left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full aurora-bg ring-4 ring-[var(--bg-secondary)] z-10"
							}), /* @__PURE__ */ jsx("div", {
								className: cn(left ? "md:pr-12" : "md:col-start-2 md:pl-12"),
								children: /* @__PURE__ */ jsxs(GlassCard, {
									className: "p-6 md:p-8",
									glow: left ? "blue" : "purple",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start justify-between gap-4 mb-2",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
												className: "font-display font-semibold text-xl",
												children: e.position
											}), /* @__PURE__ */ jsx("p", {
												className: "font-mono text-sm text-[var(--text-secondary)]",
												children: e.org
											})] }), /* @__PURE__ */ jsx("span", {
												className: "text-mono-label glass rounded-full px-2.5 py-1 whitespace-nowrap",
												children: e.duration
											})]
										}),
										/* @__PURE__ */ jsx("ul", {
											className: "mt-4 space-y-2 text-[var(--text-secondary)] text-sm",
											children: e.responsibilities.map((r) => /* @__PURE__ */ jsxs("li", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-[var(--accent-2)] mt-1",
													children: "›"
												}), /* @__PURE__ */ jsx("span", { children: r })]
											}, r))
										}),
										e.achievements && /* @__PURE__ */ jsx("div", {
											className: "mt-4 border-l-2 pl-3 py-1 border-[var(--accent-success)] bg-[var(--accent-success)]/5 rounded-r-md",
											children: e.achievements.map((a) => /* @__PURE__ */ jsxs("p", {
												className: "text-xs font-mono text-[var(--text-primary)]",
												children: ["★ ", a]
											}, a))
										})
									]
								})
							})]
						}) }, e.org);
					})
				})]
			})]
		})
	});
}
//#endregion
//#region src/content/education.ts
var education = [
	{
		title: "Grade 11 — Science",
		org: "High School",
		duration: "2024 — 2025",
		description: "Focus on Mathematics, Physics and Computer Science.",
		status: "current"
	},
	{
		title: "Software Engineering (B.E. / B.Sc.)",
		org: "Target — Undergraduate Programme",
		duration: "2026 — 2030",
		description: "Planned degree path with emphasis on systems, distributed software and entrepreneurship.",
		status: "upcoming"
	},
	{
		title: "Web Development Certification",
		org: "Self-directed + Online Platforms",
		duration: "2023",
		description: "Full-stack JavaScript fundamentals, React and Node.js.",
		status: "completed"
	},
	{
		title: "Python for Everybody",
		org: "Online Specialization",
		duration: "2022",
		description: "Programming fundamentals, data structures and basic data analysis.",
		status: "completed"
	}
];
//#endregion
//#region src/components/sections/Education.tsx
function Education() {
	return /* @__PURE__ */ jsx("section", {
		id: "education",
		className: "relative py-24 md:py-32 px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "// education",
				title: "The path so far — and ahead."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: education.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ jsx(TiltCard, {
						maxTilt: 6,
						children: /* @__PURE__ */ jsxs("div", {
							className: cn("glass rounded-[var(--radius-md)] p-6 h-full flex flex-col gap-3 transition-all hover:-translate-y-1", e.status === "upcoming" && "border-dashed"),
							style: e.status === "upcoming" ? {
								borderStyle: "dashed",
								borderColor: "var(--accent-2)"
							} : void 0,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-mono-label aurora-text",
										children: e.duration
									}), /* @__PURE__ */ jsx("span", {
										className: cn("text-mono-label px-2 py-0.5 rounded-full", e.status === "current" && "bg-[var(--accent-success)]/15 text-[var(--accent-success)]", e.status === "completed" && "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]", e.status === "upcoming" && "bg-[var(--accent-2)]/15 text-[var(--accent-2)]"),
										children: e.status
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display font-semibold text-lg leading-tight",
									children: e.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-mono-label text-[var(--text-secondary)]",
									children: e.org
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-[var(--text-secondary)] mt-auto",
									children: e.description
								})
							]
						})
					})
				}, e.title))
			})]
		})
	});
}
//#endregion
//#region src/content/achievements.ts
var stats = [
	{
		label: "Startups Built",
		value: 3
	},
	{
		label: "Competitions Entered",
		value: 6
	},
	{
		label: "Leadership Roles",
		value: 4
	},
	{
		label: "Communities Served",
		value: 12,
		suffix: "+"
	}
];
var badges = [
	{
		title: "Young Innovator Award",
		org: "Regional STEM Fair",
		year: "2024"
	},
	{
		title: "Top 10 Startup Pitch",
		org: "School Entrepreneurship Cup",
		year: "2024"
	},
	{
		title: "Hackathon Finalist",
		org: "National Code Sprint",
		year: "2023"
	},
	{
		title: "Community Impact Recognition",
		org: "Local Government",
		year: "2023"
	}
];
//#endregion
//#region src/components/shared/AnimatedCounter.tsx
function AnimatedCounter({ to, duration = 1.4, suffix = "" }) {
	const [value, setValue] = useState(0);
	const ref = useRef(null);
	const started = useRef(false);
	useEffect(() => {
		if (!ref.current) return;
		const el = ref.current;
		const obs = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const step = (now) => {
					const t = Math.min((now - start) / (duration * 1e3), 1);
					const eased = 1 - Math.pow(1 - t, 3);
					setValue(Math.round(eased * to));
					if (t < 1) requestAnimationFrame(step);
				};
				requestAnimationFrame(step);
			}
		}, { threshold: .4 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [value, suffix]
	});
}
//#endregion
//#region src/components/sections/Achievements.tsx
function Achievements() {
	return /* @__PURE__ */ jsx("section", {
		id: "achievements",
		className: "relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "// achievements",
					title: "Numbers and named recognition."
				}) }),
				/* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
					children: stats.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ jsxs(GlassCard, {
							className: "p-8 text-center",
							glow: "cyan",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-display-l aurora-text font-bold",
								children: /* @__PURE__ */ jsx(AnimatedCounter, {
									to: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ jsx("p", {
								className: "text-mono-label text-[var(--text-secondary)] mt-2",
								children: s.label
							})]
						})
					}, s.label))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: badges.map((b, i) => /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							scale: .85
						},
						whileInView: {
							opacity: 1,
							scale: [
								.85,
								1.05,
								1
							]
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: i * .05
						},
						children: /* @__PURE__ */ jsxs(GlassCard, {
							className: "p-5 flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-10 w-10 place-items-center rounded-md aurora-bg text-white shrink-0",
								children: /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "font-display font-semibold text-sm",
								children: b.title
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-mono-label text-[var(--text-secondary)] mt-1",
								children: [
									b.org,
									" · ",
									b.year
								]
							})] })]
						})
					}, b.title))
				})
			]
		})
	});
}
//#endregion
//#region src/content/testimonials.ts
var testimonials = [
	{
		name: "Sarah Thapa",
		role: "Mentor, Startup Incubator",
		initials: "ST",
		quote: "Anmol thinks like an engineer and ships like a founder. The combination is rare at any age — at his, it's unusual."
	},
	{
		name: "Rajiv K.",
		role: "Engineering Lead",
		initials: "RK",
		quote: "Pragmatic, technical, and unafraid of the boring problems that actually matter. A genuinely high-leverage builder."
	},
	{
		name: "Mira Sharma",
		role: "Community Partner, Eshara Nepal",
		initials: "MS",
		quote: "He listens before he builds. That's why the things he ships actually get used by the people they're meant for."
	}
];
//#endregion
//#region src/components/sections/Testimonials.tsx
function Testimonials() {
	const [i, setI] = useState(0);
	const [paused, setPaused] = useState(false);
	useEffect(() => {
		if (paused) return;
		const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6e3);
		return () => clearInterval(id);
	}, [paused]);
	const t = testimonials[i];
	return /* @__PURE__ */ jsx("section", {
		id: "testimonials",
		className: "relative py-24 md:py-32 px-6",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "// testimonials",
					title: "What people say.",
					align: "center"
				}) }),
				/* @__PURE__ */ jsx("div", {
					className: "relative h-[280px] md:h-[240px]",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								x: 30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: -30
							},
							transition: {
								duration: .5,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "absolute inset-0",
							children: /* @__PURE__ */ jsxs("div", {
								className: "glass rounded-[var(--radius-lg)] p-10 h-full relative overflow-hidden",
								children: [
									/* @__PURE__ */ jsx(Quote, { className: "absolute top-4 right-6 h-24 w-24 text-[var(--accent-2)] opacity-10" }),
									/* @__PURE__ */ jsxs("p", {
										className: "text-body-l italic text-[var(--text-primary)] relative",
										children: [
											"\"",
											t.quote,
											"\""
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-6 flex items-center gap-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "grid h-12 w-12 place-items-center rounded-full aurora-bg text-white font-display font-bold ring-2 ring-[var(--accent-2)]/40",
											children: t.initials
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "font-display font-semibold",
											children: t.name
										}), /* @__PURE__ */ jsx("p", {
											className: "text-mono-label text-[var(--text-secondary)]",
											children: t.role
										})] })]
									})
								]
							})
						}, i)
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 flex items-center justify-center gap-2",
					children: testimonials.map((_, idx) => /* @__PURE__ */ jsx("button", {
						"aria-label": `Show testimonial ${idx + 1}`,
						onClick: () => setI(idx),
						"data-cursor": "hover",
						className: cn("h-1.5 rounded-full transition-all", idx === i ? "w-8 aurora-bg" : "w-1.5 bg-[var(--text-secondary)]/40")
					}, idx))
				})
			]
		})
	});
}
//#endregion
//#region src/content/blog.ts
var blogPosts = [
	{
		title: "Building Eshara Nepal: Notes From The First 90 Days",
		category: "Founder Notes",
		excerpt: "What I learned shipping a crowdfunding platform in a market that doesn't have one — and the trust gap nobody warned me about.",
		readTime: "6 min read",
		date: "Jun 2026"
	},
	{
		title: "Why I'm Choosing Software Engineering As A Founder",
		category: "Career",
		excerpt: "The case for going deep on engineering even when your long-term path is entrepreneurship.",
		readTime: "4 min read",
		date: "May 2026"
	},
	{
		title: "Smart Agro Hub: Removing The Middle Layer",
		category: "Agritech",
		excerpt: "Field interviews with farmers reshaped our entire pricing model. Here's what changed and why.",
		readTime: "5 min read",
		date: "Apr 2026"
	}
];
//#endregion
//#region src/components/sections/Blog.tsx
function Blog() {
	return /* @__PURE__ */ jsx("section", {
		id: "blog",
		className: "relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "// writing",
				title: "Notes from the build.",
				description: "Working notes from shipping products and choosing a path between founding and engineering."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: blogPosts.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ jsx("a", {
						href: "#",
						"data-cursor": "hover",
						className: "group block",
						children: /* @__PURE__ */ jsxs(GlassCard, {
							className: "relative overflow-hidden h-full p-0",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-[2px] aurora-bg opacity-0 group-hover:opacity-100 transition-opacity" }),
								/* @__PURE__ */ jsx("div", {
									className: "relative aspect-video aurora-bg opacity-80",
									children: /* @__PURE__ */ jsx("span", {
										className: "absolute top-3 left-3 text-mono-label glass rounded-full px-2.5 py-1",
										children: p.category
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-display font-semibold text-lg leading-snug group-hover:aurora-text transition-colors",
											children: p.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm text-[var(--text-secondary)] mt-3",
											children: p.excerpt
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-5 flex items-center justify-between text-mono-label text-[var(--text-secondary)]",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
													" ",
													p.readTime
												]
											}), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" })]
										})
									]
								})
							]
						})
					})
				}, p.title))
			})]
		})
	});
}
//#endregion
//#region src/components/sections/Contact.tsx
var schema = z.object({
	name: z.string().min(2, "Name is too short"),
	email: z.string().email("Enter a valid email"),
	message: z.string().min(10, "Message should be a bit longer")
});
function Contact() {
	const [done, setDone] = useState(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });
	const onSubmit = async (values) => {
		try {
			await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values)
			});
		} catch {}
		setDone(true);
		toast.success("Message sent — I'll get back to you soon.");
		reset();
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "relative py-24 md:py-32 px-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "// contact",
				title: "Let's build something.",
				description: "Recruiters, collaborators, anyone with a hard problem worth solving — say hello."
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(GlassCard, {
					className: "p-8 relative overflow-hidden",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: !done ? /* @__PURE__ */ jsxs(motion.form, {
							initial: { opacity: 1 },
							exit: {
								opacity: 0,
								scale: .98
							},
							transition: { duration: .3 },
							onSubmit: handleSubmit(onSubmit),
							className: "flex flex-col gap-5",
							children: [
								/* @__PURE__ */ jsx(Field, {
									label: "Name",
									error: errors.name?.message,
									children: /* @__PURE__ */ jsx("input", {
										...register("name"),
										type: "text",
										autoComplete: "name",
										className: "input",
										placeholder: "Your name"
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Email",
									error: errors.email?.message,
									children: /* @__PURE__ */ jsx("input", {
										...register("email"),
										type: "email",
										autoComplete: "email",
										className: "input",
										placeholder: "you@example.com"
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Message",
									error: errors.message?.message,
									children: /* @__PURE__ */ jsx("textarea", {
										...register("message"),
										rows: 5,
										className: "input resize-none",
										placeholder: "Tell me what you're working on."
									})
								}),
								/* @__PURE__ */ jsx(MagneticButton, {
									type: "submit",
									disabled: isSubmitting,
									className: "aurora-bg text-white self-start hover:shadow-[var(--shadow-glow-purple)]",
									children: isSubmitting ? "Sending…" : /* @__PURE__ */ jsxs(Fragment, { children: ["Send Message ", /* @__PURE__ */ jsx(Send, { className: "ml-2 h-4 w-4" })] })
								})
							]
						}, "form") : /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								type: "spring",
								stiffness: 180,
								damping: 16
							},
							className: "grid place-items-center text-center py-12",
							children: [
								/* @__PURE__ */ jsx(motion.div, {
									initial: {
										scale: 0,
										rotate: -90
									},
									animate: {
										scale: 1,
										rotate: 0
									},
									transition: {
										type: "spring",
										stiffness: 200,
										damping: 14,
										delay: .1
									},
									className: "grid h-16 w-16 place-items-center rounded-full aurora-bg text-white mb-4",
									children: /* @__PURE__ */ jsx(Check, {
										className: "h-8 w-8",
										strokeWidth: 3
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display font-semibold text-xl",
									children: "Message sent."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[var(--text-secondary)] mt-2",
									children: "I'll get back to you soon."
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: () => setDone(false),
									"data-cursor": "hover",
									className: "mt-6 font-mono text-xs uppercase tracking-wider text-[var(--accent-2)]",
									children: "Send another →"
								})
							]
						}, "done")
					})
				}) }), /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs(GlassCard, {
					className: "p-8 h-full flex flex-col gap-6",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-mono-label text-[var(--text-secondary)]",
							children: "DIRECT"
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-3 space-y-2",
							children: [/* @__PURE__ */ jsxs("a", {
								href: `mailto:${socials.email}`,
								"data-cursor": "hover",
								className: "flex items-center gap-3 hover:aurora-text transition-colors",
								children: [
									/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
									" ",
									socials.email
								]
							}), /* @__PURE__ */ jsxs("p", {
								className: "flex items-center gap-3 text-[var(--text-secondary)]",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), " Nepal · Open to remote"]
							})]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-mono-label text-[var(--text-secondary)]",
							children: "ELSEWHERE"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-3 grid grid-cols-4 gap-2",
							children: [
								{
									Icon: GithubIcon,
									href: socials.github,
									label: "GitHub"
								},
								{
									Icon: LinkedinIcon,
									href: socials.linkedin,
									label: "LinkedIn"
								},
								{
									Icon: InstagramIcon,
									href: socials.instagram,
									label: "Instagram"
								},
								{
									Icon: WhatsappIcon,
									href: socials.whatsapp,
									label: "WhatsApp"
								}
							].map(({ Icon, href, label }) => /* @__PURE__ */ jsx("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": label,
								"data-cursor": "hover",
								className: "glass grid place-items-center h-12 rounded-[var(--radius-md)] hover:shadow-[var(--shadow-glow-blue)] transition-shadow",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
							}, label))
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-auto pt-6 border-t border-[var(--border-hairline)]",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-mono-label aurora-text",
								children: "CURRENT STATUS"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[var(--text-primary)]",
								children: "Available for engineering internships, collaborations, and founder conversations."
							})]
						})
					]
				}) })]
			})]
		}), /* @__PURE__ */ jsx("style", { children: `
        .input {
          width: 100%;
          background: var(--glass-fill);
          border: 1px solid var(--border-hairline);
          border-radius: 12px;
          padding: 12px 14px;
          color: var(--text-primary);
          font-family: var(--font-body);
          transition: border-color 200ms;
        }
        .input::placeholder { color: var(--text-secondary); opacity: 0.6; }
        .input:focus {
          outline: none;
          border-color: var(--accent-2);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent-2) 20%, transparent);
        }
      ` })]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-mono-label text-[var(--text-secondary)]",
				children: label
			}),
			children,
			error && /* @__PURE__ */ jsx("span", {
				className: "text-xs text-[var(--destructive)] font-mono",
				children: error
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(LoadingScreen, {}),
		/* @__PURE__ */ jsx(ScrollProgress, {}),
		/* @__PURE__ */ jsx(CustomCursor, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Skills, {}),
				/* @__PURE__ */ jsx(Projects, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Education, {}),
				/* @__PURE__ */ jsx(Achievements, {}),
				/* @__PURE__ */ jsx(Testimonials, {}),
				/* @__PURE__ */ jsx(Blog, {}),
				/* @__PURE__ */ jsx(Contact, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
export { HomePage as component };
