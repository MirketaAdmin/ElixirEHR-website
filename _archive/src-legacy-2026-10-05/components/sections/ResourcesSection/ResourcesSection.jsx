import { useState } from 'react';
import Container from '../../layout/Container/Container';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import ResourceCard from '../../ui/ResourceCard/ResourceCard';
import { resourceFilters, resources } from '../../../data/resources';
import styles from './ResourcesSection.module.css';

function ResourcesSection() {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Knowledge Base"
          title="Resources must be read"
          className={styles.heading}
        />

        <div className={styles.filters} role="tablist" aria-label="Resource categories">
          {resourceFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`${styles.filter} label-md ${activeFilter === filter ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(filter === activeFilter ? null : filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ResourcesSection;
