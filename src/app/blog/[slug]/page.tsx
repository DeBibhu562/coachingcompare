import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | CoachingCompare.in' };

  return {
    title: `${post.title} | CoachingCompare.in`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '840px' }}>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <Link href="/blog">Blog</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{post.category}</span>
        </div>
      </nav>

      <header style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span className="badge badge-gold">{post.category}</span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{post.readTime}</span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Published {post.date}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', lineHeight: '1.25' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: '13.5px', color: 'var(--text-dark)' }}>
          <span>✍️ Author: <strong>{post.author}</strong></span>
        </div>
      </header>

      {/* Main Post Content */}
      <article className="card" style={{ padding: '36px', lineHeight: '1.8', fontSize: '16px', color: 'var(--text-body)' }}>
        <div
          style={{ whiteSpace: 'pre-line' }}
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/## (.*?)\n/g, '<h2 style="font-size: 24px; font-weight: 800; color: var(--text-dark); margin: 32px 0 14px;">$1</h2>')
              .replace(/### (.*?)\n/g, '<h3 style="font-size: 20px; font-weight: 800; color: var(--text-dark); margin: 24px 0 10px;">$1</h3>')
              .replace(/- (.*?)\n/g, '<li style="margin-bottom: 6px; list-style-type: disc; margin-left: 20px;">$1</li>'),
          }}
        />

        {post.faqs && post.faqs.length > 0 && (
          <div style={{ marginTop: '36px', borderTop: '1px solid var(--border-subtle)', paddingTop: '28px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {post.faqs.map((f, i) => (
                <div key={i} style={{ padding: '16px 20px', background: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 8px' }}>
                    {f.question}
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'var(--text-body)' }}>
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/blog" className="btn btn-outline btn-sm">
            ← Back to All Guides
          </Link>
          <Link href="/#cities-registry" className="btn btn-primary btn-sm">
            Find Coaching in Your City →
          </Link>
        </div>
      </article>
    </div>
  );
}
