import { naatpQuality } from '../../../../../data/naatp';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import CardPair from '../../../components/CardPair/CardPair';
import TopicCards from '../../../components/TopicCards/TopicCards';
import styles from './QualitySection.module.css';

/** "The Field's Quality Agenda…": two explainer cards, three capability cards, then the directory note. */
function QualitySection() {
  const { id, eyebrow, title, description, cards, capabilities, caption } = naatpQuality;

  return (
    <Section tone="surface" spacing="none" id={id} className={styles.section} aria-labelledby="naatp-quality-title">
      <ComplianceIntro id="naatp-quality-title" eyebrow={eyebrow} title={title} description={description} />
      <CardPair cards={cards} />
      <TopicCards cards={capabilities} />
      <p className={styles.caption}>
        <RichText content={caption} linkClassName={styles.link} />
      </p>
    </Section>
  );
}

export default QualitySection;
