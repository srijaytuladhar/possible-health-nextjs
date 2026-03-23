'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import styles from './VisionMission.module.css';

const VisionMission = () => {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <Eye size={28} />
            </div>
            <span className={styles.label}>Our Vision</span>
            <p className={styles.text}>
              Possible envisions a world where everyone, everywhere, has access to high-quality
              health care rooted in community, context, and evidence.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardAccent}`}>
            <div className={`${styles.iconWrap} ${styles.iconAccent}`}>
              <Target size={28} />
            </div>
            <span className={styles.label}>Our Mission</span>
            <p className={styles.text}>
              We reduce suffering and improve lives by co-designing, testing, and scaling solutions
              that strengthen community care systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
