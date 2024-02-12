/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#38a169',
        background: '#f7fafc',
        text: '#333333',
        heading: '#4a90e2',
        border: '#e2e8f0',
        hover: '#6cb2eb',
        error: '#e53e3e',
        disabled: '#cbd5e0',
        accent: '#f6993f',
        inactive: '#edf2f7',
        success: '#48bb78',
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    }
  },
  plugins: [],
}

