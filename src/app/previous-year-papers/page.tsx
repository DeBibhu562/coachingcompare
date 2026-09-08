'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PREVIOUS_PAPERS } from '@/data/coachingData';
import { Icons } from '@/components/Icons';

export default function PreviousYearPapersPage() {
  const [selectedExam, setSelectedExam] = useState('all');
  const [downloadModalPaper, setDownloadModalPaper] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredPapers = selectedExam === 'all'
    ? PREVIOUS_PAPERS
    : PREVIOUS_PAPERS.filter((p) => p.examSlug === selectedExam);

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Previous Year Question Papers</span>
        </div>
      </nav>

      {/* Header */}
      <header style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
        <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
          Free Download Vault
        </span>
        <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
          Official Previous Year Question Papers & Answer Keys
        </h1>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)' }}>
          Download authentic previous 5-year question papers for CLAT, JEE Advanced, JEE Main, NEET-UG, UPSC CSE, and CAT with official answer keys and step-by-step solutions.
        </p>
      </header>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
        {['all', 'clat', 'jee', 'neet', 'upsc', 'cat'].map((slug) => (
          <button
            key={slug}
            onClick={() => setSelectedExam(slug)}
            className={`btn btn-sm ${selectedExam === slug ? 'btn-primary' : 'btn-outline'}`}
            style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}
          >
            {slug === 'all' ? 'All Papers' : slug}
          </button>
        ))}
      </div>

      {/* Papers Grid */}
      <div className="grid-2">
        {filteredPapers.map((paper) => (
          <div key={paper.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="badge badge-blue">{paper.examName} ({paper.year})</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{paper.session}</span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>
                {paper.paperType}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '13px', color: 'var(--text-body)', background: '#f8fafc', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                <span>Questions: <strong>{paper.questionsCount}</strong></span>
                <span>•</span>
                <span>Marks: <strong>{paper.totalMarks}</strong></span>
                <span>•</span>
                <span>File: <strong>{paper.fileSize}</strong></span>
                <span>•</span>
                <span style={{ color: 'var(--brand-emerald)', fontWeight: 700 }}>✓ Verified Solution</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                📥 {paper.downloadCount} Aspirants Downloaded
              </span>
              <button
                type="button"
                className="btn btn-accent btn-sm"
                onClick={() => setDownloadModalPaper(paper.paperType)}
              >
                Download PDF Free ↓
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Download Success Modal */}
      {downloadModalPaper && (
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
          onClick={() => setDownloadModalPaper(null)}
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
              Free Paper Unlocked
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
              Your download for <strong>{downloadModalPaper}</strong> with verified answer keys is ready.
            </p>
            {downloadSuccess ? (
              <div style={{ padding: '14px', background: 'var(--brand-emerald-light)', color: 'var(--brand-emerald)', borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: '14px', marginBottom: '12px' }}>
                ✓ Download started successfully!
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
                      setDownloadModalPaper(null);
                    }, 1400);
                  }, 600);
                }}
              >
                {isDownloading ? 'Preparing PDF...' : 'Start PDF Download Now'}
              </button>
            )}
            <button
              className="btn btn-outline btn-sm"
              style={{ width: '100%' }}
              onClick={() => {
                setDownloadModalPaper(null);
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
