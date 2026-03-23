'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ExternalLink, Briefcase, GraduationCap, Globe, Users, BookOpen, DollarSign } from 'lucide-react';
import styles from './GetInvolved.module.css';

const learningCards = [
  { icon: <BookOpen size={20} />, title: 'Policy Translation', description: 'Bridging research evidence with Nepal\'s health policy landscape.' },
  { icon: <Globe size={20} />, title: 'Tech-Enabled Systems', description: 'Hands-on experience with CHIS and digital health tools.' },
  { icon: <DollarSign size={20} />, title: 'Global Funding', description: 'Exposure to NIH, WHO, and international grant ecosystems.' },
  { icon: <Users size={20} />, title: 'Co-design Methods', description: 'Community-centered research and human-centered design.' },
];

const testimonials = [
  {
    quote: "Working with Possible gave me the tools to translate research into real programs across Nepal's health system. The mentorship was unlike anything I'd experienced before.",
    name: 'Trainee — AIR Fellow',
    role: 'Alumni Researcher in Residence',
  },
];

const WorkWithUsPage = () => {
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
            <h1 className={styles.title}>Work With Us</h1>
            <p className={styles.tagline}>Rigor. Respect. Results.</p>
            <p className={styles.subtitle}>
              Join a team that takes on the hardest health challenges in Nepal — and turns them into
              scalable, evidence-based solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Global Impact */}
      <section className={`section-padding ${styles.impactSection}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <motion.div
              className={styles.colContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="section-label">
                <Globe size={14} />
                Design Global Impact
              </span>
              <h2>Projects Built to Reduce <span className={styles.accent}>Suffering at Scale</span></h2>
              <p>
                At Possible, every project is deliberately designed with scale in mind. We do not
                build pilots for the sake of pilots — each initiative is structured to be tested,
                refined, and embedded into national health systems across Nepal.
              </p>
              <p>
                Our work spans mental health, chronic disease, domestic violence response, HIV care,
                and dementia — areas that are often overlooked or considered too complex to solve.
              </p>
            </motion.div>

            <motion.div
              className={styles.colImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageBox}>
                <img src="/about-story.png" alt="Field work in Nepal" className={styles.img} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className={`section-padding ${styles.mentorSection}`}>
        <div className="container">
          <div className={styles.mentorGrid}>
            <motion.div
              className={styles.mentorCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Mentorship & Support</span>
              <h2>Guidance from Nepal&apos;s Health Leaders</h2>
              <p>
                Our trainees and researchers are mentored directly by experts embedded in Nepal&apos;s
                public health system — as well as global collaborators from Yale, UCSF, NIH, and WHO.
              </p>
              <p>
                Whether you are a clinician, researcher, or health system thinker, you will find a
                community at Possible that supports bold, rigorous, compassionate work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accelerated Learning */}
      <section className={`section-padding ${styles.learningSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Accelerated Learning Curve</span>
            <h2>What You&apos;ll Gain</h2>
          </motion.div>

          <div className={styles.learningGrid}>
            {learningCards.map((card, i) => (
              <motion.div
                key={card.title}
                className={styles.learningCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.learningIcon}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Action buttons */}
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#" className={`btn btn-primary`}>
              <Briefcase size={18} />
              View Job Openings
              <ExternalLink size={15} />
            </a>
            <a href="#" className={`btn btn-secondary`}>
              <GraduationCap size={18} />
              Trainee Programs
            </a>
          </motion.div>

          <p className={styles.note}>
            ⚠️ Possible does not accept general volunteers. We offer a limited number of structured
            trainee programs with stipend support for selected candidates.
          </p>
        </div>
      </section>

      {/* Team Voices / Testimonials */}
      <section className={`section-padding ${styles.testimonialsSection}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Team Voices</span>
            <h2>Hear from Our Alumni</h2>
          </motion.div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={styles.testimonialCard}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
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

export default WorkWithUsPage;
