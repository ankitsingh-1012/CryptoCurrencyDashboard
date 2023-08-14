/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '*',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'login-image': "url('https://images.hdqwalls.com/download/abstract-simple-colors-8k-jk-7680x4320.jpg')",
      },
      colors:{
        'bg-gelap': '#001E26',
        'bg-btn':'#FF6446',
      },
    },
  },
  plugins: [],
}
