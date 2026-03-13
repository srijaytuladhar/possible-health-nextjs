import React from 'react';
import Link from 'next/link';
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
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Empowering Communities, <br />
          <span className="pink-text">Changing Lives</span>
        </h1>
        <p className={styles.subtitle}>
          We are dedicated to providing sustainable healthcare, education, and resources to underserved communities worldwide. Together, we can create a brighter future.
        </p>
        <div className={styles.cta}>
          <Link href="/donate" className="btn btn-primary">
            Donate Now
          </Link>
          <Link href="/get-involved" className="btn btn-outline">
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
