'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Solutions', path: '/programs' },
  { name: 'Work With Us', path: '/get-involved' },
  { name: 'Publications', path: '/publications' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}

      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAccent}>Possible</span>
            <span className={styles.logoSub}>Health</span>
          </Link>

          {/* Desktop Menu */}
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`${styles.navLink} ${pathname === link.path ? styles.activeLink : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className={`btn btn-primary ${styles.donateBtn}`}>
                <Heart size={16} fill="white" />
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? (
              <X size={24} color={isScrolled ? 'var(--secondary)' : 'white'} />
            ) : (
              <Menu size={24} color={isScrolled ? 'var(--secondary)' : 'white'} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
