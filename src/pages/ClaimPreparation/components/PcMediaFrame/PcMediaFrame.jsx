import { cn } from '../../../../utils/cn';
import styles from './PcMediaFrame.module.css';

/**
 * The frame's image cards: a rounded, shadowed image (the card's own background and padding are
 * part of the exported image). `width` × `height` are the desktop dimensions.
 */
function PcMediaFrame({ width, height, image, className }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={width}
      height={height}
      className={cn(styles.frame, className)}
    />
  );
}

export default PcMediaFrame;
