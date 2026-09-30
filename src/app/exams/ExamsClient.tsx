'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { ExamCategory, CityData } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

interface ExamsClientProps {
  exams: readonly ExamCategory[];
  cities: readonly CityData[];
}

export default function ExamsClient({ exams, cities }: ExamsClientProps) {
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const groups = [
    { id: 'all', label: 'All Exams', count: exams.length },
    { id: 'Law', label: 'Law', count: exams.filter((e) => e.categoryGroup === 'Law').length },
    { id: 'Engineering', label: 'Engineering', count: exams.filter((e) => e.categoryGroup === 'Engineering').length },
    { id: 'Medical', label: 'Medical', count: exams.filter((e) => e.categoryGroup === 'Medical').length },
    { id: 'Civil Services', label: 'Civil Services', count: exams.filter((e) => e.categoryGroup === 'Civil Services').length },
    { id: 'Management', label: 'Management', count: exams.filter((e) => e.categoryGroup === 'Management').length },
    { id: 'Govt & Defense', label: 'Govt & Defense', count: exams.filter((e) => e.categoryGroup === 'Govt & Defense').length },
    { id: 'School & Other', label: 'School & Boards', count: exams.filter((e) => e.categoryGroup === 'School & Other').length },
  ];

  const popularHubSlugs = ['delhi', 'mumbai', 'bangalore', 'hyderabad', 'pune'];

  const filteredExams = useMemo(() => {
    return exams.filter((exam) => {
      const matchesGroup = activeGroup === 'all' || exam.categoryGroup === activeGroup;
      if (!matchesGroup) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        exam.name.toLowerCase().includes(q) ||
        exam.shortName.toLowerCase().includes(q) ||
        exam.fullName.toLowerCase().includes(q) ||
        exam.description.toLowerCase().includes(q) ||
        exam.categoryGroup.toLowerCase().includes(q)
      );
    });
  }, [exams, activeGroup, searchQuery]);

  return (
    <div>
      {/* Search Bar & Quick Filters Bar */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-lg, 16px)',
          border: '1px solid var(--border-subtle, #e2e8f0)',
          padding: '20px 24px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          marginBottom: '32px',
        }}
      >
        {/* Search Input Box */}
        <div style={{ position: 'relative', marginBottom: '18px' }}>
          <div
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted, #64748b)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icons.Search size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search exam by name e.g. CLAT, JEE, NEET, UPSC, IPMAT, GATE, NDA, CUET..."
            style={{
              width: '100%',
              padding: '14px 44px 14px 48px',
              fontSize: '15px',
              borderRadius: 'var(--radius-md, 10px)',
              border: '1.5px solid var(--border-subtle, #cbd5e1)',
              outline: 'none',
              background: '#f8fafc',
              color: 'var(--text-dark, #0f172a)',
              transition: 'border-color 0.15s ease, background 0.15s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--brand-blue, #2563eb)';
              e.currentTarget.style.background = '#ffffff';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle, #cbd5e1)';
              e.currentTarget.style.background = '#f8fafc';
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#e2e8f0',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700,
                color: '#475569',
              }}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="exam-category-tabs">
          {groups.map((group) => {
            const isActive = activeGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--brand-blue, #2563eb)' : '1px solid var(--border-subtle, #e2e8f0)',
                  background: isActive ? 'var(--brand-blue, #2563eb)' : '#f8fafc',
                  color: isActive ? '#ffffff' : 'var(--text-body, #334155)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{group.label}</span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(255, 255, 255, 0.25)' : '#e2e8f0',
                    color: isActive ? '#ffffff' : '#64748b',
                  }}
                >
                  {group.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ fontSize: '15px', color: 'var(--text-muted, #64748b)' }}>
          Showing <strong>{filteredExams.length}</strong> of <strong>{exams.length}</strong> examination categories
          {searchQuery ? ` matching "${searchQuery}"` : activeGroup !== 'all' ? ` in ${activeGroup}` : ''}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--text-muted, #64748b)',
          }}
        >
          <span className="badge badge-emerald">✓ 100-Point Audit Verified</span>
        </div>
      </div>

      {/* Exam Cards Grid */}
      {filteredExams.length > 0 ? (
        <div className="exam-cards-grid">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                border: '1px solid var(--border-subtle, #e2e8f0)',
                background: '#ffffff',
                borderRadius: 'var(--radius-lg, 16px)',
              }}
            >
              <div>
                {/* Badges Row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <span className="badge badge-gold" style={{ fontSize: '12px' }}>
                    {exam.badge}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-muted, #64748b)',
                      background: '#f1f5f9',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {exam.examLevel}
                  </span>
                </div>

                {/* Exam Title with Clickable Link */}
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px', lineHeight: '1.3' }}>
                  <Link
                    href={`/best-${exam.slug}-coaching`}
                    style={{
                      color: 'var(--text-dark, #0f172a)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    className="hover:underline"
                  >
                    <span>{exam.name}</span>
                    <span style={{ fontSize: '16px', color: 'var(--brand-blue, #2563eb)' }}>→</span>
                  </Link>
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--text-body, #475569)',
                    lineHeight: '1.6',
                    marginBottom: '16px',
                    minHeight: '44px',
                  }}
                >
                  {exam.description}
                </p>

                {/* Avg Fees & Prep Duration pill */}
                <div
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm, 8px)',
                    fontSize: '12.5px',
                    color: 'var(--text-muted, #64748b)',
                    marginBottom: '16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>
                    Avg. Fees: <strong style={{ color: 'var(--text-dark, #0f172a)' }}>{exam.avgFees}</strong>
                  </span>
                  <span>
                    Prep: <strong style={{ color: 'var(--text-dark, #0f172a)' }}>{exam.prepDuration}</strong>
                  </span>
                </div>
              </div>

              <div>
                {/* Popular Hubs */}
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--text-muted, #64748b)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Popular Hubs for {exam.shortName}:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {popularHubSlugs.map((citySlug) => {
                    const city = cities.find((c) => c.slug === citySlug);
                    if (!city) return null;
                    return (
                      <Link
                        key={citySlug}
                        href={`/best-${exam.slug}-coaching-in-${citySlug}`}
                        className="badge badge-blue"
                        style={{
                          textDecoration: 'none',
                          fontSize: '12px',
                          padding: '4px 10px',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {city.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Card Footer Action */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle, #e2e8f0)',
                    paddingTop: '12px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Link
                    href={`/best-${exam.slug}-coaching`}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--brand-blue, #2563eb)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Explore All Hubs & Rankings</span>
                    <span>→</span>
                  </Link>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>100-Pt Audited</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#ffffff',
            borderRadius: 'var(--radius-lg, 16px)',
            border: '1px solid var(--border-subtle, #e2e8f0)',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '14px' }}>🔍</div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark, #0f172a)', marginBottom: '8px' }}>
            No examinations found
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--text-muted, #64748b)', maxWidth: '440px', margin: '0 auto 20px' }}>
            We could not find any exams matching &quot;{searchQuery}&quot;. Try searching for &quot;CLAT&quot;, &quot;JEE&quot;, &quot;NEET&quot;, &quot;UPSC&quot;, or browse all categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveGroup('all');
            }}
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '14px' }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
