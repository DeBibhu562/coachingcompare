import Link from 'next/link';
import type { LiveRankingPage } from '@/data/liveRankings';
import { liveRankingDirectAnswer } from '@/data/liveRankings';

function instituteHref(name: string) {
  return `/institutes/${name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;
}

export default function LiveRankingView({
  page,
  currentSlug,
}: {
  page: LiveRankingPage;
  currentSlug: string;
}) {
  const answer = liveRankingDirectAnswer(page);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    itemListElement: page.institutes.map((inst) => ({
      '@type': 'ListItem',
      position: inst.rank,
      item: {
        '@type': 'EducationalOrganization',
        name: inst.name,
        description: inst.blurb || undefined,
      },
    })),
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}

      <section className="hero-section" style={{ paddingBottom: 24 }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 14, fontSize: 14, opacity: 0.85 }}>
            <Link href="/">Home</Link>
            <span> / </span>
            <Link href="/exams">Exams</Link>
            <span> / </span>
            <span>{currentSlug}</span>
          </nav>
          <h1 style={{ marginBottom: 12 }}>{page.title.replace(/\s*\|\s*CoachingCompare\.in$/, '')}</h1>
          <aside
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderLeft: '4px solid #34d399',
              borderRadius: 12,
              padding: '14px 16px',
              maxWidth: 860,
            }}
          >
            <strong style={{ display: 'block', fontSize: 12, letterSpacing: '0.06em', marginBottom: 6 }}>
              DIRECT ANSWER
            </strong>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{answer}</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 18 }}>Ranked shortlist</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {page.institutes.length === 0 ? (
              <p>Ranking details for this hub are being refreshed from our inspection archive.</p>
            ) : (
              page.institutes.map((inst) => (
                <article
                  key={`${inst.rank}-${inst.name}`}
                  style={{
                    background: 'var(--bg-card, #fff)',
                    border: '1px solid var(--border-subtle, #e2e8f0)',
                    borderRadius: 14,
                    padding: '16px 18px',
                  }}
                >
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        minWidth: 42,
                        height: 42,
                        borderRadius: 10,
                        display: 'grid',
                        placeItems: 'center',
                        fontWeight: 800,
                        background: inst.rank === 1 ? '#ecfdf5' : '#eef2ff',
                        color: inst.rank === 1 ? '#047857' : '#4338ca',
                      }}
                    >
                      #{inst.rank}
                    </span>
                    <div>
                      <h3 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>
                        <Link href={instituteHref(inst.name)}>{inst.name}</Link>
                      </h3>
                      {inst.blurb ? (
                        <p style={{ margin: 0, color: 'var(--text-muted, #64748b)', lineHeight: 1.5 }}>
                          {inst.blurb}
                        </p>
                      ) : null}
                      {(inst.website || inst.name === 'IPMAT Mantra') ? (
                        <div style={{ marginTop: 8 }}>
                          <a
                            href={inst.website || 'http://ipmatmantra.com/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              color: '#047857',
                              background: '#ecfdf5',
                              border: '1px solid #a7f3d0',
                              padding: '5px 12px',
                              borderRadius: '6px',
                              fontWeight: 700,
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                            }}
                          >
                            Official Website (ipmatmantra.com) ↗
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {page.faqs.length > 0 ? (
            <div style={{ marginTop: 40 }}>
              <h2 style={{ marginBottom: 14 }}>Frequently asked questions</h2>
              <div style={{ display: 'grid', gap: 10 }}>
                {page.faqs.map((f) => (
                  <article
                    key={f.question}
                    style={{
                      border: '1px solid var(--border-subtle, #e2e8f0)',
                      borderRadius: 12,
                      padding: '14px 16px',
                      background: '#fff',
                    }}
                  >
                    <h3 style={{ margin: '0 0 6px', fontSize: '1rem' }}>{f.question}</h3>
                    <p style={{ margin: 0, color: 'var(--text-muted, #64748b)', lineHeight: 1.55 }}>
                      {f.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
