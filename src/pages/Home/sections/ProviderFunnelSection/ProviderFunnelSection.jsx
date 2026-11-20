import Section from '../../../../components/layout/Section/Section';
import SectionHeading from '../../../../components/ui/SectionHeading/SectionHeading';
import ProviderFunnel from '../../../../features/provider-funnel/ProviderFunnel';
import styles from './ProviderFunnelSection.module.css';

/** "What kind of provider are you?": the guided, predefined provider funnel, right after the hero. */
function ProviderFunnelSection() {
  return (
    <Section tone="surface" spacing="md" id="provider-fit" aria-label="What kind of provider are you?">
      <SectionHeading
        eyebrow="Find your fit"
        title="What kind of provider are you?"
        description="Pick the closest match and we will walk you through your world, what you are looking for, and why Elixir fits, in four short steps."
        align="center"
        className={styles.heading}
      />
      <ProviderFunnel />
    </Section>
  );
}

export default ProviderFunnelSection;
