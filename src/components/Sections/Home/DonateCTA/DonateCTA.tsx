import React from 'react';
import Link from 'next/link';
import styles from './DonateCTA.module.css';

const DonateCTA = () => {
  return (
    <section className={`section-padding ${styles.donate}`}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>Ready to Make a <span className="pink-text">Difference?</span></h2>
        <p className={styles.text}>
          Your contribution, no matter how small, can change a life. Join us today in our mission to bring hope and health to those who need it most.
        </p>
        <div className={styles.actions}>
          <Link href="/donate" className="btn btn-primary btn-lg">
            Donate Now
          </Link>
          <Link href="/get-involved" className="btn btn-outline btn-lg">
            Join as Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;
