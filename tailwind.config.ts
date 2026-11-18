import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// 速查表世界：黑白兩色 token，加上只用在錯誤狀態的紅色。詳見 DESIGN.md。
const config: Config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				ink: "rgb(var(--ink) / <alpha-value>)",
				paper: "rgb(var(--paper) / <alpha-value>)",
				errata: "#c4301a"
			},
			fontFamily: {
				// Latin 用 Schibsted Grotesk，中文落到思源黑體
				sans: ['"Schibsted Grotesk"', '"Noto Sans TC"', ...fontFamily.sans]
			}
		}
	},
	// 目錄抽屜（sheet）的滑入動畫用到 animate-in / slide-in-*
	plugins: [tailwindcssAnimate]
};

export default config;
