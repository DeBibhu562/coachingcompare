'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from './Icons';

export default function HeroComparisonSelector() {
  const router = useRouter();
  const [selectedExam, setSelectedExam] = useState('upsc');
  const [selectedCity, setSelectedCity] = useState('noida');

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedExam && selectedCity) {
      router.push(`/best-${selectedExam}-coaching-in-${selectedCity}`);
    }
  };

  return (
    <div className="hero-matrix-box">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#34d399', display: 'flex' }}>
            <Icons.Scales size={18} />
          </span>
          <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#cbd5e1' }}>
            Instant 2-Step Comparison Matrix
          </span>
        </div>
        <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>
          Live 2026 Database
        </span>
      </div>

      <form onSubmit={handleCompare} className="hero-matrix-grid">
        {/* Step 1: Select Exam */}
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8', marginBottom: '6px' }}>
            1. Target Competitive Exam
          </label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="matrix-select"
            aria-label="Select Target Exam"
          >
            {EXAM_CATEGORIES.map((exam) => (
              <option key={exam.id} value={exam.slug}>
                {exam.shortName} — {exam.name}
              </option>
            ))}
          </select>
        </div>

        {/* Step 2: Select City */}
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8', marginBottom: '6px' }}>
            2. Study Location / City
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="matrix-select"
            aria-label="Select City"
          >
            {CITIES_DATA.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name} ({city.state})
              </option>
            ))}
          </select>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            type="submit"
            className="btn btn-accent"
            style={{
              width: '100%',
              padding: '13px 22px',
              fontSize: '14.5px',
              cursor: 'pointer',
            }}
          >
            <span>Launch Benchmark</span>
            <Icons.ChevronRight size={16} />
          </button>
        </div>
      </form>

      {/* Fast Shortcuts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '12px', color: '#94a3b8' }}>
        <span style={{ fontWeight: 700, color: '#e2e8f0' }}>Top Benchmarks:</span>
        <button
          type="button"
          onClick={() => router.push('/best-upsc-coaching-in-noida')}
          style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '999px', padding: '3px 10px', fontSize: '11.5px', cursor: 'pointer' }}
        >
          UPSC Noida (#1 First IAS)
        </button>
        <button
          type="button"
          onClick={() => router.push('/best-clat-coaching-in-noida')}
          style={{ color: '#34d399', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.25)', borderRadius: '999px', padding: '3px 10px', fontSize: '11.5px', cursor: 'pointer' }}
        >
          CLAT Noida (#1 Knowledge Nation)
        </button>
        <button
          type="button"
          onClick={() => router.push('/best-upsc-coaching-in-delhi')}
          style={{ color: '#a5b4fc', background: 'rgba(165, 180, 252, 0.1)', border: '1px solid rgba(165, 180, 252, 0.25)', borderRadius: '999px', padding: '3px 10px', fontSize: '11.5px', cursor: 'pointer' }}
        >
          UPSC Delhi
        </button>
        <button
          type="button"
          onClick={() => router.push('/best-clat-coaching-in-delhi')}
          style={{ color: '#fbcfe8', background: 'rgba(251, 207, 232, 0.1)', border: '1px solid rgba(251, 207, 232, 0.25)', borderRadius: '999px', padding: '3px 10px', fontSize: '11.5px', cursor: 'pointer' }}
        >
          CLAT Delhi
        </button>
      </div>
    </div>
  );
}
