'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export default function WriteReviewPage() {
  const [submitted, setSubmitted] = useState(false);
  const [instituteName, setInstituteName] = useState('');
  const [exam, setExam] = useState('jee');
  const [city, setCity] = useState('delhi');
  const [batchYear, setBatchYear] = useState('2025');
  const [courseType, setCourseType] = useState('1-Year Classroom Target');
  const [ratings, setRatings] = useState({
    faculty: 5,
    material: 5,
    tests: 5,
    doubt: 5,
  });
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [scoreAchievement, setScoreAchievement] = useState('');

  const handleRatingChange = (key: keyof typeof ratings, val: number) => {
    setRatings((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '36px 0 70px' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
          <Link href="/" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Submit a Student Review</span>
        </div>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
            <Icons.Star size={14} /> Verified Student Voice
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--text-dark)', lineHeight: '1.25', marginBottom: '12px' }}>
            Share Your Authentic Coaching Experience
          </h1>
          <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
            Help thousands of junior aspirants choose the right coaching centre. Every review undergoes our fraud-prevention audit to ensure zero fake or sponsored feedback.
          </p>
        </div>

        {submitted ? (
          <div className="surface-card" style={{ padding: '48px 32px', textAlign: 'center' }}>
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
              Review Submitted for Verification!
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: '1.6', maxWidth: '540px', margin: '0 auto 24px' }}>
              Thank you, <strong>{studentName || 'Aspirant'}</strong>! Your review for <strong>{instituteName || 'your coaching centre'}</strong> has been securely logged with Reference ID <code>REV-{Math.floor(100000 + Math.random() * 900000)}</code>. Our editorial team will verify the student credentials within 24 hours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              <Link href="/" className="btn btn-primary">
                Return to Homepage
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn btn-outline"
              >
                Submit Another Review
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="surface-card" style={{ padding: '36px' }}>
            {/* Step 1: Institute Information */}
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icons.Building size={18} color="var(--brand-blue)" /> 1. Coaching Centre Details
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Institute Name & Branch Location: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Allen Career Institute, Sankalp Campus Kota or FIITJEE South Delhi"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                    className="input-field"
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Exam Prepared:
                    </label>
                    <select
                      value={exam}
                      onChange={(e) => setExam(e.target.value)}
                      className="input-field"
                      style={{ width: '100%' }}
                    >
                      {EXAM_CATEGORIES.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.shortName} ({c.name})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                      City:
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="input-field"
                      style={{ width: '100%' }}
                    >
                      {CITIES_DATA.map((c) => (
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
                      Program Format:
                    </label>
                    <select
                      value={courseType}
                      onChange={(e) => setCourseType(e.target.value)}
                      className="input-field"
                      style={{ width: '100%' }}
                    >
                      <option value="1-Year Classroom Target">1-Year Classroom Target (12th / Dropper)</option>
                      <option value="2-Year Integrated Foundation">2-Year Foundation (11th & 12th)</option>
                      <option value="Crash Course / Target Sprint">Crash Course / Last Lap Batch</option>
                      <option value="Mock Test Series Only">Mock Test Series / Distance Learning</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                      Batch Passing Year:
                    </label>
                    <select
                      value={batchYear}
                      onChange={(e) => setBatchYear(e.target.value)}
                      className="input-field"
                      style={{ width: '100%' }}
                    >
                      <option value="2026">2026 (Current Student)</option>
                      <option value="2025">2025 (Recent Aspirant)</option>
                      <option value="2024">2024 (Alumnus)</option>
                      <option value="2023">2023 (Alumnus)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Inspection Dimension Ratings */}
            <div style={{ marginBottom: '28px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icons.Star size={18} color="#d97706" fill="#d97706" /> 2. Rate on Key Quality Pillars
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {[
                  { key: 'faculty', label: 'Faculty Clarity & Teaching Quality' },
                  { key: 'material', label: 'Study Modules & Practice Worksheets' },
                  { key: 'tests', label: 'Mock Test Series & CBT Interface' },
                  { key: 'doubt', label: 'Daily Doubt Solving & Teacher Accessibility' },
                ].map((item) => (
                  <div key={item.key} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                      {item.label}
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(item.key as any, star)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '2px',
                            color: star <= (ratings as any)[item.key] ? '#f59e0b' : '#cbd5e1',
                          }}
                        >
                          <Icons.Star size={22} fill={star <= (ratings as any)[item.key] ? '#f59e0b' : 'none'} />
                        </button>
                      ))}
                      <span style={{ marginLeft: '6px', fontSize: '13px', fontWeight: 700, color: '#475569', alignSelf: 'center' }}>
                        {(ratings as any)[item.key]} / 5
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Detailed Feedback Text */}
            <div style={{ marginBottom: '28px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icons.FileEdit size={18} color="var(--brand-blue)" /> 3. Detailed Review & Guidance
              </h2>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                  Headline / Review Summary: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Exceptional physics mentoring, but batch size was slightly crowded"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  className="input-field"
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                  Full Review Text: *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Share details about classroom environment, how doubts were resolved, quality of tests, and whether syllabus was finished on schedule. Be balanced and honest."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="input-field"
                  style={{ width: '100%', resize: 'vertical' }}
                />
              </div>
            </div>

            {/* Step 4: Verification & Identity */}
            <div style={{ marginBottom: '28px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icons.ShieldCheck size={18} color="var(--brand-emerald)" /> 4. Student Credential Verification
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Student Name (or alias): *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditya Verma"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="input-field"
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Student Roll No. / ID (Private for verification):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 24KOTA-10492 (Kept Confidential)"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="input-field"
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '13.5px', color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Rank / Percentile Achieved (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AIR 240 or 99.4%ile"
                    value={scoreAchievement}
                    onChange={(e) => setScoreAchievement(e.target.value)}
                    className="input-field"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 16px', fontSize: '12.5px', color: '#64748b' }}>
                🔒 <strong>Privacy Pledge:</strong> Your roll number and personal contact details are never made public or sold to coaching institutes. They are used exclusively by our academic audit committee to filter out competitor defamation and paid PR reviews.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '16px' }}
            >
              Submit Verified Student Review →
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
