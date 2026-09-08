'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export default function FeesCalculatorPage() {
  const [selectedExam, setSelectedExam] = useState('jee');
  const [selectedCity, setSelectedCity] = useState('kota');
  const [studyMode, setStudyMode] = useState<'classroom' | 'hybrid' | 'online'>('classroom');
  const [accommodation, setAccommodation] = useState<'home' | 'pg' | 'hostel'>('hostel');
  const [duration, setDuration] = useState<1 | 2>(1);

  // Exam fee baseline
  const getTuitionBase = () => {
    switch (selectedExam) {
      case 'upsc': return 165000;
      case 'jee': return 145000;
      case 'neet': return 140000;
      case 'clat': return 105000;
      case 'cat': return 75000;
      case 'gate': return 65000;
      case 'nda': return 55000;
      case 'ssc': return 42000;
      case 'banking': return 35000;
      default: return 60000;
    }
  };

  // City living cost multiplier
  const getCityFactor = () => {
    switch (selectedCity) {
      case 'delhi':
      case 'mumbai':
        return 1.35;
      case 'bangalore':
      case 'hyderabad':
      case 'pune':
        return 1.2;
      case 'kota':
        return 1.1; // Kota has massive student infrastructure, moderate food/room
      case 'chennai':
      case 'kolkata':
      case 'ahmedabad':
        return 1.05;
      default:
        return 0.95;
    }
  };

  // Mode multiplier
  const getModeFactor = () => {
    switch (studyMode) {
      case 'classroom': return 1.0;
      case 'hybrid': return 0.75;
      case 'online': return 0.45;
    }
  };

  const annualTuition = Math.round(getTuitionBase() * getModeFactor());
  const studyMaterialCost = studyMode === 'online' ? 6000 : 14000;
  const testSeriesCost = 12000;

  // Monthly accommodation & food
  const getMonthlyLiving = () => {
    if (accommodation === 'home') return 2500; // Local commute & snacks
    if (accommodation === 'pg') return Math.round(9500 * getCityFactor());
    return Math.round(14500 * getCityFactor()); // Full hostel with 3 meals & AC
  };

  const monthlyLiving = getMonthlyLiving();
  const annualLiving = monthlyLiving * (duration === 1 ? 11 : 22);

  const totalFirstYear = annualTuition + studyMaterialCost + testSeriesCost + (monthlyLiving * 11);
  const grandTotal = duration === 1 ? totalFirstYear : Math.round(totalFirstYear * 1.85); // 2nd year renewal discount

  const examObj = EXAM_CATEGORIES.find((e) => e.slug === selectedExam) || EXAM_CATEGORIES[0];
  const cityObj = CITIES_DATA.find((c) => c.slug === selectedCity) || CITIES_DATA[0];

  const formatRupees = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '36px 0 70px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
          <Link href="/" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Coaching Fee & Living Expense Calculator</span>
        </div>

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <Icons.Calculator size={14} /> 2026 Interactive Budget Planner
          </span>
          <h1 style={{ fontSize: '34px', fontWeight: 900, color: 'var(--text-dark)', lineHeight: '1.25', marginBottom: '14px' }}>
            Coaching Fees & Student Living Cost Calculator
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: '1.6' }}>
            Estimate your realistic total expenditure across India’s top coaching hubs. Calculate tuition, hostel, PG rent, meals, and test series before making any enrollment commitment.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '32px' }} className="institute-layout-grid">
          {/* Controls Column */}
          <div className="surface-card" style={{ padding: '30px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px' }}>
              1. Select Preparation Parameters
            </h2>

            {/* Parameter 1: Exam */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Target Competitive Exam:
              </label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="input-field"
                style={{ width: '100%', fontSize: '15px' }}
              >
                {EXAM_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name} ({cat.fullName})
                  </option>
                ))}
              </select>
            </div>

            {/* Parameter 2: City */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Preferred Education Hub / City:
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="input-field"
                style={{ width: '100%', fontSize: '15px' }}
              >
                {CITIES_DATA.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}, {c.state} {c.isPopular ? '⭐' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Parameter 3: Study Mode */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Delivery Format / Learning Mode:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'classroom', title: 'Classroom', desc: 'Full Offline' },
                  { id: 'hybrid', title: 'Hybrid', desc: 'Weekend & LMS' },
                  { id: 'online', title: 'Online Live', desc: 'App-Based' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setStudyMode(mode.id as any)}
                    style={{
                      padding: '12px 8px',
                      borderRadius: '8px',
                      border: studyMode === mode.id ? '2px solid var(--brand-blue)' : '1px solid #e2e8f0',
                      background: studyMode === mode.id ? 'var(--brand-blue-light)' : 'white',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '14px', color: studyMode === mode.id ? 'var(--brand-blue)' : 'var(--text-dark)' }}>
                      {mode.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{mode.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 4: Accommodation */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Living & Accommodation Plan:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'home', title: 'Local Resident', desc: 'Live at Home' },
                  { id: 'pg', title: 'Shared PG', desc: 'Double/Triple Room' },
                  { id: 'hostel', title: 'Hostel + Mess', desc: 'Single / AC + Food' },
                ].map((acc) => (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => setAccommodation(acc.id as any)}
                    style={{
                      padding: '12px 8px',
                      borderRadius: '8px',
                      border: accommodation === acc.id ? '2px solid var(--brand-blue)' : '1px solid #e2e8f0',
                      background: accommodation === acc.id ? 'var(--brand-blue-light)' : 'white',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '14px', color: accommodation === acc.id ? 'var(--brand-blue)' : 'var(--text-dark)' }}>
                      {acc.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{acc.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 5: Duration */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                Program Duration:
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { val: 1, label: '1 Year Target / Dropper Program' },
                  { val: 2, label: '2 Year Foundation Course (Class 11 & 12)' },
                ].map((d) => (
                  <button
                    key={d.val}
                    type="button"
                    onClick={() => setDuration(d.val as any)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: '8px',
                      border: duration === d.val ? '2px solid var(--brand-blue)' : '1px solid #e2e8f0',
                      background: duration === d.val ? 'var(--brand-blue-light)' : 'white',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: duration === d.val ? 'var(--brand-blue)' : 'var(--text-dark)',
                    }}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              className="surface-card"
              style={{
                padding: '28px',
                background: 'linear-gradient(145deg, #ffffff, #f0fdf4)',
                border: '1px solid #bbf7d0',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#15803d', marginBottom: '4px' }}>
                Projected Total Investment ({duration} Year Plan)
              </div>

              <div style={{ fontSize: '42px', fontWeight: 900, color: 'var(--brand-emerald)', lineHeight: '1.2' }}>
                {formatRupees(grandTotal)}
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
                Estimated total outlay for {examObj.shortName} preparation in {cityObj.name}
              </div>

              {/* Itemized Breakdown Table */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-body)' }}>Coaching Tuition Fee:</span>
                  <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{formatRupees(annualTuition * duration)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-body)' }}>Printed Books & Modules:</span>
                  <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{formatRupees(studyMaterialCost * duration)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-body)' }}>All-India Test Series (CBT):</span>
                  <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{formatRupees(testSeriesCost * duration)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-body)' }}>Hostel / PG & Food ({accommodation === 'home' ? 'Local Commute' : `${duration === 1 ? '11' : '22'} Months`}):</span>
                  <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>{formatRupees(annualLiving)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed #cbd5e1', paddingTop: '12px', fontSize: '16px' }}>
                  <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>Grand Total Estimate:</span>
                  <span style={{ fontWeight: 900, color: 'var(--brand-blue)' }}>{formatRupees(grandTotal)}</span>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '24px' }}>
                <Link
                  href={`/best-${selectedExam}-coaching-in-${selectedCity}`}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '12px' }}
                >
                  Compare Top {examObj.shortName} Coaching in {cityObj.name} →
                </Link>
              </div>
            </div>

            {/* Smart Cost-Saving Tips */}
            <div className="surface-card" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Icons.Star size={18} color="#d97706" fill="#d97706" />
                <h3 style={{ fontSize: '15.5px', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                  Proven Ways to Save 25% - 40% on Fees:
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-body)', padding: 0 }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--brand-emerald)', fontWeight: 800 }}>✓</span>
                  <span><strong>Scholarship Tests:</strong> Almost every top institute conducts talent search tests (e.g. TALLENTEX, ANTHE, ResoNET) offering up to 90% tuition waivers.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--brand-emerald)', fontWeight: 800 }}>✓</span>
                  <span><strong>Early Bird Batches:</strong> Registering before May yields up to ₹15,000 concession over peak July admissions.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--brand-emerald)', fontWeight: 800 }}>✓</span>
                  <span><strong>Shared Accommodations:</strong> Double sharing PGs in areas 1-2 km from the coaching hub save ₹4,000 - ₹6,000 monthly over premium single rooms.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px', textAlign: 'center' }}>
            Frequently Asked Questions on Coaching Expenses
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px' }}>
            <div className="surface-card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Do coaching institutes allow fee payment in installments?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.55', margin: 0 }}>
                Yes, virtually all verified institutes offer 2 to 4 zero-cost installment tranches. Many also partner with education financing companies for monthly EMI options.
              </p>
            </div>

            <div className="surface-card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                What is the typical refund policy if a student leaves early?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.55', margin: 0 }}>
                Under consumer protection guidelines, institutes must provide prorated refunds if students withdraw within 15 to 30 days of batch commencement, minus registration charges.
              </p>
            </div>

            <div className="surface-card" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Is hostel accommodation included in the coaching fee?
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.55', margin: 0 }}>
                No. Coaching fees only cover classroom instruction, study material, and test series. Residential hostels and meals are billed separately by private hostel vendors or campus partner residences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
