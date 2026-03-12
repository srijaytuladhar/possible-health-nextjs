import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
  return (
    <section className={`section-padding ${styles.mission}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tagline}>Our Mission</span>
            <h2 className={styles.title}>Dedicated to Creating a <span className="pink-text">Better World</span> for Everyone</h2>
            <p className={styles.text}>
              At NGO Heart, we believe that every individual deserves access to basic human rights: health, education, and the opportunity to thrive. Our mission is to bridge the gap between resources and need.
            </p>
            <div className={styles.values}>
              <div className={styles.valueItem}>
                <h4>Inclusivity</h4>
                <p>We serve everyone regardless of race, religion, or background.</p>
              </div>
              <div className={styles.valueItem}>
                <h4>Transparency</h4>
                <p>Every donation is tracked and reported for maximum impact.</p>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              {/* This would be an Image component in a real app */}
              <div className={styles.experienceBox}>
                <span className={styles.expNum}>15+</span>
                <span className={styles.expText}>Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
