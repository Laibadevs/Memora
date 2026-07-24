/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Canonical palette — use these for any new classes.
                background: '#050505',
                surface: '#0E0E10',
                primary: '#8B5CF6',
                secondary: '#3B82F6',
                accent: '#A855F7',
                indigo: '#6366F1',
                white: '#F8FAFC',
                gray: '#9CA3AF',
                border: '#24242B',

                // Legacy aliases (existing components reference these) — kept in
                // sync with the palette above so nothing breaks and every class
                // resolves to the same, updated color.
                base: '#050505',
                panel: '#0E0E10',
                memora: {
                    blue: '#3B82F6',
                    purple: '#8B5CF6',
                    accent: '#A855F7',
                    white: '#F8FAFC',
                    indigo: '#6366F1',
                    gray: '#9CA3AF',
                },
            },
            fontFamily: {
                display: ['"DM Serif Display"', 'serif'],
                body: ['"Poppins"', 'sans-serif'],
                accent: ['"Cardo"', 'serif'],
            },
            backgroundImage: {
                'memora-gradient': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%)',
                'glow-radial': 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(5,5,5,0) 70%)',
            },
            boxShadow: {
                glow: '0 0 60px -10px rgba(139,92,246,0.55)',
                'glow-sm': '0 0 25px -5px rgba(59,130,246,0.45)',
            },
            borderRadius: {
                xl2: '20px',
                xl3: '24px',
            },
            keyframes: {
                floaty: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
            },
            animation: {
                floaty: 'floaty 6s ease-in-out infinite',
                pulseGlow: 'pulseGlow 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
