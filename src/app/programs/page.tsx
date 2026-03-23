'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './Programs.module.css';

const solutions = [
  {
    id: 1,
    title: 'CHWs at Scale for Chronic Disease & Behavioral Health',
    description:
      'Home-based care delivery via Community Health Workers (CHWs) for diabetes, hypertension, depression, and anxiety. Powered by the Community Health Information System (CHIS).',
    tech: 'Community Health Information System (CHIS)',
    status: '100,000+ households',
    tag: 'Chronic Disease',
    color: styles.blue,
    icon: '🏥',
  },
  {
    id: 2,
    title: 'MILAP — Intimate Partner Violence Intervention',
    description:
      'Family-based intervention developed with WOREC, targeting reduction of domestic violence and depression in vulnerable households. A community-led approach grounded in dignity and respect.',
    tech: 'Family-based behavioral intervention',
    status: '500+ families',
    tag: 'Domestic Violence',
    color: styles.purple,
    icon: '🤝',
  },
  {
    id: 3,
    title: 'INCLUDE — Improving HIV Care',
    description:
      'A digital tool designed to reduce stigma, discrimination, and bias in HIV clinics. Addresses intersecting issues of gender, race, and mental health for people living with HIV.',
    tech: 'Digital stigma-reduction tool',
    status: 'In research phase',
    tag: 'HIV Care',
    color: styles.teal,
    icon: '💊',
  },
  {
    id: 4,
    title: 'Collaborative Care for Mental Health',
    description:
      'An integrated CHW-clinician model for mental health care using WHO-endorsed training manuals. Bridges the gap between community-level support and clinical expertise.',
    tech: 'WHO-endorsed training & delivery framework',
    status: 'Scaling in Nepal',
    tag: 'Mental Health',
    color: styles.green,
    icon: '🧠',
  },
  {
    id: 5,
    title: 'Dementia Support Intervention',
    description:
      'Home-based behavioral care program for people with dementia, co-created with clinical experts, caregivers, and community members. Provides structured, compassionate in-home support.',
    tech: 'Home-based behavioral care protocol',
    status: 'Hundreds of households',
    tag: 'Dementia',
    color: styles.orange,
    icon: '🌿',
  },
];

const collaborators = [
  'Ministry of Health and Population (Nepal)',
  'Nepal Health Research Council',
  'World Health Organization',
  'WOREC',
  'Nyaya Health Nepal',
  'Yale University',
  'UCSF',
  'NIH (USA)',
  'TPO Nepal',
  'Blue Diamond Society',
  'Transcultural Psychosocial Organization',
  'PHECT Nepal',
];

const nepalRegions = [
  'Achham District',
  'Dolakha District',
  'Ramechhap District',
  'Sindhupalchowk District',
  'Kathmandu Valley',
];

const SolutionsPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      {/* Hero Header */}
      <section className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>Our Work</span>
            <h1 className={styles.title}>
              Our <span className={styles.highlight}>Solutions</span>
            </h1>
            <p className={styles.subtitle}>
              Evidence-based innovations co-designed with communities, tested through rigorous
              research, and scaled through national health systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={`section-padding ${styles.solutionsSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.id}
                className={`${styles.card} ${sol.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>{sol.icon}</span>
                  <span className={styles.cardTag}>{sol.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{sol.title}</h3>
                <p className={styles.cardDesc}>{sol.description}</p>
                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Technology</span>
                    <span className={styles.metaValue}>{sol.tech}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Status / Reach</span>
                    <span className={`${styles.metaValue} ${styles.statusBadge}`}>{sol.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Presence */}
      <section className={`section-padding ${styles.presenceSection}`}>
        <div className="container">
          <motion.div
            className={styles.presenceHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">🌍 Operational Presence</span>
            <h2>Currently Active in Nepal</h2>
            <p>We operate across multiple districts in Nepal, partnering with local governments and community health systems.</p>
          </motion.div>

          <div className={styles.presenceGrid}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapInner}>
                <span className={styles.mapEmoji}>🗺️</span>
                <p>Nepal — Active Program Regions</p>
                <div className={styles.regionList}>
                  {nepalRegions.map((r) => (
                    <span key={r} className={styles.regionTag}>📍 {r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className={`section-padding ${styles.collabSection}`}>
        <div className="container">
          <motion.div
            className={styles.collabHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">🤝 Our Collaborators</span>
            <h2>Trusted Partners Worldwide</h2>
          </motion.div>

          <div className={styles.collabGrid}>
            {collaborators.map((c, i) => (
              <motion.div
                key={c}
                className={styles.collabCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SolutionsPage;
