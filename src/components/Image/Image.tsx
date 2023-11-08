// import type {ComponentProps} from "react";
import type { ComponentProps } from 'react';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import { type DeepPartial } from '../../types';

export interface FlowbiteImageTheme {
  figure: any;
  image: any;
}

export interface ImageProps extends Omit<ComponentProps<'img'>, never> {
  ref?: string;
  cardVariant?: 'imageCard' | 'imageCaption';
  caption?: string;
  imageCard?: boolean;
  imageCaption?: boolean;
  borderRadius?: 'sm' | 'md' | 'lg'; // Only accept 'sm', 'md', or 'lg' as valid values
  fullCircle?: boolean;
  imageShadow?: boolean;
  retinaReady?: boolean;
  grayScale?: boolean;
  blurLevel?: 'sm' | 'md' | 'lg' | 'xl';
  size?: 'sm' | 'md' | 'lg' | 'full';
  alignment?: 'left' | 'centre' | 'right';
  link?: string;
  alt?: string;
  src: string;
  theme?: DeepPartial<FlowbiteImageTheme>;
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      caption,
      cardVariant = null,
      borderRadius = null,
      fullCircle = false,
      imageShadow = false,
      retinaReady = false,
      grayScale,
      blurLevel = null,
      size = 'full',
      link,
      alignment = 'left',
      src,
      alt = '',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().image, customTheme);
    // here determine which property was passed and if it needs a figure or not
    const showImageCaption = cardVariant === null ? false : true;
    const id = useId();

    console.log(caption, 'caption');

    return (
      <div ref={ref}>
        {showImageCaption ? (
          <figure className={twMerge(cardVariant !== null ? theme.figure[cardVariant]['figure'] : '')}>
            <a href={link}>
              <img
                className={twMerge(
                  theme.image.base,
                  borderRadius !== null ? theme.image.radius[borderRadius] : '',
                  fullCircle === true ? theme.image.fullCircle : '',
                  imageShadow ? theme.image.shadow : '',
                  retinaReady ? theme.image.retina : '',
                  grayScale ? theme.image.effects.gray : '',
                  blurLevel !== null ? theme.image.effects.blur[blurLevel] : '',
                  alignment !== null ? theme.image.align[alignment] : '',
                  size !== null || size !== 'undefined' ? theme.image.sizes.size : '',
                )}
                src={src}
                alt={alt}
                id={id}
                data-testid="image-1"
                {...props}
              />
            </a>
            <figcaption className={twMerge(cardVariant !== null ? theme.figure[cardVariant]['figureCaption'] : '')}>
              {caption}
            </figcaption>
          </figure>
        ) : (
          <a href={link}>
            <img
              className={twMerge(
                theme.image.base,
                borderRadius !== null ? theme.image.radius[borderRadius] : '',
                fullCircle === true ? theme.image.fullCircle : '',
                imageShadow ? theme.image.shadow : '',
                retinaReady ? theme.image.retina : '',
                grayScale ? theme.image.effects.gray : '',
                blurLevel !== null ? theme.image.effects.blur[blurLevel] : '',
                alignment !== null ? theme.image.align.alignment : '',
                size !== null || size !== 'undefined' ? theme.image.sizes.size : '',
              )}
              src={src}
              alt={alt}
              id={id}
              data-testid="image-2"
              {...props}
            />
          </a>
        )}
      </div>
    );
  },
);

Image.displayName = 'Image';
