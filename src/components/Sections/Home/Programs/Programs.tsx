import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Programs.module.css';

const Programs = () => {
  const programs = [
    {
      title: 'Health for All',
      description: 'Providing essential medical care and supplies to remote areas.',
      impact: '500K+ Treated',
      image: '/program-health.jpg'
    },
    {
      title: 'Education First',
      description: 'Building schools and providing scholarships to underprivileged children.',
      impact: '200+ Schools Built',
      image: '/program-education.jpg'
    },
    {
      title: 'Clean Water',
      description: 'Installing sustainable water filtration systems in communities.',
      impact: '1M+ Access to Water',
      image: '/program-water.jpg'
    }
  ];

  return (
    <section className={`section-padding ${styles.programs}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="pink-text tagline">Our Programs</span>
            <h2 className={styles.title}>Featured Initiatives</h2>
          </div>
          <Link href="/programs" className={styles.viewAll}>
            View All Programs <ChevronRight size={20} />
          </Link>
        </div>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imagePlaceholder}></div>
              <div className={styles.content}>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className={styles.footer}>
                  <span className={styles.impact}>{program.impact}</span>
                  <Link href={`/programs/${program.title.toLowerCase().replace(/ /g, '-')}`} className={styles.link}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
