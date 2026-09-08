'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export default function ForInstitutesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [instituteName, setInstituteName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [designation, setDesignation] = useState('Center Director');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('delhi');
  const [primaryExam, setPrimaryExam] = useState('jee');
  const [website, setWebsite] = useState('');
  const [estYear, setEstYear] = useState('2015');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '36px 0 70px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
          <Link href="/" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>For Coaching Institutes</span>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 40px' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '12px' }}>
            <Icons.Building size={14} /> Official Institute Registration Portal
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: 900, color: 'var(--text-dark)', lineHeight: '1.25', marginBottom: '16px' }}>
            Get Your Coaching Centre Inspected & Verified
          </h1>
          <p style={{ fontSize: '16.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
            Join India’s most trusted, non-sponsored coaching evaluation network. Request a complimentary 100-Point Inspection Audit, claim your institute profile, and showcase your verified rank conversions to over 100,000 monthly student researchers.
          </p>
        </div>

        {/* 4 Trust Pillars for Institutes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '44px' }}>
          <div className="surface-card" style={{ padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-blue-light)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Icons.ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
              Zero Paid Placements
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.5', margin: 0 }}>
              Audit scores are 100% merit-driven based on faculty credentials, results, and student doubt resolution. No agency can buy a top rank.
            </p>
          </div>

          <div className="surface-card" style={{ padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-emerald-light)', color: 'var(--brand-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Icons.Users size={24} />
            </div>
            <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
              High-Intent Inquiries
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.5', margin: 0 }}>
              Receive direct admission inquiries and consultation calls from serious students and parents actively comparing course options in your city.
            </p>
          </div>

          <div className="surface-card" style={{ padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--bg-amber-light)', color: 'var(--brand-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Icons.Trophy size={24} />
            </div>
            <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
              Audit Seal of Quality
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.5', margin: 0 }}>
              Earn the verified 100-Point Inspection Badge to embed on your official website, brochures, and center reception entrance.
            </p>
          </div>

          <div className="surface-card" style={{ padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#f1f5f9', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Icons.FileEdit size={24} />
            </div>
            <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
              Accurate Profile Data
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.5', margin: 0 }}>
              Keep your latest course schedules, scholarship test dates, and branch address coordinates 100% updated and verified.
            </p>
          </div>
        </div>

        {/* Form and Process Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '32px' }} className="institute-layout-grid">
          {/* Audit Request Form */}
          <div className="surface-card" style={{ padding: '32px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--brand-emerald-light)',
                    color: 'var(--brand-emerald)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <Icons.Check size={36} />
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
                  Inspection Audit Request Received!
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
                  Thank you, <strong>{contactPerson}</strong>! Your application for <strong>{instituteName}</strong> has been assigned to our Academic Verification Committee (Ticket #<code>AUD-{Math.floor(10000 + Math.random() * 90000)}</code>). An auditor will contact you within 2 business days to schedule the data validation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                >
                  Submit Another Branch / Institute
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Request Institute Audit & Profile Listing
                </h2>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
                  Please provide your institute’s official credentials. All details are kept strictly confidential until verification.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Institute Brand / Legal Entity Name: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex IIT-JEE & Medical Academy"
                      value={instituteName}
                      onChange={(e) => setInstituteName(e.target.value)}
                      className="input-field"
                      style={{ width: '100%' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Contact Person Name: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Prof. R. K. Sharma"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Official Role / Designation: *
                      </label>
                      <select
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      >
                        <option value="Founder / Managing Director">Founder / Managing Director</option>
                        <option value="Center Head / Branch Director">Center Head / Branch Director</option>
                        <option value="Dean / Head of Academics">Dean / Head of Academics</option>
                        <option value="Head of Admissions & Marketing">Head of Admissions & Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Official Mobile / Direct Phone: *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Official Institutional Email: *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="director@institute.ac.in"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        City of Center: *
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      >
                        {CITIES_DATA.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.name}, {c.state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Primary Competitive Exam: *
                      </label>
                      <select
                        value={primaryExam}
                        onChange={(e) => setPrimaryExam(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      >
                        {EXAM_CATEGORIES.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Website Portal URL:
                      </label>
                      <input
                        type="url"
                        placeholder="https://institute.ac.in"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                        Year Established:
                      </label>
                      <input
                        type="number"
                        placeholder="2012"
                        value={estYear}
                        onChange={(e) => setEstYear(e.target.value)}
                        className="input-field"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Additional Notes / Result Highlights:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention recent top ranks produced, specialized scholarship programs, or specific centers you want to include in the audit."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field"
                      style={{ width: '100%', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ justifyContent: 'center', padding: '14px', fontSize: '15.5px' }}
                  >
                    Submit Institute for 100-Point Audit →
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Audit Process Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="surface-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                How the 4-Stage Inspection Works
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--brand-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>
                      Dossier Submission
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      Center heads submit faculty qualification sheets, current batch fee schedules, and student admit cards for recent top rankers.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--brand-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>
                      Result & Faculty Cross-Verification
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      Our team cross-references rank lists against public exam roll numbers to eliminate duplicate student claims.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--brand-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>
                      Student Experience Audit
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      Anonymous student surveys evaluate daily doubt counter responsiveness, batch crowding, and test series reliability.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--brand-emerald)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    ✓
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>
                      Publication of Audit Card
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.5' }}>
                      The final 100-point inspection scorecard goes live on CoachingCompare.in with official contact details and verified badge.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Desk */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                Need Help or Have Questions?
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', marginBottom: '12px' }}>
                Reach our Institutional Liaison Desk directly via email or call during business hours:
              </p>
              <div style={{ fontSize: '13.5px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <a href="mailto:institutes@coachingcompare.in" style={{ color: 'var(--brand-blue)', fontWeight: 600, textDecoration: 'none' }}>
                  📧 institutes@coachingcompare.in
                </a>
                <a href="tel:+911145678900" style={{ color: 'var(--text-dark)', fontWeight: 600, textDecoration: 'none' }}>
                  📞 +91-11-4567-8900 (Mon-Sat, 10am - 6pm)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
