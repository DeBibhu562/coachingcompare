import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Competitive Exam Preparation Blog & Strategies | CoachingCompare.in',
  description: 'Expert exam strategies, syllabus breakdowns, study plans, and topper insights for CLAT, JEE Advanced, NEET-UG, UPSC CSE, and CAT.',
};

export default function BlogIndexPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Blog & Preparation Guides</span>
        </div>
      </nav>

      <header style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
          Editorial Insights & Tips
        </span>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
          Proven Strategies from National Exam Toppers
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
          Actionable test-taking techniques, revision routines, and psychological stamina guides written by verified educators and rank holders.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '900px', margin: '0 auto' }}>
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span className="badge badge-blue">{post.category}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{post.readTime}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{post.date}</span>
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
              <Link href={`/blog/${post.slug}`} style={{ transition: 'color 0.15s ease' }}>
                {post.title}
              </Link>
            </h2>

            <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-body)', marginBottom: '20px' }}>
              {post.excerpt}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                By {post.author}
              </span>

              <Link href={`/blog/${post.slug}`} className="btn btn-outline btn-sm">
                Read Complete Guide →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
