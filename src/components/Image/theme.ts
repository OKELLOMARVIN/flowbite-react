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
    base: 'h-auto max-w-full',
    borderRadius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
    fullCircle: 'rounded-full',
    imageShadow: 'shadow-xl dark:shadow-gray-800',
    retinaReady: 'rounded-lg',
    effects: {
      grayScale: 'transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0',
      blur: {
        xs: 'transition-all duration-300 rounded-lg blur-xm hover:blur-none',
        sm: 'transition-all duration-300 rounded-lg blur-sm hover:blur-none',
        lg: 'transition-all duration-300 rounded-lg blur-lg hover:blur-none',
        xl: 'transition-all duration-300 rounded-lg blur-xl hover:blur-none',
      },
    },
    alignment: {
      left: '', //because the image is on the left by default
      centre: 'mx-auto',
      right: 'ml-auto',
    },
    sizes: {
      sm: 'h-auto max-w-xs',
      md: 'h-auto max-w-md',
      lg: 'h-auto max-w-xl',
    },
  },
};
