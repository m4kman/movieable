/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			indigo: {
				1: "#11131f",
				2: "#141726",
				3: "#182449",
				4: "#1d2e62",
				5: "#253974",
				6: "#304384",
				7: "#3a4f97",
				8: "#435db1",
				9: "#3e63dd",
				10: "#5472e4",
				11: "#9eb1ff",
				12: "#d6e1ff",
			},
			slate: {
				1: "#111113",
				2: "#18191b",
				3: "#212225",
				4: "#272a2d",
				5: "#2e3135",
				6: "#363a3f",
				7: "#43484e",
				8: "#5a6169",
				9: "#696e77",
				10: "#777b84",
				11: "#b0b4ba",
				12: "#edeef0",
			},
		},
		fontFamily: {
			geist: "Geist, sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
