'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CITIES_DATA, EXAM_CATEGORIES } from '@/data/coachingData';
import { Icons } from './Icons';

export default function LiveCitySearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Search results calculation
  const results = useMemo<{ cities: typeof CITIES_DATA; exams: typeof EXAM_CATEGORIES }>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { cities: [], exams: [] };

    const matchedCities = CITIES_DATA.filter(
      (c) => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedExams = EXAM_CATEGORIES.filter(
      (e) => e.name.toLowerCase().includes(q) || e.shortName.toLowerCase().includes(q)
    ).slice(0, 4);

    return {
      cities: matchedCities,
      exams: matchedExams,
    };
  }, [query]);

  const hasResults = query.trim() && (results.cities.length > 0 || results.exams.length > 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.cities.length > 0) {
      router.push(`/coaching-centres-in-${results.cities[0].slug}`);
      setIsOpen(false);
    } else if (results.exams.length > 0) {
      router.push(`/best-${results.exams[0].slug}-coaching-in-delhi`);
      setIsOpen(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <span className="search-icon">
            <Icons.Search size={22} color="#64748b" />
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Type your city name (e.g. Bareilly, Pune, Delhi, Mysore)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              style={{
                position: 'absolute',
                right: '16px',
                padding: '6px',
                color: '#64748b',
              }}
              aria-label="Clear search query"
            >
              <Icons.X size={18} />
            </button>
          )}
        </div>
      </form>

      {/* Auto-suggest dropdown */}
      {isOpen && hasResults && (
        <div className="search-dropdown">
          {results.cities.length > 0 && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{ padding: '6px 12px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>
                Cities
              </div>
              {results.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/coaching-centres-in-${city.slug}`}
                  className="search-item"
                  onClick={() => setIsOpen(false)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '20px' }}>{city.symbol}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14.5px' }}>{city.name}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{city.state}</div>
                    </div>
                  </div>
                  <span className="badge badge-blue">Explore 15 Exams →</span>
                </Link>
              ))}
            </div>
          )}

          {results.exams.length > 0 && (
            <div>
              <div style={{ padding: '6px 12px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#64748b' }}>
                Exam Categories
              </div>
              {results.exams.map((exam) => (
                <Link
                  key={exam.slug}
                  href={`/best-${exam.slug}-coaching-in-delhi`}
                  className="search-item"
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>{exam.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{exam.fullName}</div>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--brand-blue)', fontWeight: 600 }}>Top 5 Rankings →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
