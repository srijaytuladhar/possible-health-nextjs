'use client';

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import VisionMission from '@/components/Sections/Home/VisionMission/VisionMission';
import WhoWeAre from '@/components/Sections/Home/WhoWeAre/WhoWeAre';
import HowWeWork from '@/components/Sections/Home/HowWeWork/HowWeWork';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Navbar />
      <Hero />
      <VisionMission />
      <WhoWeAre />
      <HowWeWork />
      <Footer />
    </main>
  );
}
