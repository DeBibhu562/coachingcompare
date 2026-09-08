'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXAM_CATEGORIES, CITIES_DATA, getListingsForCategoryAndCity } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export default function ComparePage() {
  const [selectedExam, setSelectedExam] = useState('clat');
  const [selectedCity, setSelectedCity] = useState('delhi');

  const exam = EXAM_CATEGORIES.find((e) => e.slug === selectedExam) || EXAM_CATEGORIES[0];
  const city = CITIES_DATA.find((c) => c.slug === selectedCity) || CITIES_DATA[0];

  const listings = getListingsForCategoryAndCity(selectedExam, selectedCity);

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Direct Compare Tool</span>
        </div>
      </nav>

      {/* Header */}
      <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
        <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
          <Icons.Scales size={14} /> Side-by-Side Analysis
        </span>
        <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
          Compare Coaching Institutes Side-by-Side
        </h1>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)' }}>
          Select an exam category and city to analyze inspection scores, fees, faculty ratios, and batch sizes in one interactive view.
        </p>
      </div>

      {/* Interactive Filter Bar */}
      <div
        className="card"
        style={{
          padding: '20px 24px',
          background: '#ffffff',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div style={{ flex: '1 1 250px' }}>
          <label className="form-label">Target Exam Category</label>
          <select
            className="form-select"
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
          >
            {EXAM_CATEGORIES.map((e) => (
              <option key={e.id} value={e.slug}>
                {e.name} ({e.shortName})
              </option>
            ))}
          </select>
        </div>

        <div style={{ flex: '1 1 250px' }}>
          <label className="form-label">Select City</label>
          <select
            className="form-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {CITIES_DATA.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} ({c.state})
              </option>
            ))}
          </select>
        </div>

        <div style={{ alignSelf: 'flex-end', paddingTop: '4px' }}>
          <Link
            href={`/best-${selectedExam}-coaching-in-${selectedCity}`}
            className="btn btn-outline"
          >
            View Full {exam.shortName} in {city.name} Guide →
          </Link>
        </div>
      </div>

      {/* Side-by-side comparison table */}
      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th style={{ minWidth: '220px' }}>Institute & Rank</th>
              <th>Inspection Score</th>
              <th>Rating & Reviews</th>
              <th>Batch Size</th>
              <th>Fee Estimate</th>
              <th>Locality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item) => (
              <tr key={item.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-blue">#{item.rank}</span>
                    <strong style={{ color: 'var(--text-dark)', fontSize: '15px' }}>{item.name}</strong>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Est. {item.estYear} • {item.studentsCount}
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: 800, color: 'var(--brand-blue)' }}>
                      {item.inspectionScore}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>/100</span>
                  </div>
                  <div className="score-bar-bg" style={{ width: '70px', height: '5px' }}>
                    <div className="score-bar-fill" style={{ width: `${item.inspectionScore}%` }} />
                  </div>
                </td>
                <td>
                  <span style={{ color: '#d97706', fontWeight: 700 }}>★ {item.rating}</span>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>({item.reviewCount} reviews)</div>
                </td>
                <td>
                  <span className="badge badge-purple">{item.batchSize}</span>
                </td>
                <td style={{ fontWeight: 700, color: 'var(--text-dark)' }}>
                  {item.feesEstimate}
                </td>
                <td>
                  <div style={{ fontSize: '13px', color: 'var(--text-body)' }}>📍 {item.contact.locality}</div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <a href={`tel:${item.contact.phone}`} className="btn btn-primary btn-sm" title="Call Institute">
                      <Icons.Phone size={13} />
                    </a>
                    <a href={item.contact.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" title="Visit Website">
                      <Icons.Globe size={13} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Feature comparison highlights */}
      <div style={{ marginTop: '48px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
          Detailed Verified Strengths ({city.name})
        </h3>

        <div className="grid-2">
          {listings.slice(0, 4).map((item) => (
            <div key={item.id} className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-dark)' }}>
                  #{item.rank} {item.name}
                </h4>
                <span className="badge badge-gold">{item.inspectionScore}/100</span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {item.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-body)' }}>
                    <span style={{ color: 'var(--brand-emerald)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
