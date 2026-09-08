import React from 'react';
import Link from 'next/link';
import { CITIES_DATA, EXAM_CATEGORIES } from '@/data/coachingData';
import LiveCitySearch from '@/components/LiveCitySearch';
import StateAccordion from '@/components/StateAccordion';
import LeadConsultationForm from '@/components/LeadConsultationForm';
import HeroComparisonSelector from '@/components/HeroComparisonSelector';
import { Icons } from '@/components/Icons';

export default function HomePage() {
  const popularCities = CITIES_DATA.filter((c) => c.isPopular);

  // FAQ Schema for Homepage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes CoachingCompare.in independent from coaching institutes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CoachingCompare.in does not sell rankings, accept sponsored listings, or take commissions to inflate scores. Every institute is benchmarked strictly through our 7-pillar, 100-point inspection protocol covering verified student roll numbers, faculty backgrounds, physical classrooms, and student-teacher ratios.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does CoachingCompare verify past topper selections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We audit advertised ranks against actual classroom admission registers, roll numbers, and official exam results to eliminate fraudulent marketing claims where multiple coachings claim the same topper.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the comparisons and fee estimation tools free for students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All comparison matrices, rank benchmarks, fees & living cost calculators, and academic advisory requests on CoachingCompare.in are 100% free and open for students and parents.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can an institute apply for an official 100-point inspection audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Institute directors and center heads can submit their campus credentials via our /for-institutes portal. Our independent verification team conducts physical visits, student interviews, and documentation reviews before issuing an audit report.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section: Command Center & Instant Matrix */}
      <section className="hero-section">
        <div className="hero-grid-pattern" />
        <div className="hero-radial-glow" />
        <div className="hero-amber-glow" />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '880px', margin: '0 auto 36px', textAlign: 'center' }}>
            <span className="hero-badge">
              <Icons.ShieldCheck size={16} /> ✦ INDEPENDENT ACADEMIC BENCHMARK & 100-PT AUDIT
            </span>

            <h1 className="hero-title">
              Compare Top Coaching Institutes With{' '}
              <span className="hero-title-accent">100-Point Audit Precision</span>
            </h1>

            <p className="hero-subtitle" style={{ margin: '0 auto 28px' }}>
              Cut through commercial marketing and unverified claims. We audit authentic student selections, cross-examine permanent faculty credentials, and physically inspect classrooms across 110+ Indian cities.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '20px' }}>
              <a href="#matrix-finder" className="btn btn-accent" style={{ fontSize: '15px', padding: '13px 26px' }}>
                <Icons.Scales size={18} /> Launch Comparison Matrix
              </a>
              <Link
                href="/fees-calculator"
                className="btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '15px',
                  padding: '13px 24px',
                }}
              >
                <Icons.Calculator size={18} /> Fees & Living Cost Calculator
              </Link>
            </div>
          </div>

          {/* Interactive 2-Step Comparison Matrix Console */}
          <div id="matrix-finder" style={{ maxWidth: '940px', margin: '0 auto 32px' }}>
            <HeroComparisonSelector />
          </div>

          {/* 4-Pillar Live Statistics Strip */}
          <div style={{ maxWidth: '940px', margin: '0 auto' }}>
            <div className="hero-stats-strip">
              <div className="hero-stat-item">
                <div className="hero-stat-value">
                  1,450<span className="stat-accent">+</span>
                </div>
                <div className="hero-stat-label">Audited Academies</div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-value">
                  110<span className="stat-accent">+</span>
                </div>
                <div className="hero-stat-label">Cities & Hubs Evaluated</div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-value">
                  100<span className="stat-accent">%</span>
                </div>
                <div className="hero-stat-label">Non-Sponsored Merit Ranks</div>
              </div>

              <div className="hero-stat-item">
                <div className="hero-stat-value">
                  ₹0
                </div>
                <div className="hero-stat-label">Free Aspirant Advisory</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Competitive Categories Ribbon */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid var(--border-subtle)', padding: '22px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand-primary)' }}>
              Explore Major Exam Categories
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {EXAM_CATEGORIES.map((exam) => (
              <Link
                key={exam.id}
                href={`/best-${exam.slug}-coaching-in-delhi`}
                style={{
                  padding: '8px 18px',
                  background: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease',
                }}
                className="category-pill"
              >
                <span>{exam.badge.split(' ')[0]}</span>
                <span>{exam.shortName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The 7-Pillar Forensic Audit Framework (Replaces generic 4 cloned cards) */}
      <section style={{ padding: '72px 0', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '12px' }}>
              <Icons.ShieldCheck size={14} /> Objective Quality Assurance
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
              The 7-Pillar Forensic Inspection Framework
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We reject commercial sponsorships and paid placements. Every score on CoachingCompare is mathematically earned through our seven objective audit benchmarks:
            </p>
          </div>

          <div className="pillar-framework-grid">
            {/* Pillar 1 */}
            <div className="pillar-card">
              <div className="pillar-card-header">
                <span style={{ fontSize: '28px' }}>📋</span>
                <span className="pillar-weight-badge">20 PTS • WEIGHT</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Roll Number Result Verification
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                We cross-reference advertised ranker names against classroom enrollment logs to eliminate duplicate topper claims across rival institutes.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card">
              <div className="pillar-card-header">
                <span style={{ fontSize: '28px' }}>🎓</span>
                <span className="pillar-weight-badge">20 PTS • WEIGHT</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Permanent Faculty Pedigree
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Auditing teacher qualifications, historical student feedback, average instructor retention tenure, and permanent vs visiting educator ratios.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card">
              <div className="pillar-card-header">
                <span style={{ fontSize: '28px' }}>📚</span>
                <span className="pillar-weight-badge">15 PTS • WEIGHT</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Study Module & Mock Test Rigor
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Physical inspection of curriculum depth, answer key accuracy, alignment with latest exam patterns, and computer-based test simulations.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card">
              <div className="pillar-card-header">
                <span style={{ fontSize: '28px' }}>🙋</span>
                <span className="pillar-weight-badge">15 PTS • WEIGHT</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Doubt Resolution Accessibility
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Evaluating physical doubt counters, daily mentor office hours, and turnaround times for student problem-solving sessions.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="pillar-card">
              <div className="pillar-card-header">
                <span style={{ fontSize: '28px' }}>🏫</span>
                <span className="pillar-weight-badge">10 PTS • WEIGHT</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Campus & CBT Lab Infrastructure
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                On-site verification of acoustic air-conditioned lecture halls, silent reading rooms, biometric attendance, and computer terminal density.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="pillar-card">
              <div className="pillar-card-header">
                <span style={{ fontSize: '28px' }}>👥</span>
                <span className="pillar-weight-badge">10 PTS • WEIGHT</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Batch Size & Student-Teacher Ratio
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Strict audit of classroom capacity. We reward small-batch policies (35–45 students) and penalize overcrowded 200+ seat auditoriums.
              </p>
            </div>

            {/* Pillar 7 (Wide Feature Card) */}
            <div className="pillar-card" style={{ gridColumn: 'span 3', background: '#f8fafc', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ maxWidth: '650px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '22px' }}>⚖️</span>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)' }}>
                      Fee Transparency & Refund Policy Compliance (10 PTS)
                    </h3>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    We verify published fee breakdowns, GST compliance, installment schedules, and fair refund adherence to safeguard parents against hidden admission fees.
                  </p>
                </div>
                <Link href="/methodology" className="btn btn-outline btn-sm">
                  Full 100-Point Audit Manual →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Academic Advisory & Fee Guidance Desk Section */}
      <section style={{ padding: '64px 0', background: 'var(--bg-main)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Explanation */}
            <div>
              <span className="badge badge-blue" style={{ marginBottom: '12px' }}>
                <Icons.Users size={14} /> Unbiased Advisory Desk
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px', lineHeight: '1.25' }}>
                Need Help Choosing the Right Batch & Estimating Living Costs?
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: '1.65', marginBottom: '24px' }}>
                Our academic advisory desk operates independently from coaching centers. We analyze your target exam, current academic level, city preference, and budget to provide a realistic roadmap.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '999px', background: 'var(--brand-emerald-light)', color: 'var(--brand-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Check size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--text-dark)' }}>
                      Strictly Commercial-Free Guidance
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      We never push specific coachings for referral commissions. Recommendations are purely audit-driven.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '999px', background: 'var(--brand-emerald-light)', color: 'var(--brand-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Check size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--text-dark)' }}>
                      Complete Living Cost & Hostel Breakdown
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      Get realistic estimates on PG accommodation, meals, library fees, and test series in major study hubs.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '999px', background: 'var(--brand-emerald-light)', color: 'var(--brand-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Check size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--text-dark)' }}>
                      Scholarship & Discount Alerts
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      Find upcoming weekly admission tests offering up to 90% fee concessions.
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Link href="/fees-calculator" className="btn btn-outline">
                  <Icons.Calculator size={16} /> Try Living Cost Calculator
                </Link>
                <Link href="/write-review" className="btn btn-outline">
                  <Icons.Star size={16} /> Write Student Review
                </Link>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div>
              <LeadConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Live Search & Popular Cities Hub Section */}
      <section id="cities-registry" style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          {/* Live Search Box */}
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
              <Icons.MapPin size={14} /> 110+ Hubs Covered
            </span>
            <h2 style={{ fontSize: '30px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>
              Explore Verified Institutes in Your City
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Type your city or target center to access 100-point inspected rankings, verified faculty, and fee breakdowns.
            </p>
            <LiveCitySearch />
          </div>

          {/* Popular Hubs */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#f59e0b' }}>⭐</span> Key Educational Metros
              </h3>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Audited City Hubs
              </span>
            </div>

            <div className="grid-4">
              {popularCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/coaching-centres-in-${city.slug}`}
                  className="city-card"
                >
                  <span className="city-symbol">{city.symbol}</span>
                  <div>
                    <h4 className="city-name">{city.name}</h4>
                    <p className="city-state">{city.state}</p>
                  </div>
                  <span className="exam-pill">{city.totalExams} Exams</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore State-Wise */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icons.Globe size={18} color="var(--brand-primary)" /> Statewide Coaching Directories
              </h3>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                All 28 Indian States & Union Territories
              </span>
            </div>

            <StateAccordion />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (AEO & SEO) */}
      <section style={{ padding: '64px 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '10px' }}>
              <Icons.ShieldCheck size={14} /> Clear & Direct
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
              Learn more about CoachingCompare&apos;s independent inspection protocols and advisory standards.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                q: 'What makes CoachingCompare.in independent from coaching institutes?',
                a: 'CoachingCompare.in does not sell rankings, accept sponsored listings, or take commissions to inflate scores. Every institute is benchmarked strictly through our 7-pillar, 100-point inspection protocol covering verified student roll numbers, faculty backgrounds, physical classrooms, and student-teacher ratios.',
              },
              {
                q: 'How does CoachingCompare verify past topper selections?',
                a: 'We audit advertised ranks against actual classroom admission registers, roll numbers, and official exam results to eliminate fraudulent marketing claims where multiple coachings claim the same topper.',
              },
              {
                q: 'Are the comparisons and fee estimation tools free for students?',
                a: 'Yes. All comparison matrices, rank benchmarks, fees & living cost calculators, and academic advisory requests on CoachingCompare.in are 100% free and open for students and parents.',
              },
              {
                q: 'How can an institute apply for an official 100-point inspection audit?',
                a: 'Institute directors and center heads can submit their campus credentials via our /for-institutes portal. Our independent verification team conducts physical visits, student interviews, and documentation reviews before issuing an audit report.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="faq-item" open={idx === 0}>
                <summary className="faq-trigger">
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--brand-primary)' }}>▼</span>
                </summary>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
