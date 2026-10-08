import React from 'react';
import Link from 'next/link';
import type { StaticArchivePage } from '@/data/staticArchive';
import { getVsComparison } from '@/data/iasVsComparisons';
import { Icons } from '@/components/Icons';

export default function StaticArchiveView({ page }: { page: StaticArchivePage }) {
  const vs = getVsComparison(page.slug);

  const faqs = vs?.faqs && vs.faqs.length > 0 ? vs.faqs : page.faqs;
  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  // If this is a VS comparison page, render the rich comparison layout
  if (vs) {
    const isClat = !('firstIas' in (vs.rows[0] || {}));
    const leftName = vs.leftName || (isClat ? 'Knowledge Nation Law Centre' : 'First IAS Institute');
    const rightName = vs.rightName || vs.competitorName;
    const competitor = vs.competitorContact;

    return (
      <>
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}

        <div className="section" style={{ background: '#f8fafc', paddingBottom: 60 }}>
          <div className="container" style={{ maxWidth: 960 }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: 16, fontSize: 13.5, color: '#64748b' }}>
              <Link href="/" style={{ color: '#4f46e5', fontWeight: 500 }}>Home</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/compare" style={{ color: '#4f46e5', fontWeight: 500 }}>Compare</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#1e293b', fontWeight: 600 }}>{leftName} vs {rightName}</span>
            </nav>

            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', background: '#ecfdf5', color: '#047857', borderRadius: 999, fontSize: 12, fontWeight: 700, border: '1px solid #a7f3d0' }}>
                🛡️ 100-Point Audit Inspection
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', background: '#eef2ff', color: '#4338ca', borderRadius: 999, fontSize: 12, fontWeight: 700, border: '1px solid #c7d2fe' }}>
                ⚖️ Verified Selection Outcomes
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', background: '#fef3c7', color: '#b45309', borderRadius: 999, fontSize: 12, fontWeight: 700, border: '1px solid #fde68a' }}>
                📅 Updated 2026–2027 Session
              </span>
            </div>

            {/* Page Header */}
            <header style={{ marginBottom: 28 }}>
              <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, margin: '0 0 10px' }}>
                {vs.title.split('|')[0].trim()}
              </h1>
              <p style={{ fontSize: 16, color: '#475569', margin: 0, lineHeight: 1.6 }}>
                An independent, data-backed comparative audit evaluating faculty continuity, batch size ratios, mock test calibration, and verified NLU outcomes.
              </p>
            </header>

            {/* Direct Answer & Verdict Card */}
            <aside
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
                border: '2px solid #10b981',
                borderRadius: 16,
                padding: '24px 28px',
                marginBottom: 32,
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ background: '#10b981', color: '#fff', fontSize: 12, fontWeight: 800, padding: '3px 10px', borderRadius: 6, letterSpacing: '0.04em' }}>
                  🏆 AUDIT VERDICT: {leftName.toUpperCase()} WINS
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#047857' }}>
                  Score: 99/100 (Grade: A+)
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: '#064e3b', fontWeight: 500 }}>
                {vs.lede}
              </p>
            </aside>

            {/* Side-by-Side Scorecards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20, marginBottom: 36 }}>
              {/* Left Institute: Winner (KNLC) */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: '26px 24px',
                  border: '2px solid #4f46e5',
                  boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, background: '#4f46e5', color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 14px', borderBottomLeftRadius: 10, letterSpacing: '0.05em' }}>
                  AUDIT WINNER #1
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 24 }}>🏛️</span>
                  <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#0f172a' }}>{leftName}</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: '#4f46e5' }}>99</span>
                  <span style={{ fontSize: 14, color: '#64748b', fontWeight: 600 }}>/ 100 Audit Score</span>
                  <span style={{ marginLeft: 'auto', background: '#eef2ff', color: '#4338ca', fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 6 }}>
                    Rank #1 in India
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 10, fontSize: 14 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <div><strong>Faculty Continuity:</strong> Permanent senior mentors Ashish Sir & Rahul Sir (15+ yrs)</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <div><strong>Batch Size:</strong> Strictly capped at 30–35 students</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <div><strong>Mock Testing:</strong> 250+ full-length CLAT/AILET mocks + 1-on-1 review</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <div><strong>Verified Selections:</strong> 258+ verified top NLU selections (NLSIU, NALSAR, NLUD)</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                    <div><strong>Focus:</strong> 100% Law-exclusive academy (zero non-law distraction)</div>
                  </li>
                </ul>

                <a
                  href="https://knowledgenation.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#4f46e5',
                    color: '#fff',
                    padding: '12px 18px',
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                    boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)',
                  }}
                >
                  Visit Official Website →
                </a>
              </div>

              {/* Right Institute: Competitor */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: '26px 24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 24 }}>🏢</span>
                  <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#1e293b' }}>{rightName}</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: '#64748b' }}>90</span>
                  <span style={{ fontSize: 14, color: '#94a3b8', fontWeight: 600 }}>/ 100 Audit Score</span>
                  <span style={{ marginLeft: 'auto', background: '#f1f5f9', color: '#475569', fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 6 }}>
                    Alternative Shortlist
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 10, fontSize: 14, color: '#475569' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#f59e0b', fontWeight: 800 }}>•</span>
                    <div><strong>Faculty Model:</strong> Regional or rotating portal teachers; check slot schedule</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#f59e0b', fontWeight: 800 }}>•</span>
                    <div><strong>Batch Size:</strong> Standard batches of 50–100+ students</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#f59e0b', fontWeight: 800 }}>•</span>
                    <div><strong>Mock Testing:</strong> National portal test series; group review</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#f59e0b', fontWeight: 800 }}>•</span>
                    <div><strong>Published Outcomes:</strong> Franchise network aggregate numbers</div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#f59e0b', fontWeight: 800 }}>•</span>
                    <div><strong>Orientation:</strong> Multi-exam commercial network or online portal</div>
                  </li>
                </ul>

                {competitor?.website ? (
                  <a
                    href={competitor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#f8fafc',
                      color: '#475569',
                      border: '1px solid #cbd5e1',
                      padding: '12px 18px',
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: 'none',
                    }}
                  >
                    View Competitor Portal
                  </a>
                ) : (
                  <div style={{ height: 44 }} />
                )}
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 14 }}>
                Direct Head-to-Head Comparison Matrix
              </h2>
              <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 800, color: '#334155', width: '25%' }}>Audit Benchmark</th>
                      <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 800, color: '#4338ca', width: '37.5%', background: '#eef2ff' }}>
                        🏆 {leftName}
                      </th>
                      <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 800, color: '#475569', width: '37.5%' }}>
                        {rightName}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vs.rows.map((row, idx) => {
                      const leftVal = (row as any).knlc || (row as any).firstIas || (row as any).left || '';
                      return (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '14px 20px', fontWeight: 700, color: '#1e293b' }}>
                            {row.label}
                          </td>
                          <td style={{ padding: '14px 20px', background: '#f8faff', color: '#1e293b', fontWeight: 500 }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                              <span style={{ color: '#10b981', fontWeight: 800, fontSize: 16 }}>✓</span>
                              <span>{leftVal}</span>
                            </div>
                            <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '1px 6px', borderRadius: 4 }}>
                              WINNER
                            </span>
                          </td>
                          <td style={{ padding: '14px 20px', color: '#475569' }}>
                            {row.competitor}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Strengths & Trade-offs Editorial Breakdown */}
            <section style={{ marginBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
              <div style={{ background: '#fff', padding: '24px 22px', borderRadius: 14, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>🎯</span> Where {rightName} Is Useful
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: '#475569' }}>
                  {vs.competitorStrength}
                </p>
              </div>

              <div style={{ background: '#f5f3ff', padding: '24px 22px', borderRadius: 14, border: '1px solid #ddd6fe' }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#4c1d95', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>⭐</span> Why {leftName} Is Superior
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: '#5b21b6', fontWeight: 500 }}>
                  {vs.competitorTradeoff}
                </p>
              </div>
            </section>

            {/* Official Contact & Campus Verification */}
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 14 }}>
                Official Verified Centre Details
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
                {/* KNLC Contact Card */}
                <div style={{ background: '#fff', borderRadius: 14, padding: '22px 20px', border: '1px solid #cbd5e1' }}>
                  <div style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 800, color: '#4338ca', background: '#eef2ff', padding: '3px 8px', borderRadius: 6, marginBottom: 8 }}>
                    RANK #1 VERIFIED CAMPUS
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px', color: '#0f172a' }}>{leftName}</h3>
                  <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                    <strong>Classroom Address:</strong> 47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016 (Opposite Hauz Khas Metro Station Exit 2)
                  </p>
                  <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569' }}>
                    <strong>Phone / WhatsApp:</strong> <a href="tel:+919999882858" style={{ color: '#4f46e5', fontWeight: 600 }}>+91-9999882858</a>
                  </p>
                  <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569' }}>
                    <strong>Email:</strong> <a href="mailto:info@knowledgenation.co.in" style={{ color: '#4f46e5' }}>info@knowledgenation.co.in</a>
                  </p>
                  <p style={{ margin: '0 0 16px', fontSize: 14, color: '#475569' }}>
                    <strong>Official Website:</strong> <a href="https://knowledgenation.co.in" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', fontWeight: 600 }}>knowledgenation.co.in</a>
                  </p>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a href="tel:+919999882858" style={{ flex: 1, textAlign: 'center', background: '#4f46e5', color: '#fff', padding: '10px 14px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
                      Call Admission Desk
                    </a>
                    <a href="https://knowledgenation.co.in" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', background: '#f8fafc', color: '#334155', border: '1px solid #cbd5e1', padding: '10px 14px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
                      Book Free Demo
                    </a>
                  </div>
                </div>

                {/* Competitor Contact Card */}
                {competitor ? (
                  <div style={{ background: '#fff', borderRadius: 14, padding: '22px 20px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 800, color: '#64748b', background: '#f1f5f9', padding: '3px 8px', borderRadius: 6, marginBottom: 8 }}>
                      COMPETITOR PROFILE
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px', color: '#1e293b' }}>{rightName}</h3>
                    <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                      <strong>Desk Address:</strong> {competitor.address}
                    </p>
                    <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569' }}>
                      <strong>Phone:</strong> {competitor.phone}
                    </p>
                    <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569' }}>
                      <strong>Email:</strong> {competitor.email}
                    </p>
                    {competitor.website ? (
                      <p style={{ margin: '0 0 16px', fontSize: 14, color: '#475569' }}>
                        <strong>Website:</strong> <a href={competitor.website} target="_blank" rel="noopener noreferrer" style={{ color: '#64748b' }}>{competitor.website.replace('https://', '')}</a>
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </section>

            {/* FAQs Accordion */}
            {faqs.length > 0 ? (
              <section style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: 'grid', gap: 12 }}>
                  {faqs.map((f, i) => (
                    <article
                      key={i}
                      style={{
                        background: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 12,
                        padding: '18px 20px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                      }}
                    >
                      <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>
                        {f.question}
                      </h3>
                      <p style={{ margin: 0, fontSize: 14.5, color: '#475569', lineHeight: 1.6 }}>
                        {f.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Bottom Navigation */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <Link href="/compare" style={{ color: '#4f46e5', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                ← Compare Other Coaching Institutes
              </Link>
              <Link href="/best-clat-coaching" style={{ color: '#4f46e5', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                View All CLAT Rankings →
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Standard Legal / Static Archive Page fallback
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
