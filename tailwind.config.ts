import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
				sans: ['"Schibsted Grotesk"', '"Noto Sans TC"', ...fontFamily.sans]
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
