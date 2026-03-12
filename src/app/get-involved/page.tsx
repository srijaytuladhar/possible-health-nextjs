import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './GetInvolved.module.css';

const GetInvolvedPage = () => {
  return (
    <main className={styles.container}>
      <Navbar />
      
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Get <span className="pink-text">Involved</span></h1>
          <p className={styles.subtitle}>Your passion can change the world. Join our global movement today.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formSection}>
              <h2>Become a <span className="pink-text">Volunteer</span></h2>
              <p>Fill out the form below and our team will get in touch with you shortly.</p>
              
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="interest">Area of Interest</label>
                  <select id="interest" required>
                    <option value="">Select an area</option>
                    <option value="health">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="environment">Environment</option>
                    <option value="admin">Administration</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Why do you want to join us?</label>
                  <textarea id="message" rows={5} placeholder="Tell us about yourself..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h3>Partnerships</h3>
                <p>Are you an organization looking to collaborate? We partner with NGOs, corporations, and governments to scale impact.</p>
                <a href="mailto:partners@ngoheart.org" className="pink-text font-bold">partners@ngoheart.org</a>
              </div>
              
              <div className={styles.infoCard}>
                <h3>Donate Resources</h3>
                <p>We accept medical supplies, educational materials, and technical equipment for our field projects.</p>
                <a href="#" className="pink-text font-bold">Learn More about Resource Donation</a>
              </div>

              <div className={styles.impactBox}>
                <h4>90% of your donation</h4>
                <p>Goes directly to our programs in the field.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GetInvolvedPage;
