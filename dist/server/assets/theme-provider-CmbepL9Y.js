import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/theme-provider.tsx
var ThemeContext = createContext(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = useState("dark");
	useEffect(() => {
		const initial = (typeof window !== "undefined" && localStorage.getItem("theme")) ?? "dark";
		setThemeState(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const setTheme = useCallback((t) => {
		setThemeState(t);
		document.documentElement.classList.toggle("dark", t === "dark");
		try {
			localStorage.setItem("theme", t);
		} catch {}
	}, []);
	const toggle = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: {
			theme,
			setTheme,
			toggle
		},
		children
	});
}
function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
//#endregion
export { useTheme as n, ThemeProvider as t };
