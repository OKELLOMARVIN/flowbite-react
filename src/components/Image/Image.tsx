// import type {ComponentProps} from "react";
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useTheme, type DeepPartial } from '..';

export interface FlowbiteImageTheme {
  default: string;
}

export interface ImageProps extends Omit<ComponentProps<'img'>, any> {
  alt?: string;
  src: string;
  theme?: DeepPartial<FlowbiteImageTheme>;
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(({ src, alt, theme: customTheme = {}, ...props }, ref) => {
  const theme = mergeDeep(useTheme().theme.image, customTheme);
  console.log(theme);
  console.log({ ...props });

  return (
    <div ref={ref}>
      <figure className="max-w-lg">
        <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
        <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">Image caption</figcaption>
      </figure>
    </div>
  );
});

Image.displayName = 'Image';
