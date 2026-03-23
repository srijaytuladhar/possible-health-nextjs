'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.png"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heart size={14} fill="white" />
          Community Health Innovation · Nepal
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Health Innovation <br />
          <span className={styles.highlight}>Rooted in Community</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We reduce suffering and improve lives by co-designing, testing, and scaling solutions
          that strengthen community care systems — from Nepal&apos;s hillsides to global health stages.
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Link href="/programs" className="btn btn-primary">
            Explore Our Solutions
            <ArrowRight size={18} />
          </Link>
          <Link href="/donate" className="btn btn-outline">
            <Heart size={16} />
            Support Our Work
          </Link>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>100K+</span>
            <span className={styles.statLabel}>Households Reached</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Families in IPV Program</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Active Programs</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </section>
  );
};

export default Hero;
