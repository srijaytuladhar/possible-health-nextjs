import React from 'react';
import styles from './Impact.module.css';

const Impact = () => {
  const stats = [
    { number: '2.5M+', label: 'People Helped' },
    { number: '150+', label: 'Global Projects' },
    { number: '25K+', label: 'Volunteers' },
    { number: '12', label: 'Countries' },
  ];

  return (
    <section className={styles.impact}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.number}>{stat.number}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
