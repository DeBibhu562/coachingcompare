import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getInstituteBySlug,
  getAllInstituteSlugs,
  getListingsForCategoryAndCity,
  EXAM_CATEGORIES,
  CITIES_DATA,
} from '@/data/coachingData';
import { Icons } from '@/components/Icons';
import LeadConsultationForm from '@/components/LeadConsultationForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllInstituteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const institute = getInstituteBySlug(slug);

  if (!institute) {
    return { title: 'Institute Profile Not Found | CoachingCompare.in' };
  }

  const title = `${institute.name} - 100-Point Audit Score, Fees, Batches & Reviews 2026`;
  const description = `Read the verified 100-point inspection audit of ${institute.name} in ${institute.cityName}. Details on faculty credentials, fee structures, batch sizes, scholarship tests, and student reviews.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/institute/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://coachingcompare.in/institute/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function InstituteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const institute = getInstituteBySlug(slug);

  if (!institute) {
    notFound();
  }

  const exam = EXAM_CATEGORIES.find((e) => e.slug === institute.examSlug) || EXAM_CATEGORIES[0];
  const city = CITIES_DATA.find((c) => c.slug === institute.city) || CITIES_DATA[0];

  // Related institutes in same city and exam
  const relatedListings = getListingsForCategoryAndCity(institute.examSlug, institute.city)
    .filter((i) => i.slug !== institute.slug)
    .slice(0, 3);

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `https://coachingcompare.in/institute/${institute.slug}#organization`,
        name: institute.name,
        description: institute.description,
        url: institute.contact.website,
        telephone: institute.contact.phone,
        email: institute.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: institute.contact.address,
          addressLocality: institute.cityName,
          addressRegion: institute.state,
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: institute.rating,
          reviewCount: institute.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://coachingcompare.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${institute.cityName} Coaching`,
            item: `https://coachingcompare.in/coaching-centres-in-${institute.city}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${exam.shortName} in ${institute.cityName}`,
            item: `https://coachingcompare.in/best-${institute.examSlug}-coaching-in-${institute.city}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: institute.name,
            item: `https://coachingcompare.in/institute/${institute.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '70px' }}>
        {/* Top Breadcrumbs */}
        <div style={{ background: 'white', borderBottom: '1px solid var(--border-color)', padding: '12px 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
            <Link href="/" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href={`/coaching-centres-in-${institute.city}`} style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>
              {institute.cityName} Coaching
            </Link>
            <span>/</span>
            <Link href={`/best-${institute.examSlug}-coaching-in-${institute.city}`} style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>
              Best {exam.shortName} in {institute.cityName}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>{institute.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ background: 'white', borderBottom: '1px solid var(--border-color)', padding: '36px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}>
              <div style={{ flex: '1 1 650px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span className="badge badge-blue" style={{ fontSize: '12.5px', padding: '5px 12px' }}>
                    Rank #{institute.rank} in {institute.cityName} ({exam.shortName})
                  </span>
                  <span className="badge badge-gold" style={{ fontSize: '12.5px', padding: '5px 12px' }}>
                    <Icons.Star size={14} /> {institute.rating} / 5.0 ({institute.reviewCount} Verified Reviews)
                  </span>
                  <span className="badge badge-emerald" style={{ fontSize: '12.5px', padding: '5px 12px' }}>
                    <Icons.ShieldCheck size={14} /> 100-Point Audit Verified
                  </span>
                </div>

                <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', lineHeight: '1.25', marginBottom: '12px' }}>
                  {institute.name}
                </h1>

                <p style={{ fontSize: '15.5px', lineHeight: '1.6', color: 'var(--text-body)', marginBottom: '20px' }}>
                  {institute.description}
                </p>

                {/* Badges / Metrics Row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Established</div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)' }}>Year {institute.estYear}</div>
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Batch Size</div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)' }}>{institute.batchSize}</div>
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Annual Fee Estimate</div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--brand-emerald)' }}>{institute.feesEstimate}</div>
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 16px' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Primary Center</div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)' }}>{institute.contact.locality}</div>
                  </div>
                </div>
              </div>

              {/* Inspection Score Gauge Card */}
              <div
                style={{
                  background: 'linear-gradient(145deg, #0f172a, #1e293b)',
                  color: 'white',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  minWidth: '240px',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.3)',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>
                  Independent Audit
                </div>
                <div style={{ fontSize: '46px', fontWeight: 900, color: '#38bdf8', lineHeight: '1' }}>
                  {institute.inspectionScore}
                  <span style={{ fontSize: '18px', color: '#94a3b8', fontWeight: 600 }}>/100</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginTop: '6px' }}>
                  Grade: A+ Elite Standard
                </div>
                <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '12px', borderTop: '1px solid #334155', paddingTop: '10px' }}>
                  Zero Paid Placements • Audited on 7 Pillars
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="container" style={{ marginTop: '36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 360px', gap: '32px' }} className="institute-layout-grid">
            {/* Left Column: Deep Audit Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              
              {/* Section 1: 100-Point Inspection Scorecard */}
              <section className="surface-card" style={{ padding: '30px' }} id="inspection-breakdown">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Icons.ShieldCheck size={24} color="var(--brand-blue)" />
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
                    100-Point Inspection Audit Breakdown
                  </h2>
                </div>
                <p style={{ fontSize: '14.5px', color: 'var(--text-body)', marginBottom: '24px' }}>
                  Our academic research team evaluated {institute.name} across the 7 mandatory quality benchmarks. Here is the verified score sheet:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
                  {/* Faculty */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>1. Faculty Pedigree & Experience</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.faculty}/20</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.faculty / 20) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Audited for subject qualifications, average mentor tenure (8+ yrs), and full-time faculty ratio.
                    </div>
                  </div>

                  {/* Results */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>2. Past Results & AIR Authenticity</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.results}/20</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.results / 20) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Cross-referenced student admit cards and selection lists to ensure zero duplicate claims.
                    </div>
                  </div>

                  {/* Study Material */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>3. Study Material Depth & Quality</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.studyMaterial}/15</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.studyMaterial / 15) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Evaluated for syllabus updates, conceptual illustrations, and graded practice problem sets.
                    </div>
                  </div>

                  {/* Test Series */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>4. Test Series & Analytics Engine</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.testSeries}/15</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.testSeries / 15) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Computer-based testing simulation, national ranking benchmarks, and chapter-wise error logs.
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>5. Campus Infrastructure & Tech</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.infrastructure}/10</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.infrastructure / 10) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Acoustic AC classrooms, digital smart boards, reading rooms, and ergonomic seating.
                    </div>
                  </div>

                  {/* Batch Size */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>6. Batch Size & Mentor Ratio</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.batchSizeRatio}/10</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.batchSizeRatio / 10) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Enforced batch caps ({institute.batchSize}) allowing mentors to track student progress individually.
                    </div>
                  </div>

                  {/* Doubt Support */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>7. Daily Doubt Resolution Desk</span>
                      <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '15px' }}>{institute.scoreBreakdown.doubtSupport}/10</span>
                    </div>
                    <div className="score-bar-bg" style={{ height: '7px' }}>
                      <div className="score-bar-fill" style={{ width: `${(institute.scoreBreakdown.doubtSupport / 10) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>
                      Dedicated physical doubt counters and digital app response within 24 hours.
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '16px 20px' }}>
                  <div style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '14.5px', marginBottom: '6px' }}>
                    Auditor Summary & Recommendations:
                  </div>
                  <p style={{ fontSize: '14px', color: '#1e40af', lineHeight: '1.55', margin: 0 }}>
                    {institute.name} maintains an exceptional track record in {institute.cityName}. Their structured syllabus coverage and rigorous mock analysis place them among the elite coaching centres for {exam.name}. Best suited for aspirants seeking rigorous academic discipline and personalized error analysis.
                  </p>
                </div>
              </section>

              {/* Section 2: Course Offerings & Fee Matrix */}
              <section className="surface-card" style={{ padding: '30px' }} id="courses-fees">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Icons.Calculator size={22} color="var(--brand-blue)" />
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
                    Courses Offered & Fee Structure
                  </h2>
                </div>
                <p style={{ fontSize: '14.5px', color: 'var(--text-body)', marginBottom: '20px' }}>
                  Below are the verified course options, eligibility categories, and estimated fee schedules for upcoming academic sessions:
                </p>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                        <th style={{ padding: '12px 14px', color: '#475569', fontWeight: 700 }}>Program Name</th>
                        <th style={{ padding: '12px 14px', color: '#475569', fontWeight: 700 }}>Target Group</th>
                        <th style={{ padding: '12px 14px', color: '#475569', fontWeight: 700 }}>Duration</th>
                        <th style={{ padding: '12px 14px', color: '#475569', fontWeight: 700 }}>Fee Estimate</th>
                        <th style={{ padding: '12px 14px', color: '#475569', fontWeight: 700 }}>Mode</th>
                      </tr>
                    </thead>
                    <tbody>
                      {institute.courseOfferings?.map((course, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '14px', fontWeight: 700, color: 'var(--text-dark)' }}>{course.name}</td>
                          <td style={{ padding: '14px', color: 'var(--text-body)' }}>{course.targetGroup}</td>
                          <td style={{ padding: '14px', color: '#64748b' }}>{course.duration}</td>
                          <td style={{ padding: '14px', fontWeight: 700, color: 'var(--brand-emerald)' }}>{course.fee}</td>
                          <td style={{ padding: '14px' }}>
                            <span className="badge badge-blue" style={{ fontSize: '12px' }}>{course.mode}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Scholarship Test Alert Banner */}
                {institute.scholarshipInfo && (
                  <div style={{ marginTop: '24px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '1px solid #f59e0b', borderRadius: '12px', padding: '18px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <Icons.Star size={18} color="#b45309" fill="#b45309" />
                      <span style={{ fontWeight: 800, color: '#92400e', fontSize: '15.5px' }}>
                        Scholarship & Admission Assessment: {institute.scholarshipInfo.testName}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#78350f', marginBottom: '10px' }}>
                      Aspirants can avail <strong>{institute.scholarshipInfo.maxScholarship}</strong> based on performance in their weekly admission test.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#92400e', fontWeight: 600 }}>
                      <span>Eligibility: {institute.scholarshipInfo.eligibility}</span>
                      <span>•</span>
                      <span>Exam Schedule: {institute.scholarshipInfo.testDates}</span>
                    </div>
                  </div>
                )}
              </section>

              {/* Section 3: Verified Faculty Mentors */}
              <section className="surface-card" style={{ padding: '30px' }} id="faculty">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Icons.GraduationCap size={22} color="var(--brand-blue)" />
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
                    Verified Faculty Credentials
                  </h2>
                </div>
                <p style={{ fontSize: '14.5px', color: 'var(--text-body)', marginBottom: '20px' }}>
                  Our academic audit verifies that all senior faculties have extensive track records of producing top rankers:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  {institute.facultyRoster?.map((faculty, idx) => (
                    <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-blue-light)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                        <Icons.Users size={20} />
                      </div>
                      <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-dark)', marginBottom: '4px' }}>
                        {faculty.name}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--brand-blue)', fontWeight: 600, marginBottom: '6px' }}>
                        {faculty.designation}
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '4px' }}>
                        Credentials: {faculty.qualification}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--brand-emerald)', fontWeight: 700 }}>
                        ✓ {faculty.experience}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Campus Facilities */}
              <section className="surface-card" style={{ padding: '30px' }} id="facilities">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Icons.Building size={22} color="var(--brand-blue)" />
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)' }}>
                    Campus Facilities & Amenities Checklist
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginTop: '16px' }}>
                  {institute.facilities?.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-dark)' }}>
                      <span style={{ color: 'var(--brand-emerald)', flexShrink: 0, marginTop: '2px' }}>
                        <Icons.Check size={18} />
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Student Reviews & Testimonials */}
              <section className="surface-card" style={{ padding: '30px' }} id="reviews">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                      Verified Student Reviews ({institute.reviewCount})
                    </h2>
                    <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                      Overall student satisfaction rating: <strong>{institute.rating} / 5.0</strong>
                    </div>
                  </div>

                  <Link href={`/write-review?institute=${institute.slug}`} className="btn btn-outline btn-sm">
                    <Icons.FileEdit size={14} /> Submit a Student Review
                  </Link>
                </div>

                {/* Testimonial Spotlight */}
                {institute.testimonial && (
                  <div className="quote-box" style={{ margin: '20px 0' }}>
                    &quot;{institute.testimonial.quote}&quot;
                    <div style={{ fontStyle: 'normal', fontWeight: 700, marginTop: '8px', fontSize: '13.5px', color: '#92400e' }}>
                      — {institute.testimonial.studentName} ({institute.testimonial.achievement})
                    </div>
                  </div>
                )}
              </section>

            </div>

            {/* Right Column: Contact & Lead Capture Sidebar */}
            <div>
              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Lead Form */}
                <LeadConsultationForm
                  examName={exam.shortName}
                  cityName={institute.cityName}
                  instituteName={institute.name}
                />

                {/* Official Contact Box */}
                <div className="surface-card" style={{ padding: '24px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
                    Centre Details & Directions
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }}><Icons.MapPin size={18} /></span>
                      <div>
                        <div style={{ color: 'var(--text-dark)', fontWeight: 600, lineHeight: '1.4' }}>{institute.contact.address}</div>
                        <a
                          href={institute.contact.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '12px', color: 'var(--brand-blue)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}
                        >
                          Open in Google Maps <Icons.ExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--brand-blue)', flexShrink: 0 }}><Icons.Phone size={18} /></span>
                      <a href={`tel:${institute.contact.phone}`} style={{ color: 'var(--text-dark)', fontWeight: 600, textDecoration: 'none' }}>
                        {institute.contact.phone}
                      </a>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--brand-blue)', flexShrink: 0 }}><Icons.Mail size={18} /></span>
                      <a href={`mailto:${institute.contact.email}`} style={{ color: 'var(--text-body)', wordBreak: 'break-all', textDecoration: 'none' }}>
                        {institute.contact.email}
                      </a>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--brand-blue)', flexShrink: 0 }}><Icons.Globe size={18} /></span>
                      <a href={institute.contact.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-blue)', fontWeight: 600, textDecoration: 'none' }}>
                        Official Website <Icons.ExternalLink size={12} />
                      </a>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--brand-blue)', flexShrink: 0 }}><Icons.Clock size={18} /></span>
                      <span style={{ color: '#64748b', fontSize: '12.5px' }}>{institute.contact.timing}</span>
                    </div>
                  </div>
                </div>

                {/* Audit Integrity Pledge */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Icons.ShieldCheck size={18} color="var(--brand-emerald)" />
                    <span style={{ fontWeight: 800, fontSize: '13.5px', color: 'var(--text-dark)' }}>
                      Independence Pledge
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                    CoachingCompare.in maintains complete editorial independence. No coaching institute can purchase a higher rank or alter inspection scores.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Related Institutes in Same City */}
          {relatedListings.length > 0 && (
            <div style={{ marginTop: '60px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
                Other Top-Rated {exam.shortName} Coaching in {institute.cityName}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {relatedListings.map((rel) => (
                  <div key={rel.id} className="surface-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span className="badge badge-blue">Rank #{rel.rank}</span>
                        <span style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '14px' }}>
                          Score: {rel.inspectionScore}/100
                        </span>
                      </div>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                        {rel.name}
                      </h3>
                      <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.5', marginBottom: '14px' }}>
                        {rel.description.slice(0, 120)}...
                      </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand-emerald)' }}>
                        {rel.feesEstimate.split('/')[0]}
                      </span>
                      <Link href={`/institute/${rel.slug}`} className="btn btn-outline btn-sm">
                        View Audit →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom City & Exam Navigation links */}
          <div style={{ marginTop: '50px', background: 'white', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
              Explore {exam.shortName} Coaching Across India
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CITIES_DATA.slice(0, 12).map((c) => (
                <Link
                  key={c.slug}
                  href={`/best-${institute.examSlug}-coaching-in-${c.slug}`}
                  className="badge"
                  style={{ background: '#f1f5f9', color: '#334155', textDecoration: 'none', padding: '6px 12px' }}
                >
                  {exam.shortName} Coaching in {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
