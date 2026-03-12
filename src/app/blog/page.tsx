import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './Blog.module.css';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Our Impact in East Africa: A Journey of Hope',
      excerpt: 'Discover how our latest health initiatives are transforming lives in rural communities...',
      author: 'Sarah Johnson',
      date: 'March 10, 2026',
      category: 'Impact'
    },
    {
      id: 2,
      title: 'Education: The Key to Sustainable Growth',
      excerpt: 'Why we believe investing in primary education is the most effective way to fight poverty...',
      author: 'Michael Chen',
      date: 'March 5, 2026',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Clean Water Project Milestone: 1M Beneficiaries',
      excerpt: 'Celebrating a decade of work in providing safe drinking water to underserved regions...',
      author: 'David Smith',
      date: 'February 28, 2026',
      category: 'Success Stories'
    }
  ];

  return (
    <main className={styles.container}>
      <Navbar />
      
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Latest <span className="pink-text">News</span></h1>
          <p className={styles.subtitle}>Stories of impact, hope, and change from around the world.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.blogLayout}>
            <div className={styles.postsGrid}>
              {posts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.imagePlaceholder}></div>
                  <div className={styles.content}>
                    <span className={styles.category}>{post.category}</span>
                    <h2 className={styles.postTitle}><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}><User size={14} /> {post.author}</span>
                      <span className={styles.metaItem}><Calendar size={14} /> {post.date}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className={styles.readMore}>
                      Read Full Story <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}

              <div className={styles.pagination}>
                <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
                <button className={styles.pageBtn}>2</button>
                <button className={styles.pageBtn}>3</button>
                <span className={styles.dots}>...</span>
                <button className={styles.pageBtn}>Next</button>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.widget}>
                <h3>Search</h3>
                <div className={styles.searchBox}>
                  <input type="text" placeholder="Search stories..." />
                </div>
              </div>

              <div className={styles.widget}>
                <h3>Categories</h3>
                <ul className={styles.catList}>
                  <li><Link href="#">Impact (15)</Link></li>
                  <li><Link href="#">Education (8)</Link></li>
                  <li><Link href="#">Healthcare (12)</Link></li>
                  <li><Link href="#">Success Stories (24)</Link></li>
                  <li><Link href="#">Volunteer Diaries (5)</Link></li>
                </ul>
              </div>

              <div className={styles.newsletterWidget}>
                <h3>Join Our Newsletter</h3>
                <p>Get the latest impact stories delivered to your inbox.</p>
                <form className={styles.sideForm}>
                  <input type="email" placeholder="Email Address" required />
                  <button type="submit" className="btn btn-primary w-full">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
