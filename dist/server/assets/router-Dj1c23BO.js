import { t as ThemeProvider } from "./theme-provider-CmbepL9Y.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { z } from "zod";
//#region src/styles.css?url
var styles_default = "/assets/styles-Ko7cXJuB.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-display-xl aurora-text",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-[var(--text-secondary)]",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-full aurora-bg text-white px-5 py-2.5 text-sm font-medium",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-[var(--text-secondary)]",
					children: "Please try again."
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 rounded-full aurora-bg text-white px-5 py-2.5 text-sm font-medium",
					children: "Try again"
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Anmol — Entrepreneur & Future Software Engineer" },
			{
				name: "description",
				content: "Portfolio of Anmol — entrepreneur and future software engineer building Eshara Nepal, Smart Agro Hub, and the Emergency Vehicle Alert System."
			},
			{
				name: "author",
				content: "Anmol"
			},
			{
				property: "og:title",
				content: "Anmol — Entrepreneur & Future Software Engineer"
			},
			{
				property: "og:description",
				content: "Building impactful solutions at the intersection of technology and entrepreneurship."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0D1117"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Anmol",
				jobTitle: "Entrepreneur & Future Software Engineer",
				url: "/",
				sameAs: []
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs(ThemeProvider, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster$1, { position: "top-right" })] })
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BEVCoxEI.js");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Anmol — Entrepreneur & Future Software Engineer" }, {
		name: "description",
		content: "Portfolio of Anmol — entrepreneur and future software engineer building Eshara Nepal, Smart Agro Hub, and the Emergency Vehicle Alert System."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routes/api/contact.ts
var schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10)
});
var Route = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await request.json();
		const parsed = schema.safeParse(body);
		if (!parsed.success) return new Response(JSON.stringify({ error: "invalid" }), { status: 400 });
		console.log("[contact]", parsed.data);
		return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
	} catch {
		return new Response(JSON.stringify({ error: "bad_request" }), { status: 400 });
	}
} } } });
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	SitemapDotxmlRoute,
	ApiContactRoute: Route.update({
		id: "/api/contact",
		path: "/api/contact",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
