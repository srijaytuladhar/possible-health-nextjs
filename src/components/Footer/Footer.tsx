import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Solutions', path: '/programs' },
    { name: 'Work With Us', path: '/get-involved' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactLinks = [
    { label: 'General Enquiries', email: 'answers@possiblehealth.org' },
    { label: 'Donations', email: 'donations@possiblehealth.org' },
    { label: 'Media', email: 'media@possiblehealth.org' },
    { label: 'Research', email: 'research@possiblehealth.org' },
  ];

  const socials = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand + Social */}
        <div className={styles.info}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAccent}>Possible</span>
            <span className={styles.logoSub}>Health</span>
          </Link>
          <p className={styles.description}>
            We reduce suffering and improve lives by co-designing, testing, and scaling solutions that strengthen community care systems. Rooted in Nepal, contributing to global knowledge.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialIcon}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>
                  <ArrowRight size={14} />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Emails */}
        <div className={styles.contactCol}>
          <h3>Contact</h3>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <div>
                <strong>Nepal Office</strong>
                <p>Bhim Plaza, 1st Floor, Bhupi Sadak<br />Naxal 44600, Kathmandu, Nepal</p>
                <p>+977 9822999300</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <div>
                <strong>US Office</strong>
                <p>99 Wall Street #4100<br />New York, NY 10005</p>
              </div>
            </div>
            {contactLinks.map((c) => (
              <div key={c.label} className={styles.emailItem}>
                <Mail size={14} className={styles.contactIcon} />
                <div>
                  <span>{c.label}</span>
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3>Join Our Community</h3>
          <p>Stay updated on our latest research, programs, and impact stories from Nepal and beyond.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Your Email Address" required aria-label="Email for newsletter" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Legal footnote */}
      <div className={styles.footnote}>
        <div className="container">
          <p>
            Possible is a collaboration between two independent organizations: <strong>Sambhav (Possible-Nepal)</strong>, a Nepal-based NGO, and <strong>Possible-US</strong>, a U.S.-based nonprofit. While operating independently, they maintain a shared mission to advance health innovation in Nepal.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Possible Health. Made with <Heart size={15} className={styles.heart} fill="var(--primary)" /> for a healthier world.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
