'use client';

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Mission from '@/components/Sections/Home/Mission/Mission';
import Impact from '@/components/Sections/Home/Impact/Impact';
import Programs from '@/components/Sections/Home/Programs/Programs';
import DonateCTA from '@/components/Sections/Home/DonateCTA/DonateCTA';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <Programs />
      <DonateCTA />
      <Footer />
    </main>
  );
}
