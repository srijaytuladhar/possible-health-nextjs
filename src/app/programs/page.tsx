import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProgramsGrid from '@/components/Sections/Home/Programs/Programs';
import DonateCTA from '@/components/Sections/Home/DonateCTA/DonateCTA';
import styles from './Programs.module.css';

const ProgramsPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />
      
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Our <span className="pink-text">Programs</span></h1>
          <p className={styles.subtitle}>Empowering communities through targeted, sustainable initiatives.</p>
        </div>
      </section>

      {/* Reuse Programs Grid section but with more items if needed */}
      <ProgramsGrid />

      <section className="section-padding">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Active Projects</p>
            </div>
            <div className={styles.statCard}>
              <h3>12</h3>
              <p>Countries Reached</p>
            </div>
            <div className={styles.statCard}>
              <h3>$10M+</h3>
              <p>Funds Distributed</p>
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
      
      <Footer />
    </main>
  );
};

export default ProgramsPage;
