'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './Contact.module.css';

const nepalOffice = {
  name: 'Sambhav (Possible) — Nepal',
  address: 'Bhim Plaza, 1st Floor\nBhupi Sadak, Naxal 44600\nKathmandu, Nepal',
  phone: '+977 9822999300',
};

const usOffice = {
  name: 'Possible US',
  address: '99 Wall Street #4100\nNew York, NY 10005',
  phone: '',
};

const emails = [
  { label: 'General Questions', email: 'answers@possiblehealth.org', icon: <Mail size={20} /> },
  { label: 'Donations', email: 'donations@possiblehealth.org', icon: <Mail size={20} /> },
  { label: 'Media Enquiries', email: 'media@possiblehealth.org', icon: <Mail size={20} /> },
  { label: 'Research Collaboration', email: 'research@possiblehealth.org', icon: <Mail size={20} /> },
];

const socials = [
  { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
  { icon: <Twitter size={20} />, label: 'Twitter / X', href: '#' },
  { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
  { icon: <Youtube size={20} />, label: 'YouTube', href: '#' },
];

const ContactPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />

      <section className={styles.header}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className={styles.title}>Get in <span className={styles.highlight}>Touch</span></h1>
            <p className={styles.subtitle}>We would love to hear from you — our teams in Nepal and the US are here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>

            {/* Offices */}
            <motion.div
              className={styles.infoCol}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Our Offices</h2>

              {/* Nepal */}
              <div className={styles.officeCard}>
                <div className={styles.officeFlag}>🇳🇵</div>
                <div>
                  <h4>{nepalOffice.name}</h4>
                  <div className={styles.officeDetail}>
                    <MapPin size={15} className={styles.detailIcon} />
                    <p>{nepalOffice.address.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</p>
                  </div>
                  <div className={styles.officeDetail}>
                    <Phone size={15} className={styles.detailIcon} />
                    <a href={`tel:${nepalOffice.phone.replace(/\s/g, '')}`}>{nepalOffice.phone}</a>
                  </div>
                </div>
              </div>

              {/* US */}
              <div className={styles.officeCard}>
                <div className={styles.officeFlag}>🇺🇸</div>
                <div>
                  <h4>{usOffice.name}</h4>
                  <div className={styles.officeDetail}>
                    <MapPin size={15} className={styles.detailIcon} />
                    <p>{usOffice.address.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</p>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <h3 className={styles.emailsTitle}>Email Contacts</h3>
              <div className={styles.emailGrid}>
                {emails.map((e) => (
                  <div key={e.label} className={styles.emailCard}>
                    <div className={styles.emailIcon}>{e.icon}</div>
                    <div>
                      <span className={styles.emailLabel}>{e.label}</span>
                      <a href={`mailto:${e.email}`} className={styles.emailAddress}>{e.email}</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className={styles.socialBlock}>
                <h3>Follow Our Journey</h3>
                <div className={styles.socialRow}>
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialBtn}>
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className={styles.formSection}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <p className={styles.formDesc}>We typically respond within 2-3 business days.</p>
              <form className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" placeholder="First name" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder="Last name" required />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option value="">Select a category</option>
                    <option value="general">General Questions</option>
                    <option value="research">Research Collaboration</option>
                    <option value="donation">Donation Enquiry</option>
                    <option value="media">Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={6} placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
