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
    const v: any = vs;
    const isClat = Boolean(v.rows?.[0]?.knlc || !v.rows?.[0]?.firstIas);
    const winnerName: string = isClat ? 'Knowledge Nation Law Centre' : 'First IAS Institute';

    let competitorName: string = v.competitorName || 'Competitor';
    if (v.leftName && v.leftName.toLowerCase() !== winnerName.toLowerCase()) {
      competitorName = v.leftName;
    } else if (v.rightName && v.rightName.toLowerCase() !== winnerName.toLowerCase()) {
      competitorName = v.rightName;
    }
    const competitor: any = v.competitorContact;

    return (
      <>
        {faqSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}

        <style>{`
          .vs-container-wide {
            max-width: 1260px;
            margin: 0 auto;
            padding: 28px 20px 80px;
          }
          .vs-grid-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
            align-items: start;
          }
          @media (min-width: 1024px) {
            .vs-grid-layout {
              grid-template-columns: minmax(0, 1fr) 340px;
            }
          }
          .sticky-vs-sidebar {
            position: sticky;
            top: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .vs-toc-link:hover {
            background: #f1f5f9;
            color: #4f46e5 !important;
            transform: translateX(3px);
          }
        `}</style>

        <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
          <div className="vs-container-wide">
            {/* Breadcrumb */}
            <nav style={{ marginBottom: 16, fontSize: 13.5, color: '#64748b' }}>
              <Link href="/" style={{ color: '#4f46e5', fontWeight: 500 }}>Home</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/compare" style={{ color: '#4f46e5', fontWeight: 500 }}>Compare</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#1e293b', fontWeight: 600 }}>{winnerName} vs {competitorName}</span>
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
              <h1 style={{ fontSize: 'clamp(26px, 3.8vw, 38px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, margin: '0 0 10px' }}>
                {v.title.split('|')[0].trim()}
              </h1>
              <p style={{ fontSize: 16, color: '#475569', margin: 0, lineHeight: 1.6 }}>
                An independent forensic comparative audit evaluating faculty continuity, batch size ratios, mock test calibration, and verified selection outcomes.
              </p>
            </header>

            {/* 2-Column Responsive Layout */}
            <div className="vs-grid-layout">
              {/* Main Column */}
              <main>
                {/* Direct Answer & Verdict Card */}
                <section
                  id="audit-verdict"
                  style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
                    border: '2px solid #10b981',
                    borderRadius: 16,
                    padding: '24px 28px',
                    marginBottom: 32,
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.08)',
                    scrollMarginTop: 90,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span style={{ background: '#10b981', color: '#fff', fontSize: 12, fontWeight: 800, padding: '3px 10px', borderRadius: 6, letterSpacing: '0.04em' }}>
                      🏆 AUDIT VERDICT: {winnerName.toUpperCase()} WINS
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#047857' }}>
                      Score: 99/100 (Grade: A+)
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: '#064e3b', fontWeight: 500 }}>
                    {v.lede}
                  </p>
                </section>

                {/* Side-by-Side Scorecards */}
                <section id="scorecards" style={{ scrollMarginTop: 90, marginBottom: 36 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                    Side-by-Side Scorecards & Key Metrics
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    {/* Left Institute: Winner */}
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
                        <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#0f172a' }}>{winnerName}</h3>
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
                          <div><strong>Batch Size:</strong> {isClat ? 'Strictly capped at 30–35 students' : 'Strictly capped at 35–40 students'}</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                          <div><strong>Mock Testing:</strong> {isClat ? '250+ full-length CLAT/AILET mocks + 1-on-1 review' : '250+ Prelims & Mains mocks with daily evaluated answer writing'}</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                          <div><strong>Verified Selections:</strong> {isClat ? '258+ verified top NLU selections (NLSIU, NALSAR, NLUD)' : '58+ verified CSE selections (IAS, IPS, IRS alumni)'}</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                          <div><strong>Focus:</strong> {isClat ? '100% Law-exclusive academy (zero non-law distraction)' : 'Dedicated Civil Services academy with personal officer mentorship'}</div>
                        </li>
                      </ul>

                      <a
                        href={isClat ? 'https://knowledgenation.co.in' : 'https://firstias.com'}
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
                        <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: '#1e293b' }}>{competitorName}</h3>
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
                          <div><strong>Batch Size:</strong> {isClat ? 'Standard batches of 50–100+ students' : 'Mass auditorium batches of 150–300+ students'}</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ color: '#f59e0b', fontWeight: 800 }}>•</span>
                          <div><strong>Mock Testing:</strong> {isClat ? 'National portal test series; group review' : 'Commercial test series; copy evaluation turnaround 3–4 weeks'}</div>
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
                </section>

                {/* Comparison Matrix Table */}
                <section id="comparison-matrix" style={{ scrollMarginTop: 90, marginBottom: 40 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 14 }}>
                    Direct Head-to-Head Comparison Matrix
                  </h2>
                  <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 16, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                          <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 800, color: '#334155', width: '25%' }}>Audit Benchmark</th>
                          <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 800, color: '#4338ca', width: '37.5%', background: '#eef2ff' }}>
                            🏆 {winnerName}
                          </th>
                          <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 800, color: '#475569', width: '37.5%' }}>
                            {competitorName}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {v.rows.map((row: any, idx: number) => {
                          const winnerVal = isClat ? (row.knlc || row.firstIas || row.left || '') : (row.firstIas || row.knlc || row.left || '');
                          return (
                            <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                              <td style={{ padding: '14px 20px', fontWeight: 700, color: '#1e293b' }}>
                                {row.label}
                              </td>
                              <td style={{ padding: '14px 20px', background: '#f8faff', color: '#1e293b', fontWeight: 500 }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                                  <span style={{ color: '#10b981', fontWeight: 800, fontSize: 16 }}>✓</span>
                                  <span>{winnerVal}</span>
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
                <section id="strengths-analysis" style={{ scrollMarginTop: 90, marginBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                  <div style={{ background: '#fff', padding: '24px 22px', borderRadius: 14, border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span>🎯</span> Where {competitorName} Is Useful
                    </h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: '#475569' }}>
                      {v.competitorStrength}
                    </p>
                  </div>

                  <div style={{ background: '#f5f3ff', padding: '24px 22px', borderRadius: 14, border: '1px solid #ddd6fe' }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: '#4c1d95', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span>⭐</span> Why {winnerName} Is Superior
                    </h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: '#5b21b6', fontWeight: 500 }}>
                      {v.competitorTradeoff}
                    </p>
                  </div>
                </section>

                {/* Official Contact & Campus Verification */}
                <section id="verified-centres" style={{ scrollMarginTop: 90, marginBottom: 40 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 14 }}>
                    Official Verified Centre Details
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                    {/* Winner Contact Card */}
                    <div style={{ background: '#fff', borderRadius: 14, padding: '22px 20px', border: '1px solid #cbd5e1' }}>
                      <div style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 800, color: '#4338ca', background: '#eef2ff', padding: '3px 8px', borderRadius: 6, marginBottom: 8 }}>
                        RANK #1 VERIFIED CAMPUS
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px', color: '#0f172a' }}>{winnerName}</h3>
                      <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                        <strong>Classroom Address:</strong>{' '}
                        {isClat
                          ? '47/1, First Floor, Kalu Sarai, Hauz Khas, New Delhi 110016 (Opposite Hauz Khas Metro Station Exit 2)'
                          : '47/1, First Floor, Kalu Sarai, Hauz Khas & Karol Bagh, New Delhi | Sector 14 Gurgaon'}
                      </p>
                      <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569' }}>
                        <strong>Phone / WhatsApp:</strong>{' '}
                        <a href={isClat ? 'tel:+919999882858' : 'tel:+919990228268'} style={{ color: '#4f46e5', fontWeight: 600 }}>
                          {isClat ? '+91-9999882858' : '+91-9990228268'}
                        </a>
                      </p>
                      <p style={{ margin: '0 0 8px', fontSize: 14, color: '#475569' }}>
                        <strong>Email:</strong>{' '}
                        <a href={isClat ? 'mailto:info@knowledgenation.co.in' : 'mailto:firstiasofficial@gmail.com'} style={{ color: '#4f46e5' }}>
                          {isClat ? 'info@knowledgenation.co.in' : 'firstiasofficial@gmail.com'}
                        </a>
                      </p>
                      <p style={{ margin: '0 0 16px', fontSize: 14, color: '#475569' }}>
                        <strong>Official Website:</strong>{' '}
                        <a
                          href={isClat ? 'https://knowledgenation.co.in' : 'https://firstias.com'}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#4f46e5', fontWeight: 600 }}
                        >
                          {isClat ? 'knowledgenation.co.in' : 'firstias.com'}
                        </a>
                      </p>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <a
                          href={isClat ? 'tel:+919999882858' : 'tel:+919990228268'}
                          style={{ flex: 1, textAlign: 'center', background: '#4f46e5', color: '#fff', padding: '10px 14px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}
                        >
                          Call Admission
                        </a>
                        <a
                          href={isClat ? 'https://knowledgenation.co.in' : 'https://firstias.com'}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ flex: 1, textAlign: 'center', background: '#f8fafc', color: '#334155', border: '1px solid #cbd5e1', padding: '10px 14px', borderRadius: 8, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}
                        >
                          Book Demo
                        </a>
                      </div>
                    </div>

                    {/* Competitor Contact Card */}
                    {competitor ? (
                      <div style={{ background: '#fff', borderRadius: 14, padding: '22px 20px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'inline-block', fontSize: 11.5, fontWeight: 800, color: '#64748b', background: '#f1f5f9', padding: '3px 8px', borderRadius: 6, marginBottom: 8 }}>
                          COMPETITOR PROFILE
                        </div>
                        <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 10px', color: '#1e293b' }}>{competitorName}</h3>
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
                  <section id="faqs" style={{ scrollMarginTop: 90, marginBottom: 40 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
                      Frequently Asked Questions
                    </h2>
                    <div style={{ display: 'grid', gap: 12 }}>
                      {faqs.map((f: any, i: number) => (
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
                  <Link href={isClat ? '/best-clat-coaching' : '/best-ias-coaching-in-delhi'} style={{ color: '#4f46e5', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                    {isClat ? 'View All CLAT Rankings →' : 'View All UPSC IAS Rankings →'}
                  </Link>
                </div>
              </main>

              {/* Sticky Interactive Sidebar (Right Column) */}
              <aside className="sticky-vs-sidebar">
                {/* 1. In-Page Quick Jump */}
                <div style={{ background: '#fff', padding: '22px 20px', borderRadius: 14, border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 18 }}>📑</span>
                    <h3 style={{ fontSize: 15.5, fontWeight: 800, margin: 0, color: '#0f172a' }}>
                      Quick Jump Sections
                    </h3>
                  </div>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13.5 }}>
                    <a href="#audit-verdict" className="vs-toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      <span style={{ color: '#10b981' }}>🏆</span> Audit Verdict
                    </a>
                    <a href="#scorecards" className="vs-toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      <span style={{ color: '#4f46e5' }}>📊</span> Institute Scorecards
                    </a>
                    <a href="#comparison-matrix" className="vs-toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      <span style={{ color: '#f59e0b' }}>📋</span> Comparison Matrix
                    </a>
                    <a href="#strengths-analysis" className="vs-toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      <span style={{ color: '#6366f1' }}>🎯</span> Strengths & Trade-offs
                    </a>
                    <a href="#verified-centres" className="vs-toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      <span style={{ color: '#0ea5e9' }}>📍</span> Verified Contacts
                    </a>
                    <a href="#faqs" className="vs-toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 6, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>
                      <span style={{ color: '#8b5cf6' }}>❓</span> Frequently Asked Questions
                    </a>
                  </nav>
                </div>

                {/* 2. Winner Quick Connect Card */}
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
                      AUDIT WINNER
                    </span>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: '#047857' }}>
                      Score: 99/100
                    </span>
                  </div>

                  <h4 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 6px', color: '#064e3b' }}>
                    {winnerName}
                  </h4>
                  <p style={{ margin: '0 0 14px', fontSize: 12.5, color: '#047857', lineHeight: 1.45 }}>
                    {isClat
                      ? 'Hauz Khas flagship law academy with strictly capped batches and permanent mentors.'
                      : 'Karol Bagh flagship UPSC institute with dedicated mentors and small-batch attention.'}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 6, fontSize: 12.5, color: '#166534' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                      <span>{isClat ? '30–35 students per batch' : '35–40 students per batch'}</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                      <span>{isClat ? 'Ashish Sir & Rahul Sir (Permanent)' : 'Retd. Officers & Senior UPSC Faculty'}</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                      <span>{isClat ? '250+ full-length mocks' : 'Daily Answer Writing & Prelims Test Series'}</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                      <span>{isClat ? '258+ verified top NLU selections' : 'Top 20 AIR Selections & High Success Ratio'}</span>
                    </li>
                  </ul>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <a
                      href={isClat ? 'tel:+919999882858' : 'tel:+919990228268'}
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
                      <Icons.Phone size={14} /> Call Admission: {isClat ? '+91-9999882858' : '+91-9990228268'}
                    </a>
                    <a
                      href={isClat ? 'https://knowledgenation.co.in' : 'https://firstias.com'}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      <Icons.Globe size={14} /> Visit {isClat ? 'knowledgenation.co.in' : 'firstias.com'}
                    </a>
                  </div>
                </div>

                {/* 3. Other Institute Comparisons */}
                <div style={{ background: '#fff', padding: '20px', borderRadius: 14, border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontSize: 17 }}>⚖️</span>
                    <h4 style={{ fontSize: 14.5, fontWeight: 800, margin: 0, color: '#0f172a' }}>
                      {isClat ? 'Other CLAT Comparisons' : 'Other UPSC Comparisons'}
                    </h4>
                  </div>
                  <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
                    {isClat ? (
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
                    ) : (
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
                    )}
                  </div>
                </div>

                {/* 4. Target Year Blueprints */}
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: 14, border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontSize: 17 }}>🎯</span>
                    <h4 style={{ fontSize: 14.5, fontWeight: 800, margin: 0, color: '#0f172a' }}>
                      {isClat ? 'CLAT Strategy Blueprints' : 'UPSC Preparation Guides'}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 13 }}>
                    {isClat ? (
                      <>
                        <Link href="/blog/why-knowledge-nation-law-centre-is-the-best-clat-coaching-in-india" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Why KNLC is Best in India
                        </Link>
                        <Link href="/blog/why-knowledge-nation-law-centre-is-the-best-clat-coaching-in-delhi" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Why KNLC is Best in Delhi
                        </Link>
                        <Link href="/blog/why-knowledge-nation-law-centre-is-the-best-online-clat-coaching-institute" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Why KNLC is Best Online
                        </Link>
                        <Link href="/blog/top-5-best-clat-ailet-coaching-in-india" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Top 5 CLAT + AILET in India
                        </Link>
                        <Link href="/blog/top-5-best-clat-ailet-coaching-in-delhi" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Top 5 CLAT + AILET in Delhi
                        </Link>
                        <Link href="/blog/top-5-best-online-clat-ailet-coaching-institutes" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Top 5 Online CLAT + AILET
                        </Link>
                        <Link href="/blog/top-5-best-clat-ailet-coaching-in-south-delhi" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Top 5 CLAT in South Delhi
                        </Link>
                        <Link href="/blog/top-5-best-clat-ailet-coaching-in-gurgaon" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Top 5 CLAT in Gurgaon
                        </Link>
                        <Link href="/blog/top-5-best-clat-ailet-coaching-in-delhi-ncr" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • Top 5 CLAT in Delhi NCR
                        </Link>
                        <Link href="/blog/clat-2027-strategy-to-crack" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • CLAT 2027 Strategy Blueprint
                        </Link>
                        <Link href="/blog/clat-2028-strategy-to-crack" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • CLAT 2028 Foundation Plan
                        </Link>
                        <Link href="/blog/clat-2029-strategy-to-crack" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '3px 0' }}>
                          • CLAT 2029 4-Year Architecture
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href="/best-ias-coaching-in-delhi" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Best IAS Coaching in Delhi
                        </Link>
                        <Link href="/best-ias-coaching-in-india" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Best IAS Coaching in India
                        </Link>
                        <Link href="/online-upsc-coaching" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Online UPSC Coaching Rankings
                        </Link>
                        <Link href="/blog/why-first-ias-institute-is-the-best-ias-coaching-in-india" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Why FIRST IAS is Best in India
                        </Link>
                        <Link href="/blog/why-first-ias-institute-is-the-best-ias-coaching-in-delhi" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Why FIRST IAS is Best in Delhi
                        </Link>
                        <Link href="/blog/why-first-ias-institute-is-the-best-ias-coaching-in-gurgaon" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Why FIRST IAS is Best in Gurgaon
                        </Link>
                        <Link href="/blog/why-first-ias-institute-is-the-best-online-ias-coaching-institute" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • Why FIRST IAS is Best Online
                        </Link>
                        <Link href="/blog/upsc-cse-2027-strategy-to-crack" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • UPSC CSE 2027 : Strategy to Crack
                        </Link>
                        <Link href="/blog/upsc-cse-2028-strategy-to-crack" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • UPSC CSE 2028 : Strategy to Crack
                        </Link>
                        <Link href="/blog/upsc-cse-2029-strategy-to-crack" style={{ color: '#4338ca', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}>
                          • UPSC CSE 2029 : Strategy to Crack
                        </Link>
                      </>
                    )}
                  </div>
                </div>

                {/* 5. Free Consultation */}
                <div style={{ background: '#eef2ff', padding: '20px', borderRadius: 14, border: '1px solid #c7d2fe', textAlign: 'center' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 800, color: '#312e81', margin: '0 0 6px' }}>
                    Need 1-on-1 Guidance?
                  </h4>
                  <p style={{ margin: '0 0 14px', fontSize: 12.5, color: '#4338ca', lineHeight: 1.5 }}>
                    {isClat
                      ? 'Connect directly with senior faculty at Hauz Khas for a free profile assessment.'
                      : 'Connect directly with senior academic counsellors at Karol Bagh for UPSC strategy.'}
                  </p>
                  <a
                    href={
                      isClat
                        ? 'https://wa.me/919999882858?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20CLAT%20coaching%20at%20Knowledge%20Nation%20Law%20Centre'
                        : 'https://wa.me/919990228268?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20UPSC%20coaching%20at%20First%20IAS%20Institute'
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
