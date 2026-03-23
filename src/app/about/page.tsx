'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className={styles.title}>
              About <span className={styles.highlight}>Possible</span>
            </h1>
            <p className={styles.subtitle}>
              Health innovation rooted in community, context, and evidence — since our founding in Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.imageBox}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img src="/about-story.png" alt="Possible Health founders in Nepal" className={styles.img} />
              <div className={styles.imgBadge}>Founded with communities</div>
            </motion.div>

            <motion.div
              className={styles.storyContent}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Story</span>
              <h2>Born in Nepal&apos;s Hills, <br />Built for the World</h2>
              <p>
                Possible began with a simple question: what would healthcare look like if communities
                were at the center? Starting in the remote districts of western Nepal, our founders
                worked alongside government health workers to understand what was truly needed — and
                what was not.
              </p>
              <p>
                Over time, that community-first approach became our north star. We now work across
                multiple districts in Nepal, partnering with the Ministry of Health, international
                research institutions, and most importantly — communities themselves.
              </p>
              <p>
                Today, Possible operates as two complementary organizations: Sambhav (Possible-Nepal)
                based in Kathmandu, and Possible-US based in New York — united by a single mission.
              </p>
              <Link href="/programs" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-flex', gap: '0.5rem' }}>
                See Our Solutions <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`section-padding ${styles.vmSection}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <motion.div
              className={styles.vmCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Our Vision</h3>
              <p>
                A world where everyone, everywhere, has access to high-quality health care rooted in
                community, context, and evidence.
              </p>
            </motion.div>
            <motion.div
              className={`${styles.vmCard} ${styles.vmAccent}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3>Our Mission</h3>
              <p>
                We reduce suffering and improve lives by co-designing, testing, and scaling solutions
                that strengthen community care systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className={styles.teamTeaser}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>
              We are a multidisciplinary team of health workers, researchers, engineers, clinicians,
              and advocates working across Nepal and the United States.
            </p>
            <Link href="/team" className="btn btn-primary">
              View Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
