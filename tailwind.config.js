/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         keyframes: {
            cart_bump: {
               '0%': {
                  transform: 'scale(1)'
               },
               ' 10%': {
                  transform: 'scale(0.9)'
               },
               ' 30%': {
                  transform: 'scale(1.1)'
               },
               '50%': {
                  transform: 'scale(1.15)'
               },
               ' 100%': {
                  transform: 'scale(1)'
               }
            },
            meals_appear: {
               from: {
                  opacity: '0',
                  transform: 'translateY(3rem)'
               },
               to: {
                  opacity: ' 1',
                  transform: 'translateY(0)'
               }
            }
         },
         animation: {
            cart_bump: 'cart_bump 300ms ease-out',
            meals_appear: 'meals_appear 1s ease-out forwards'
         }
      }
   },
   plugins: []
};
