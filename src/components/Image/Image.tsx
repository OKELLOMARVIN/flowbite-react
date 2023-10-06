// import type {ComponentProps} from "react";
import type { ComponentProps } from 'react';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useTheme, type DeepPartial } from '..';

export interface FlowbiteImageTheme {
  figure: any;
  image: any;
}

export interface ImageProps extends Omit<ComponentProps<'img'>, any> {
  ref?: string;
  caption?: string;
  imageCard?: boolean;
  imageCaption?: boolean;
  borderRadius?: 'sm' | 'md' | 'lg'; // Only accept 'sm', 'md', or 'lg' as valid values
  fullCircle?: boolean;
  imageShadow?: boolean;
  retinaReady?: boolean;
  grayScale?: boolean;
  blurLevel?: 'xs' | 'sm' | 'lg' | 'xl';
  size?: 'sm' | 'md' | 'lg';
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
      imageCard,
      imageCaption,
      borderRadius = null,
      fullCircle,
      imageShadow = false,
      retinaReady = false,
      grayScale,
      blurLevel = null,
      size,
      link,
      alignment = 'left',
      src,
      alt,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(useTheme().theme.image, customTheme);
    console.log({ ...props });
    // here determine which property was passed and if it needs a figure or not
    const showImageCaption = imageCard === null || imageCaption ? false : true;
    const id = useId();

    return (
      <div ref={ref}>
        {showImageCaption ? (
          <figure
            className={twMerge(
              imageCard ? theme.figure.cardImage.figure : '',
              imageCaption ? theme.figure.captionImage.figure : '',
            )}
          >
            <a href={link}>
              <img
                className={twMerge(
                  theme.image.base,
                  borderRadius !== null ? theme.image.radius.borderRadius : '',
                  fullCircle !== null ? theme.image.fullCircle : '',
                  imageShadow ? theme.image.shadow : '',
                  retinaReady ? theme.image.retina : '',
                  grayScale ? theme.image.effects.gray : '',
                  blurLevel !== null ? theme.image.effects.blur.blurLevel : '',
                  alignment !== null ? theme.image.align.alignment : '',
                  size !== null ? theme.image.sizes.size : '',
                )}
                src={src}
                alt={alt}
                id={id}
                data-testid="image-1"
              />
            </a>
            <figcaption
              className={twMerge(
                imageCard ? theme.figure.cardImage.figureCaption : '',
                imageCaption ? theme.figure.captionImage.figureCaption : '',
              )}
            >
              {caption}
            </figcaption>
          </figure>
        ) : (
          <a href={link}>
            <img
              className={twMerge(
                theme.image.base,
                borderRadius !== null ? theme.image.radius.borderRadius : '',
                fullCircle !== null ? theme.image.fullCircle : '',
                imageShadow ? theme.image.shadow : '',
                retinaReady ? theme.image.retina : '',
                grayScale ? theme.image.effects.gray : '',
                blurLevel !== null ? theme.image.effects.blur.blurLevel : '',
                alignment !== null ? theme.image.align.alignment : '',
                size !== null ? theme.image.sizes.size : '',
              )}
              src={src}
              alt={alt}
              id={id}
              data-testid="image-2"
            />
          </a>
        )}
      </div>
    );
  },
);

Image.displayName = 'Image';
