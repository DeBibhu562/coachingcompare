'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STUDY_MATERIALS } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export default function StudyMaterialsPage() {
  const [downloadMaterial, setDownloadMaterial] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Free Study Materials</span>
        </div>
      </nav>

      <header style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
          Open Access Knowledge Base
        </span>
        <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
          Free High-Yield Study Modules & Formula Vaults
        </h1>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)' }}>
          Curated by our academic audit committee and top national rankers. Free handbooks, concept notes, and derivation sheets designed to jumpstart your competitive exam preparation.
        </p>
      </header>

      <div className="grid-2">
        {STUDY_MATERIALS.map((mat) => (
          <div key={mat.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="badge badge-blue">{mat.examName} • {mat.category}</span>
                <span className="badge badge-gold">{mat.fileType}</span>
              </div>

              <h2 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.3' }}>
                {mat.title}
              </h2>

              <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '14px' }}>
                {mat.description}
              </p>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Core Inclusions:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {mat.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-dark)' }}>
                      <span style={{ color: 'var(--brand-emerald)' }}>✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: 'var(--text-muted)', background: '#f8fafc', padding: '8px 12px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                <span>Length: <strong>{mat.pages}</strong></span>
                <span>•</span>
                <span>Size: <strong>{mat.fileSize}</strong></span>
                <span>•</span>
                <span>Updated: <strong>{mat.lastUpdated}</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                🔥 {mat.downloadCount} Students Benefited
              </span>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setDownloadMaterial(mat.title)}
              >
                Download Free ↓
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {downloadMaterial && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
          onClick={() => setDownloadMaterial(null)}
        >
          <div
            className="card"
            style={{ maxWidth: '440px', width: '100%', padding: '32px', textAlign: 'center', background: '#ffffff' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ width: '48px', height: '48px', background: 'var(--brand-emerald-light)', color: 'var(--brand-emerald)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Icons.Check size={28} />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
              Study Material Ready
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
              Your download for <strong>{downloadMaterial}</strong> is prepared.
            </p>
            {downloadSuccess ? (
              <div style={{ padding: '14px', background: 'var(--brand-emerald-light)', color: 'var(--brand-emerald)', borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: '14px', marginBottom: '12px' }}>
                ✓ Material saved successfully!
              </div>
            ) : (
              <button
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '8px' }}
                disabled={isDownloading}
                onClick={() => {
                  setIsDownloading(true);
                  setTimeout(() => {
                    setIsDownloading(false);
                    setDownloadSuccess(true);
                    setTimeout(() => {
                      setDownloadSuccess(false);
                      setDownloadMaterial(null);
                    }, 1400);
                  }, 600);
                }}
              >
                {isDownloading ? 'Saving PDF...' : 'Save PDF to Device'}
              </button>
            )}
            <button
              className="btn btn-outline btn-sm"
              style={{ width: '100%' }}
              onClick={() => {
                setDownloadMaterial(null);
                setDownloadSuccess(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
