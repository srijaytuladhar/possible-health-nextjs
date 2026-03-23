'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, FlaskConical, TrendingUp } from 'lucide-react';
import styles from './HowWeWork.module.css';

const steps = [
  {
    icon: <Pencil size={28} />,
    step: '01',
    title: 'Co-design',
    description:
      'Assess strengths and weaknesses of existing systems and build solutions with governments, caregivers, communities, and people with lived experience.',
    color: styles.blue,
  },
  {
    icon: <FlaskConical size={28} />,
    step: '02',
    title: 'Test',
    description:
      'Adapt and study solutions through rigorous research — combining clinical expertise, community knowledge, and real-world data.',
    color: styles.teal,
  },
  {
    icon: <TrendingUp size={28} />,
    step: '03',
    title: 'Scale',
    description:
      'Expand successful solutions by embedding them into national systems, ensuring lasting impact beyond the initial intervention.',
    color: styles.green,
  },
];

const HowWeWork = () => {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label">How We Work</span>
          <h2 className={styles.title}>From Insight to National Scale</h2>
          <p className={styles.subtitle}>
            Our 3-step approach transforms community health challenges into evidence-based solutions.
          </p>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className={`${styles.card} ${s.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNum}>{s.step}</div>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.partnerNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We partner with governments and non-governmental organizations to strengthen community
          health, invest in emerging leaders, and ensure affected populations help design solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default HowWeWork;
