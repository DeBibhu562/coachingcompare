'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STATES_DATA } from '@/data/coachingData';
import { Icons } from './Icons';

export default function StateAccordion() {
  // First state open by default
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({
    Maharashtra: true,
  });

  const toggleState = (stateName: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [stateName]: !prev[stateName],
    }));
  };

  return (
    <div style={{ marginTop: '24px' }}>
      {STATES_DATA.map((state) => {
        const isOpen = !!openStates[state.name];

        return (
          <div key={state.name} className="state-item">
            <button
              onClick={() => toggleState(state.name)}
              className="state-trigger"
              aria-expanded={isOpen}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    background: 'var(--brand-blue-light)',
                    color: 'var(--brand-blue)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--brand-blue-border)',
                  }}
                >
                  <Icons.MapPin size={18} />
                </span>
                <span style={{ fontSize: '17px', fontWeight: 700 }}>{state.name}</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: '#f1f5f9',
                    color: '#475569',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {state.cities.length} {state.cities.length === 1 ? 'City' : 'Cities'}
                </span>
              </div>

              <span style={{ color: '#64748b', transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <Icons.ChevronDown size={20} />
              </span>
            </button>

            {isOpen && (
              <div className="state-content">
                <div className="grid-3">
                  {state.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/coaching-centres-in-${city.slug}`}
                      style={{
                        padding: '14px 18px',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#ffffff',
                        transition: 'all 0.2s ease',
                      }}
                      className="card"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '24px' }}>{city.symbol}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)' }}>
                            {city.name}
                          </div>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                            {city.state}
                          </div>
                        </div>
                      </div>
                      <span style={{ fontSize: '12px', color: 'var(--brand-blue)', fontWeight: 700 }}>
                        Explore →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
