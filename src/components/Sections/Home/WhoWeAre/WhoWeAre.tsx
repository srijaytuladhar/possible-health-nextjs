'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldAlert, Activity, Accessibility, Layers } from 'lucide-react';
import styles from './WhoWeAre.module.css';

const hardProblems = [
  { icon: <Brain size={20} />, label: 'Mental Health' },
  { icon: <ShieldAlert size={20} />, label: 'Domestic Violence' },
  { icon: <Activity size={20} />, label: 'Chronic Disease' },
  { icon: <Accessibility size={20} />, label: 'Disability' },
  { icon: <Layers size={20} />, label: 'Care Integration' },
];

const WhoWeAre = () => {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src="/mission.png" alt="Possible Health team in Nepal" className={styles.img} />
              <div className={styles.imageTag}>
                <span>🇳🇵 Rooted in Nepal</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className={styles.title}>
              Researchers, Doers &amp;<br /> Community Champions
            </h2>
            <p className={styles.text}>
              We are health workers, clinicians, engineers, and advocates. Rooted in Nepal, we build
              and test innovations that both draw from and contribute to local and global knowledge.
            </p>
            <p className={styles.text}>
              We take on hard problems that are often neglected or considered too complex:
            </p>

            <div className={styles.tags}>
              {hardProblems.map((item) => (
                <div key={item.label} className={styles.tag}>
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
