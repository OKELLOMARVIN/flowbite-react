// import type {ComponentProps} from "react";
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useTheme, type DeepPartial } from '..';

export interface FlowbiteImageTheme {
  default: string;
}

export interface ImageProps extends Omit<ComponentProps<'img'>, any> {
  variant?: string;
  theme?: DeepPartial<FlowbiteImageTheme>;
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(({ variant, theme: customTheme = {}, ...props }, ref) => {
  const theme = mergeDeep(useTheme().theme.image, customTheme);
  console.log(variant, theme);
  console.log({ ...props });

  return (
    <div ref={ref}>
      <img className="h-auto max-w-full" src="public/images/imageComponent/image.jpg" alt="Example" />
    </div>
  );
});

Image.displayName = 'Image';
