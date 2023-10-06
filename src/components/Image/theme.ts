import type { FlowbiteImageTheme } from './Image';

export const imageTheme: FlowbiteImageTheme = {
  figure: {
    imageCard: {
      figure: 'relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0',
      figureCaption: 'absolute px-4 text-lg text-white bottom-6',
    },
    imageCaption: {
      figure: 'max-w-lg',
      figureCaption: 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400',
    },
  },
  image: {
    // base: 'h-auto max-w-full',
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
    fullCircle: 'rounded-full w-96 h-96',
    shadow: 'shadow-xl dark:shadow-gray-800',
    retina: 'rounded-lg',
    effects: {
      gray: 'transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0',
      blur: {
        sm: 'transition-all duration-300 blur-sm hover:blur-none',
        md: 'transition-all duration-300 blur-md hover:blur-none',
        lg: 'transition-all duration-300 blur-lg hover:blur-none',
        xl: 'transition-all duration-300 blur-xl hover:blur-none',
      },
    },
    align: {
      left: '', //because the image is on the left by default
      centre: 'mx-auto',
      right: 'ml-auto',
    },
    sizes: {
      sm: 'h-auto max-w-xs',
      md: 'h-auto max-w-md',
      lg: 'h-auto max-w-xl',
      full: 'h-auto max-w-full',
    },
  },
};
