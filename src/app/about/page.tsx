import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />
      
      {/* Page Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>About <span className="pink-text">NGO Heart</span></h1>
          <p className={styles.subtitle}>Empowering communities through sustainable development since 2010.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.imagePlaceholder}>
              <img src="/about-story.png" alt="Our Story" className={styles.storyImg} />
            </div>
            <div className={styles.content}>
              <span className="pink-text tagline">Our Story</span>
              <h2>How We <span className="pink-text">Started</span></h2>
              <p className={styles.text}>
                Founded by a group of passionate humanitarian workers, NGO Heart was born out of a simple vision: to create a world where everyone has the tools to succeed. Starting with a small health clinic in 2010, we have grown into a global organization impacting millions of lives.
              </p>
              <p className={styles.text}>
                Today, we operate in over 12 countries, focusing on sustainable solutions that empower locals and foster long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Row */}
      <section className={`section-padding ${styles.visionSection}`}>
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <h3>Our Vision</h3>
              <p>A world where every community is self-reliant and every individual lives in dignity and health.</p>
            </div>
            <div className={styles.visionCard}>
              <h3>Our Mission</h3>
              <p>To implement sustainable programs in health, education, and livelihood that transform lives across borders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="title">Our Leadership Team</h2>
            <p>Guided by experts with decades of experience in global development.</p>
          </div>
          <div className={styles.teamGrid}>
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className={styles.teamCard}>
                <div className={styles.teamImg}></div>
                <h4>Team Member {member}</h4>
                <p>Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
