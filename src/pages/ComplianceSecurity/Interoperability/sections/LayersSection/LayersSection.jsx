import { interopLayers } from '../../../../../data/interoperability';
import Section from '../../../../../components/layout/Section/Section';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import CardPair from '../../../components/CardPair/CardPair';
import TopicCards from '../../../components/TopicCards/TopicCards';
import styles from './LayersSection.module.css';

/** "FHIR and HL7 v2 Do Different Jobs": the two layers side by side, then three supporting points. */
function LayersSection() {
  const { id, eyebrow, title, description, cards, topics } = interopLayers;

  return (
    <Section tone="white" spacing="none" id={id} className={styles.section} aria-labelledby="interop-layers-title">
      <ComplianceIntro id="interop-layers-title" eyebrow={eyebrow} title={title} description={description} />
      <CardPair cards={cards} />
      <TopicCards cards={topics} />
    </Section>
  );
}

export default LayersSection;
