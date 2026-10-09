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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://coachingcompare.in/blog/${slug}`,
      type: 'article',
    },
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function extractHeadings(content: string): Array<{ text: string; id: string }> {
  const lines = content.split('\n');
  const headings: Array<{ text: string; id: string }> = [];
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ')) {
      const rawText = trimmed.replace(/^##\s+/, '').replace(/\*\*/g, '').trim();
      headings.push({
        text: rawText,
        id: slugify(rawText),
      });
    }
  });
  return headings;
}

function formatInline(str: string): string {
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: #4f46e5; font-weight: 600; text-decoration: underline;">$1</a>');
}

function renderMarkdown(content: string): string {
  const lines = content.split('\n');
  const htmlParts: string[] = [];
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  let inCode = false;
  let codeBuffer: string[] = [];

  const flushTable = () => {
    if (!inTable) return;
    let tableHtml = '<div style="overflow-x: auto; margin: 24px 0;"><table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 14.5px; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.02);">';
    if (tableHeaders.length > 0) {
      tableHtml += '<thead><tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0;">';
      tableHeaders.forEach((th) => {
        tableHtml += `<th style="padding: 13px 16px; text-align: left; font-weight: 700; color: #1e293b;">${formatInline(th)}</th>`;
      });
      tableHtml += '</tr></thead>';
    }
    tableHtml += '<tbody>';
    tableRows.forEach((row) => {
      tableHtml += '<tr style="border-bottom: 1px solid #f1f5f9;">';
      row.forEach((cell) => {
        tableHtml += `<td style="padding: 13px 16px; color: #334155; line-height: 1.5;">${formatInline(cell)}</td>`;
      });
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table></div>';
    htmlParts.push(tableHtml);
    inTable = false;
    tableHeaders = [];
    tableRows = [];
  };

  const flushCode = () => {
    if (!inCode) return;
    htmlParts.push(`<pre style="background: #0f172a; color: #f8fafc; padding: 18px 20px; border-radius: 10px; overflow-x: auto; font-size: 13px; line-height: 1.5; margin: 20px 0;"><code>${codeBuffer.join('\n')}</code></pre>`);
    inCode = false;
    codeBuffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      if (inCode) {
        flushCode();
      } else {
        if (inTable) flushTable();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').slice(1, -1).map((c) => c.trim());
      if (cells.every((c) => /^:?-+:?$/.test(c))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (line.startsWith('## ')) {
      const headingText = line.slice(3).replace(/\*\*/g, '').trim();
      const id = slugify(headingText);
      htmlParts.push(`<h2 id="${id}" style="font-size: 24px; font-weight: 800; color: var(--text-dark, #0f172a); margin: 38px 0 16px; line-height: 1.3; scroll-margin-top: 90px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">${formatInline(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      const isRank1 = line.includes('Rank 1') || line.includes('Knowledge Nation Law Centre');
      if (isRank1) {
        htmlParts.push(`<div style="background: linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%); border: 2px solid #6366f1; border-radius: 12px; padding: 18px 20px; margin: 28px 0 16px; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.08);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <span style="background: #4f46e5; color: #fff; font-size: 11.5px; font-weight: 800; padding: 3px 8px; border-radius: 6px; letter-spacing: 0.04em;">🏆 AUDIT WINNER</span>
            <span style="color: #4338ca; font-size: 13px; font-weight: 700;">Score: 99/100 | ★★★★★</span>
          </div>
          <h3 style="font-size: 20px; font-weight: 800; color: #1e1b4b; margin: 0;">${formatInline(line.slice(4))}</h3>
        </div>`);
      } else {
        htmlParts.push(`<h3 style="font-size: 19px; font-weight: 750; color: var(--text-dark, #0f172a); margin: 26px 0 10px; line-height: 1.35;">${formatInline(line.slice(4))}</h3>`);
      }
    } else if (line.startsWith('- ')) {
      htmlParts.push(`<li style="margin-bottom: 8px; list-style-type: disc; margin-left: 22px; color: #334155; line-height: 1.6;">${formatInline(line.slice(2))}</li>`);
    } else if (/^\d+\.\s/.test(line)) {
      const content = line.replace(/^\d+\.\s/, '');
      htmlParts.push(`<li style="margin-bottom: 8px; list-style-type: decimal; margin-left: 22px; color: #334155; line-height: 1.6;">${formatInline(content)}</li>`);
    } else if (line === '---') {
      htmlParts.push('<hr style="margin: 36px 0; border: 0; border-top: 1px solid #e2e8f0;" />');
    } else if (line.length > 0) {
      htmlParts.push(`<p style="margin-bottom: 16px; line-height: 1.75; color: #334155;">${formatInline(line)}</p>`);
    }
  }

  if (inTable) flushTable();
  if (inCode) flushCode();

  return htmlParts.join('\n');
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const isUpsc = ('relatedExam' in post && (post as any).relatedExam === 'upsc') || (Boolean(post.category) && post.category.toLowerCase().includes('upsc')) || post.slug.includes('upsc');

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <style>{`
        .blog-container-wide {
          max-width: 1260px;
          margin: 0 auto;
          padding: 32px 20px 80px;
        }
        .blog-grid-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 32px;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .blog-grid-layout {
            grid-template-columns: minmax(0, 1fr) 340px;
          }
        }
        .sticky-blog-sidebar {
          position: sticky;
          top: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .toc-link:hover {
          background: #f1f5f9;
          color: #4f46e5 !important;
          transform: translateX(3px);
        }
        .sidebar-action-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="blog-container-wide">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav" style={{ marginBottom: 20 }}>
          <div className="breadcrumb-item">
            <Link href="/" style={{ color: '#4f46e5' }}>Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <Link href="/blog" style={{ color: '#4f46e5' }}>Blog</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{post.category}</span>
          </div>
        </nav>

        {/* Hero Header */}
        <header style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge badge-gold" style={{ fontSize: 13, padding: '4px 10px' }}>{post.category}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>⏱️ {post.readTime}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 Published {post.date}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '12px', background: '#ecfdf5', color: '#047857', padding: '3px 8px', borderRadius: 6, fontWeight: 700, border: '1px solid #a7f3d0' }}>
              ✓ Verified 2026-2027 Syllabus
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: '1.25' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 18px', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
            <span>✍️ Research Desk: <strong>{post.author}</strong></span>
            <span style={{ marginLeft: 'auto', fontSize: 13, color: '#64748b' }}>
              Audited by <strong>CoachingCompare</strong>
            </span>
          </div>
        </header>

        {/* 2-Column Responsive Grid Layout */}
        <div className="blog-grid-layout">
          {/* Main Article Content (Left Column) */}
          <main>
            <article className="card" style={{ padding: '36px', lineHeight: '1.8', fontSize: '16px', color: '#334155', borderRadius: 16, border: '1px solid #e2e8f0' }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(post.content),
                }}
              />

              {/* FAQs Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div style={{ marginTop: '40px', borderTop: '2px solid #e2e8f0', paddingTop: '32px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '18px' }}>
                    Frequently Asked Questions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {post.faqs.map((f, i) => (
                      <div key={i} style={{ padding: '18px 22px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>
                          {f.question}
                        </h4>
                        <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.65', color: '#475569' }}>
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Internal Guide Links */}
              {post.relatedLinks && post.relatedLinks.length > 0 && (
                <div style={{ marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '28px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
                    Related Preparation Guides & Comparisons
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {post.relatedLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        style={{
                          padding: '9px 16px',
                          background: '#eef2ff',
                          color: '#4338ca',
                          borderRadius: '8px',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          border: '1px solid #c7d2fe',
                        }}
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <Link href="/blog" className="btn btn-outline btn-sm">
                  ← Back to All Guides
                </Link>
                <Link href="/best-clat-coaching" className="btn btn-primary btn-sm">
                  Explore CLAT Coaching Rankings →
                </Link>
              </div>
            </article>
          </main>

          {/* Sticky Interactive Sidebar (Right Column) */}
          <aside className="sticky-blog-sidebar">
            {/* 1. Quick Table of Contents Card */}
            {headings.length > 0 && (
              <div style={{ background: '#fff', padding: '22px 20px', borderRadius: 14, border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 18 }}>📑</span>
                  <h3 style={{ fontSize: 15.5, fontWeight: 800, margin: 0, color: '#0f172a', letterSpacing: '-0.01em' }}>
                    On This Page
                  </h3>
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#${h.id}`}
                      className="toc-link"
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 8,
                        fontSize: 13,
                        color: '#475569',
                        textDecoration: 'none',
                        padding: '6px 10px',
                        borderRadius: 6,
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: '#4f46e5', fontWeight: 800, fontSize: 11.5 }}>{i + 1}.</span>
                      <span style={{ fontWeight: 500 }}>{h.text}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* 2. Audited Rank #1 Spotlight Card */}
            {isUpsc ? (
              <div
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                  padding: '24px 20px',
                  borderRadius: 14,
                  border: '2px solid #10b981',
                  boxShadow: '0 8px 20px -4px rgba(16, 185, 129, 0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ background: '#10b981', color: '#fff', fontSize: 11, fontWeight: 800, padding: '3px 8px', borderRadius: 6, letterSpacing: '0.04em' }}>
                    🏆 AUDIT RANK #1
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: '#047857' }}>
                    Score: 99/100
                  </span>
                </div>

                <h4 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 6px', color: '#064e3b' }}>
                  First IAS Institute
                </h4>
                <p style={{ margin: '0 0 14px', fontSize: 12.5, color: '#047857', lineHeight: 1.45 }}>
                  Top-rated UPSC Civil Services academy with 58+ verified CSE selections and personal mentor guidance.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'grid', gap: 7, fontSize: 12.5, color: '#166534' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Small Batch:</strong> 35–45 students strictly</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Mentors:</strong> Ashish Sir & Rahul Sir (15+ yrs)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Mocks:</strong> 250+ Prelims & Mains mocks + 48-hr review</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Campus:</strong> Hauz Khas, Karol Bagh & Gurgaon</span>
                  </li>
                </ul>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a
                    href="tel:+919990228268"
                    className="sidebar-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#10b981',
                      color: '#fff',
                      padding: '10px 14px',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    <Icons.Phone size={14} /> Call: +91-9990228268
                  </a>
                  <a
                    href="https://firstias.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#fff',
                      color: '#064e3b',
                      border: '1px solid #10b981',
                      padding: '9px 14px',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    <Icons.Globe size={14} /> Visit firstias.co.in
                  </a>
                </div>
              </div>
            ) : (
              <div
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                  padding: '24px 20px',
                  borderRadius: 14,
                  border: '2px solid #10b981',
                  boxShadow: '0 8px 20px -4px rgba(16, 185, 129, 0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ background: '#10b981', color: '#fff', fontSize: 11, fontWeight: 800, padding: '3px 8px', borderRadius: 6, letterSpacing: '0.04em' }}>
                    🏆 AUDIT RANK #1
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: '#047857' }}>
                    Score: 99/100
                  </span>
                </div>

                <h4 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 6px', color: '#064e3b' }}>
                  Knowledge Nation Law Centre
                </h4>
                <p style={{ margin: '0 0 14px', fontSize: 12.5, color: '#047857', lineHeight: 1.45 }}>
                  Top-rated CLAT academy with 258+ verified NLU selections and permanent mentor guidance.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'grid', gap: 7, fontSize: 12.5, color: '#166534' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Small Batch:</strong> 30–35 students strictly</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Mentors:</strong> Ashish Sir & Rahul Sir (15+ yrs)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Mocks:</strong> 250+ full-length tests & 1-on-1 review</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <span><strong>Campus:</strong> Hauz Khas, South Delhi</span>
                  </li>
                </ul>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <a
                    href="tel:+919999882858"
                    className="sidebar-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#10b981',
                      color: '#fff',
                      padding: '10px 14px',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    <Icons.Phone size={14} /> Call: +91-9999882858
                  </a>
                  <a
                    href="https://knowledgenation.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      background: '#fff',
                      color: '#064e3b',
                      border: '1px solid #10b981',
                      padding: '9px 14px',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    <Icons.Globe size={14} /> Visit knowledgenation.co.in
                  </a>
                </div>
              </div>
            )}

            {/* 3. Quick Head-to-Head Comparisons Widget */}
            <div style={{ background: '#fff', padding: '20px', borderRadius: 14, border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 17 }}>⚖️</span>
                <h4 style={{ fontSize: 14.5, fontWeight: 800, margin: 0, color: '#0f172a' }}>
                  {isUpsc ? 'UPSC Institute Comparisons' : 'CLAT Institute Comparisons'}
                </h4>
              </div>
              <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
                {isUpsc ? (
                  <>
                    <Link
                      href="/first-ias-institute-vs-vision-ias"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      First IAS vs Vision IAS →
                    </Link>
                    <Link
                      href="/vajiram-and-ravi-ias-vs-first-ias-institute"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      First IAS vs Vajiram & Ravi →
                    </Link>
                    <Link
                      href="/forumias-vs-first-ias-institute"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      First IAS vs ForumIAS →
                    </Link>
                    <Link
                      href="/next-ias-vs-first-ias-institute"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      First IAS vs Next IAS →
                    </Link>
                    <Link
                      href="/raus-ias-vs-first-ias-institute"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      First IAS vs Rau's IAS →
                    </Link>
                    <Link
                      href="/drishti-ias-vs-first-ias-institute"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      First IAS vs Drishti IAS →
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/knowledge-nation-law-centre-vs-legaledge-by-toprankers"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      KNLC vs LegalEdge By Toprankers →
                    </Link>
                    <Link
                      href="/knowledge-nation-law-centre-vs-career-launcher"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      KNLC vs Career Launcher LST →
                    </Link>
                    <Link
                      href="/knowledge-nation-law-centre-vs-law-prep-tutorials"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      KNLC vs Law Prep Tutorials →
                    </Link>
                    <Link
                      href="/knowledge-nation-law-centre-vs-clat-possible"
                      style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0', color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'block' }}
                    >
                      KNLC vs CLAT Possible →
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* 4. Target Year Blueprints & Rankings Widget */}
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: 14, border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 17 }}>🎯</span>
                <h4 style={{ fontSize: 14.5, fontWeight: 800, margin: 0, color: '#0f172a' }}>
                  {isUpsc ? 'UPSC Strategy & Rankings' : 'CLAT Rankings & Blueprints'}
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13 }}>
                {isUpsc ? (
                  <>
                    <Link
                      href="/best-ias-coaching-in-delhi"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Best IAS Coaching in Delhi
                    </Link>
                    <Link
                      href="/best-ias-coaching-in-india"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Best IAS Coaching in India
                    </Link>
                    <Link
                      href="/online-upsc-coaching"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Online UPSC Coaching Rankings
                    </Link>
                    <Link
                      href="/blog/upsc-cse-2027-strategy-to-crack"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • UPSC CSE 2027 : Strategy to Crack
                    </Link>
                    <Link
                      href="/blog/upsc-cse-2028-strategy-to-crack"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • UPSC CSE 2028 : Strategy to Crack
                    </Link>
                    <Link
                      href="/blog/upsc-cse-2029-strategy-to-crack"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • UPSC CSE 2029 : Strategy to Crack
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/blog/top-5-best-clat-ailet-coaching-in-india"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Top 5 CLAT + AILET in India
                    </Link>
                    <Link
                      href="/blog/top-5-best-clat-ailet-coaching-in-delhi"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Top 5 CLAT + AILET in Delhi
                    </Link>
                    <Link
                      href="/blog/top-5-best-online-clat-ailet-coaching-institutes"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Top 5 Online CLAT + AILET
                    </Link>
                    <Link
                      href="/blog/top-5-best-clat-ailet-coaching-in-south-delhi"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Top 5 CLAT in South Delhi
                    </Link>
                    <Link
                      href="/blog/top-5-best-clat-ailet-coaching-in-gurgaon"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Top 5 CLAT in Gurgaon
                    </Link>
                    <Link
                      href="/blog/top-5-best-clat-ailet-coaching-in-delhi-ncr"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • Top 5 CLAT in Delhi NCR
                    </Link>
                    <Link
                      href="/blog/clat-2027-strategy-to-crack"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • CLAT 2027 : 2-Year Roadmap
                    </Link>
                    <Link
                      href="/blog/clat-2028-strategy-to-crack"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • CLAT 2028 : 3-Year Foundation
                    </Link>
                    <Link
                      href="/blog/clat-2029-strategy-to-crack"
                      style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}
                    >
                      • CLAT 2029 : 4-Year Architecture
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* 5. Free Mentorship Consultation Box */}
            <div style={{ background: '#eef2ff', padding: '20px', borderRadius: 14, border: '1px solid #c7d2fe', textAlign: 'center' }}>
              <h4 style={{ fontSize: 15, fontWeight: 800, color: '#312e81', margin: '0 0 6px' }}>
                {isUpsc ? 'Need 1-on-1 UPSC Guidance?' : 'Need 1-on-1 CLAT Guidance?'}
              </h4>
              <p style={{ margin: '0 0 14px', fontSize: 12.5, color: '#4338ca', lineHeight: 1.5 }}>
                {isUpsc
                  ? 'Speak directly with senior mentors at First IAS Institute for a free profile assessment.'
                  : 'Speak directly with senior mentors at Knowledge Nation Law Centre for a free diagnostic assessment.'}
              </p>
              <a
                href={
                  isUpsc
                    ? 'https://wa.me/919990228268?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20UPSC%20counselling%20session'
                    : 'https://wa.me/919999882858?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20CLAT%20counselling%20session'
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  background: '#4f46e5',
                  color: '#fff',
                  padding: '9px 14px',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: 'none',
                }}
              >
                💬 WhatsApp Mentors
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
