import { cn } from '../../../../utils/cn';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './PcMediaFrame.module.css';

/**
 * The frame's image cards: a rounded, shadowed card (`tone` surface or white) holding the
 * "Generic image placeholder" (552 × 300) scaled to the card width and centred vertically —
 * the screenshots have not been supplied. `width` × `height` are the desktop dimensions.
 */
function PcMediaFrame({ width, height, tone = 'surface', className }) {
  return (
    <div
      className={cn(styles.frame, styles[tone], className)}
      style={{
        '--frame-width': `${width}px`,
        '--frame-height': `${height}px`,
        '--frame-ratio': width / height,
        '--ph-scale': width / 552,
      }}
    >
      <ImagePlaceholder className={styles.placeholder} />
    </div>
  );
}

export default PcMediaFrame;
