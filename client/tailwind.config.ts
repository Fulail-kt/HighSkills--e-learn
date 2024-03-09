import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        'neon-blue': '#03a9f4',
        'neon-pink': '#e91e63',
      }),
      borderColor: theme => ({
        'neon-blue': '#03a9f4',
        'neon-pink': '#e91e63',
      }),
      skew: {
        '6': '6deg',
      },
      rotate: {
        '-6': '-6deg',
      },
    },
  },
  plugins: [
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/typography'),],
}
export default config
