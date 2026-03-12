import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <Link href="/" className={styles.logo}>
            <span className="pink-text">NGO</span>Heart
          </Link>
          <p className={styles.description}>
            Empowering communities through sustainable health, education, and development programs worldwide since 2010.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programs">Our Programs</Link></li>
            <li><Link href="/get-involved">Get Involved</Link></li>
            <li><Link href="/blog">Latest News</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for latest updates and impact stories.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} NGO Heart. Made with <Heart size={16} className="pink-text" fill="#E91E63" /> for a better world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
