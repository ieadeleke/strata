import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "var(--main)",
        offmain: "#FED1B0"
      },
      fontWeight: {
        600: "600"
      },
      gridTemplateColumns: {
        "1.5/2/1": "1.5fr 2fr 1fr",
        "1/1.5": "1fr 1.5fr"
      }
    },
  },
  plugins: [],
} satisfies Config;
