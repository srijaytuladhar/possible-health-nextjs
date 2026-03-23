'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ExternalLink, FileText } from 'lucide-react';
import styles from './Publications.module.css';

const publications = [
  {
    title: 'Outcomes of collaborative care model for depression and hypertension in Nepal',
    authors: 'Citrin D, Bhusal M, et al.',
    journal: 'Global Mental Health',
    year: '2023',
    link: '#',
    type: 'Research Article',
  },
  {
    title: 'Community Health Worker-based care for diabetes and hypertension: A mixed-methods study',
    authors: 'Schwarz D, Rai M, et al.',
    journal: 'PLOS ONE',
    year: '2022',
    link: '#',
    type: 'Research Article',
  },
  {
    title: 'MILAP: Family-based intervention to reduce intimate partner violence in Nepal',
    authors: 'Decker M, Bhusal M, et al.',
    journal: 'Journal of Interpersonal Violence',
    year: '2023',
    link: '#',
    type: 'Research Article',
  },
  {
    title: 'Scaling up community-based mental health interventions in Nepal',
    authors: 'Tol W, et al.',
    journal: 'The Lancet Psychiatry',
    year: '2021',
    link: '#',
    type: 'Review',
  },
  {
    title: 'Feasibility of INCLUDE: Addressing HIV stigma through a digital intervention',
    authors: 'Mayer K, Schwarz D, et al.',
    journal: 'AIDS and Behavior',
    year: '2022',
    link: '#',
    type: 'Pilot Study',
  },
  {
    title: 'Community Health Information System (CHIS): Implementation lessons from Nepal',
    authors: 'Acharya B, et al.',
    journal: 'Journal of Global Health',
    year: '2023',
    link: '#',
    type: 'Implementation Science',
  },
  {
    title: 'Dementia care in low-resource settings: Home-based behavioral interventions',
    authors: 'Adhikari P, Shrestha R, et al.',
    journal: 'International Psychogeriatrics',
    year: '2022',
    link: '#',
    type: 'Research Article',
  },
  {
    title: 'Annual Report 2023: Impact & Innovation',
    authors: 'Possible Health',
    journal: 'Organizational Report',
    year: '2023',
    link: '#',
    type: 'Report',
  },
];

const typeColors: Record<string, string> = {
  'Research Article': styles.tagBlue,
  'Review': styles.tagPurple,
  'Pilot Study': styles.tagTeal,
  'Implementation Science': styles.tagGreen,
  'Report': styles.tagOrange,
};

const PublicationsPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      <section className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>Research & Knowledge</span>
            <h1 className={styles.title}>
              Reports & <span className={styles.highlight}>Publications</span>
            </h1>
            <p className={styles.subtitle}>
              Our research generates evidence that informs community health practice — locally and globally.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`section-padding ${styles.pubSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <div className={styles.cardTop}>
                  <FileText size={18} className={styles.fileIcon} />
                  <span className={`${styles.typeTag} ${typeColors[pub.type] || styles.tagBlue}`}>
                    {pub.type}
                  </span>
                </div>
                <h3 className={styles.pubTitle}>{pub.title}</h3>
                <p className={styles.authors}>{pub.authors}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.meta}>
                    <span className={styles.journal}>{pub.journal}</span>
                    <span className={styles.year}>{pub.year}</span>
                  </div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.readLink}>
                    Read Paper <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PublicationsPage;
