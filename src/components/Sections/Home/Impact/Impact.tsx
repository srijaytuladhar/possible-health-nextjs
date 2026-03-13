import React from 'react';
import { Users, Globe, Heart, Flag } from 'lucide-react';
import Counter from '@/components/UI/Counter';
import styles from './Impact.module.css';

const Impact = () => {
  const stats = [
    { 
      target: 2.5, 
      suffix: 'M+', 
      decimals: 1,
      label: 'People Helped',
      icon: <Users size={32} />
    },
    { 
      target: 150, 
      suffix: '+', 
      decimals: 0,
      label: 'Global Projects',
      icon: <Globe size={32} />
    },
    { 
      target: 25, 
      suffix: 'K+', 
      decimals: 0,
      label: 'Volunteers',
      icon: <Heart size={32} />
    },
    { 
      target: 12, 
      suffix: '', 
      decimals: 0,
      label: 'Countries',
      icon: <Flag size={32} />
    },
  ];

  return (
    <section className={styles.impact}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.iconWrapper}>
                {stat.icon}
              </div>
              <div className={styles.content}>
                <span className={styles.number}>
                  <Counter 
                    end={stat.target} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
