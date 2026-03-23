'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Team.module.css';

const nepalTeam = [
  { name: 'Biraj Karmacharya', role: 'Executive Director, Sambhav (Possible-Nepal)', area: 'Leadership' },
  { name: 'Archana Acharya', role: 'Director of Programs', area: 'Programs' },
  { name: 'Pooja Thapa', role: 'Research Manager', area: 'Research' },
  { name: 'Santosh Bhusal', role: 'Community Health Lead', area: 'Community Health' },
  { name: 'Anita Poudel', role: 'Operations Manager', area: 'Operations' },
  { name: 'Rajan Shrestha', role: 'Technology Lead (CHIS)', area: 'Technology' },
];

const usTeam = [
  { name: 'Duncan Maru', role: 'Co-founder & Board Member, Possible-US', area: 'Leadership' },
  { name: 'Sanjay Basu', role: 'Senior Research Advisor', area: 'Research' },
  { name: 'David Schwarz', role: 'Global Health Research Director', area: 'Research' },
  { name: 'Kala Mehta', role: 'Partnerships & Development Lead', area: 'Partnerships' },
];

const areaColors: Record<string, string> = {
  Leadership: styles.tagBlue,
  Programs: styles.tagGreen,
  Research: styles.tagPurple,
  'Community Health': styles.tagTeal,
  Operations: styles.tagOrange,
  Technology: styles.tagIndigo,
  Partnerships: styles.tagPurple,
};

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('');

const TeamPage = () => {
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
            <h1 className={styles.title}>Our <span className={styles.highlight}>Team</span></h1>
            <p className={styles.subtitle}>
              We are researchers, doers, clinicians, engineers, and advocates — united by a shared mission to transform community health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nepal Team */}
      <section className={`section-padding ${styles.teamSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">🇳🇵 Nepal</span>
            <h2>Sambhav (Possible-Nepal) Team</h2>
          </motion.div>

          <div className={styles.grid}>
            {nepalTeam.map((member, i) => (
              <motion.div
                key={member.name}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={styles.avatar}>{initials(member.name)}</div>
                <span className={`${styles.areaTag} ${areaColors[member.area] || styles.tagBlue}`}>
                  {member.area}
                </span>
                <h4 className={styles.name}>{member.name}</h4>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="LinkedIn"><Linkedin size={15} /></a>
                  <a href="#" aria-label="Email"><Mail size={15} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* US Team */}
      <section className={`section-padding ${styles.usSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">🇺🇸 United States</span>
            <h2>Possible-US Team</h2>
          </motion.div>

          <div className={styles.grid}>
            {usTeam.map((member, i) => (
              <motion.div
                key={member.name}
                className={`${styles.card} ${styles.cardUS}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`${styles.avatar} ${styles.avatarUS}`}>{initials(member.name)}</div>
                <span className={`${styles.areaTag} ${areaColors[member.area] || styles.tagBlue}`}>
                  {member.area}
                </span>
                <h4 className={styles.name}>{member.name}</h4>
                <p className={styles.role}>{member.role}</p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="LinkedIn"><Linkedin size={15} /></a>
                  <a href="#" aria-label="Twitter"><Twitter size={15} /></a>
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

export default TeamPage;
