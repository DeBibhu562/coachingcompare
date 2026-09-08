import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export default function Logo({ variant = 'dark', size = 'md', showBadge = false }: LogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: { w: 32, h: 32 },
    md: { w: 38, h: 38 },
    lg: { w: 46, h: 46 },
  };

  const { w, h } = iconSizes[size];

  return (
    <Link href="/" className="logo-brand group">
      {/* Proprietary CoachingCompare Dual-C Comparative Benchmark Crest */}
      <div className="logo-icon-wrapper">
        <svg
          width={w}
          height={h}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <defs>
            {/* Primary Deep Indigo to Electric Violet Gradient */}
            <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>

            {/* Precision Verification Mint/Emerald Gradient */}
            <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Radiant Spark Gold Gradient */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>

            {/* Card Surface Shadow */}
            <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#1e1b4b" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Hexagonal Shield Canvas with Smooth Rounded Corners */}
          <rect width="48" height="48" rx="13" fill="url(#brandGrad)" filter="url(#logoShadow)" />

          {/* Precision Comparison Grid Subtle Pattern */}
          <path
            d="M8 24H40M24 8V40"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Left Comparative Blade (Coaching 'C') */}
          <path
            d="M23 13.5C17.2 13.5 13 18 13 24C13 30 17.2 34.5 23 34.5C25.5 34.5 27.8 33.5 29.5 32L26.5 28.5C25.5 29.5 24.3 30 23 30C19.8 30 17.5 27.4 17.5 24C17.5 20.6 19.8 18 23 18C24.3 18 25.5 18.5 26.5 19.5L29.5 16C27.8 14.5 25.5 13.5 23 13.5Z"
            fill="#ffffff"
          />

          {/* Right Verification Blade (Compare 'C' in Mint Emerald) */}
          <path
            d="M28 17.5C31.5 19 33.5 21.2 33.5 24C33.5 26.8 31.5 29 28 30.5L29.5 34C34.5 32 37.5 28.5 37.5 24C37.5 19.5 34.5 16 29.5 14L28 17.5Z"
            fill="url(#mintGrad)"
          />

          {/* Central Benchmark Prism Node */}
          <circle cx="24" cy="24" r="2.8" fill="#ffffff" />
          <circle cx="24" cy="24" r="1.4" fill="#4f46e5" />

          {/* Top-Right Excellence Star Pin */}
          <path
            d="M38 8L39 11L42 11.5L39.5 13.5L40.2 16.5L38 15L35.8 16.5L36.5 13.5L34 11.5L37 11L38 8Z"
            fill="url(#goldGrad)"
          />
        </svg>
      </div>

      {/* Brand Name Typography - Strictly 'Coaching Compare' (No .in) */}
      <div className="logo-text-wrapper">
        <span
          className="logo-text"
          style={{ color: isLight ? '#ffffff' : '#0f172a' }}
        >
          Coaching<span style={{ color: '#4f46e5' }}> Compare</span>
        </span>
        {showBadge && (
          <span className="logo-pill">
            INDEPENDENT BENCHMARK
          </span>
        )}
      </div>
    </Link>
  );
}

