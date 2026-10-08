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
    let tableHtml = '<div style="overflow-x: auto; margin: 24px 0;"><table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14.5px;">';
    if (tableHeaders.length > 0) {
      tableHtml += '<thead><tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0;">';
      tableHeaders.forEach((th) => {
        tableHtml += `<th style="padding: 12px 16px; text-align: left; font-weight: 700; color: #1e293b;">${formatInline(th)}</th>`;
      });
      tableHtml += '</tr></thead>';
    }
    tableHtml += '<tbody>';
    tableRows.forEach((row) => {
      tableHtml += '<tr style="border-bottom: 1px solid #f1f5f9;">';
      row.forEach((cell) => {
        tableHtml += `<td style="padding: 12px 16px; color: #334155;">${formatInline(cell)}</td>`;
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
      htmlParts.push(`<h2 style="font-size: 24px; font-weight: 800; color: var(--text-dark, #0f172a); margin: 34px 0 14px; line-height: 1.3;">${formatInline(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      htmlParts.push(`<h3 style="font-size: 20px; font-weight: 700; color: var(--text-dark, #0f172a); margin: 26px 0 10px; line-height: 1.35;">${formatInline(line.slice(4))}</h3>`);
    } else if (line.startsWith('- ')) {
      htmlParts.push(`<li style="margin-bottom: 8px; list-style-type: disc; margin-left: 22px; color: #334155;">${formatInline(line.slice(2))}</li>`);
    } else if (/^\d+\.\s/.test(line)) {
      const content = line.replace(/^\d+\.\s/, '');
      htmlParts.push(`<li style="margin-bottom: 8px; list-style-type: decimal; margin-left: 22px; color: #334155;">${formatInline(content)}</li>`);
    } else if (line === '---') {
      htmlParts.push('<hr style="margin: 32px 0; border: 0; border-top: 1px solid #e2e8f0;" />');
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

      <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '880px' }}>
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
            dangerouslySetInnerHTML={{
              __html: renderMarkdown(post.content),
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

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div style={{ marginTop: '36px', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>
                Related Guides & Comparisons
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {post.relatedLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    style={{
                      padding: '8px 14px',
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

          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/blog" className="btn btn-outline btn-sm">
              ← Back to All Guides
            </Link>
            <Link href="/best-clat-coaching" className="btn btn-primary btn-sm">
              Explore CLAT Coaching Rankings →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
