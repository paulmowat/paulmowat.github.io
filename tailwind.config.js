const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%'
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      // fontFamily: {
      //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        blue: colors.sky,
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'no-underline',
              '&:hover': {
                color: theme('colors.blue.400'),
                textDecoration: 'underline'
              },
              code: { color: theme('colors.blue.400') }
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100')
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
              textDecoration: 'no-underline',
              a: {
                color: theme('colors.blue.400'),
                textDecoration: 'no-underline',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            },
            h3: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
              textDecoration: 'no-underline',
              a: {
                color: theme('colors.blue.400'),
                textDecoration: 'no-underline',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
              textDecoration: 'no-underline',
              a: {
                color: theme('colors.gray.100'),
                textDecoration: 'no-underline',
                '&:hover': {
                  color: theme('colors.blue.400'),
                  textDecoration: 'underline'
                }
              }
            },
            code: {
              color: theme('colors.gray.900'),
              backgroundColor: theme('colors.gray.100')
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400')
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400')
            },
            'ul > li > *:first-child': {
              marginTop: '0.75rem'
            },
            ul: {
              '> li': {
                '&::before': { // more complex example - add before to an li element.
                  content: ''
                }
              }
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
    }
  },
  important: true,
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
