/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Roboto', 'sans-serif'],
  			mono: ['Roboto Mono', 'monospace']
  		},
  		colors: {
  			google: {
  				blue: '#4285F4',
  				red: '#EA4335',
  				yellow: '#FBBC05',
  				green: '#34A853'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			google: {
  				blue: '#4285F4',
  				red: '#EA4335',
  				yellow: '#FBBC05',
  				green: '#34A853'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-in': {
  				'0%': { opacity: '0', transform: 'translateY(10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'slide-in': {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(0)' }
  			},
  			'slide-in-left': {
  				'0%': { opacity: '0', transform: 'translateX(-64px)' },
  				'60%': { opacity: '1', transform: 'translateX(4px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'slide-in-right': {
  				'0%': { opacity: '0', transform: 'translateX(64px)' },
  				'60%': { opacity: '1', transform: 'translateX(-4px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'draw-line': {
  				'0%': { height: '0%' },
  				'100%': { height: '100%' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-in': 'slide-in 0.3s ease-out',
  			'slide-in-left': 'slide-in-left 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
  			'slide-in-right': 'slide-in-right 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
  			'draw-line': 'draw-line 1s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};