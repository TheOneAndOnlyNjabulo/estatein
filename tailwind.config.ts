import { withUt } from "uploadthing/tw";

export default withUt({
  // Your existing Tailwind config
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#703BF7",
        },
        background: {
          DEFAULT: "#141414 ",
        },
        bgsecondary: {
          DEFAULT: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
});
