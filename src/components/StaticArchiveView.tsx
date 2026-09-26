import Link from 'next/link';
import type { StaticArchivePage } from '@/data/staticArchive';

export default function StaticArchiveView({ page }: { page: StaticArchivePage }) {
  const faqSchema =
    page.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return (
    <>
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <nav style={{ marginBottom: 14, fontSize: 14 }}>
            <Link href="/">Home</Link> / <span>{page.h1 || page.slug}</span>
          </nav>
          <h1 style={{ marginBottom: 12 }}>{page.h1 || page.title.split('|')[0].trim()}</h1>
          {page.description ? (
            <aside
              style={{
                borderLeft: '4px solid #4f46e5',
                background: '#eef2ff',
                padding: '14px 16px',
                borderRadius: 12,
                marginBottom: 24,
              }}
            >
              <strong style={{ display: 'block', fontSize: 12, letterSpacing: '0.05em', marginBottom: 6 }}>
                DIRECT ANSWER
              </strong>
              <p style={{ margin: 0, lineHeight: 1.55 }}>{page.description}</p>
            </aside>
          ) : null}
          {page.faqs.length > 0 ? (
            <div style={{ display: 'grid', gap: 10 }}>
              {page.faqs.map((f) => (
                <article
                  key={f.question}
                  style={{
                    border: '1px solid var(--border-subtle,#e2e8f0)',
                    borderRadius: 12,
                    padding: '14px 16px',
                    background: '#fff',
                  }}
                >
                  <h2 style={{ fontSize: '1rem', margin: '0 0 6px' }}>{f.question}</h2>
                  <p style={{ margin: 0, color: 'var(--text-muted,#64748b)', lineHeight: 1.55 }}>{f.answer}</p>
                </article>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted,#64748b)', lineHeight: 1.6 }}>
              This page is restored from the CoachingCompare production archive. For the latest comparison tools, visit{' '}
              <Link href="/compare">Compare</Link> or <Link href="/exams">Exams</Link>.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
