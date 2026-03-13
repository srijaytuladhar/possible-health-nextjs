import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './Contact.module.css';

const ContactPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />
      
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Contact <span className="pink-text">Us</span></h1>
          <p className={styles.subtitle}>Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <h2>Get in <span className="pink-text">Touch</span></h2>
              <p className={styles.description}>Our team is here to help and answer any question you might have. We look forward to hearing from you.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.icon}><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@possiblehealth.org</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.icon}><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.icon}><MapPin size={24} /></div>
                  <div>
                    <h4>Our Location</h4>
                    <p>123 Humanitarian Way, <br />Geneva, Switzerland</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialCard}>
                <h4>Follow Our Journey</h4>
                <div className={styles.socialLinks}>
                  {/* Social icons would go here */}
                  <span className={styles.socialIcon}>FB</span>
                  <span className={styles.socialIcon}>TW</span>
                  <span className={styles.socialIcon}>IG</span>
                  <span className={styles.socialIcon}>LI</span>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <form className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" placeholder="John" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder="Doe" required />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="How can we help?" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={6} placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <p>Interactive Map Integration Placeholder</p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
