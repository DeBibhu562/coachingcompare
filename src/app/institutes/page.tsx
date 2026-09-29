import type { Metadata } from 'next';
import Link from 'next/link';
import { INSTITUTE_BRANDS } from '@/data/instituteBrands';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Coaching Institute Brands Directory | CoachingCompare.in',
  description:
    'Browse verified coaching institute brand hubs — fees, centres, courses and ranking appearances across India.',
  alternates: { canonical: '/institutes' },
};

export default function InstitutesIndexPage() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Institute Brands Directory</span>
        </div>
      </nav>

      <header style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
        <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
          Official Brand Registry
        </span>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
          Coaching Institute Brands in India
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
          Comprehensive directory of {INSTITUTE_BRANDS.length} verified coaching brands across UPSC, JEE, NEET, CLAT, CAT, and Foundation exams.
        </p>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {INSTITUTE_BRANDS.map((b) => (
          <Link
            key={b.slug}
            href={`/institutes/${b.slug}`}
            className="card"
            style={{
              padding: '20px',
              textDecoration: 'none',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--brand-emerald)', display: 'flex' }}>
                  <Icons.ShieldCheck size={16} />
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)' }}>
                  Verified Brand
                </span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                {b.name}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                {(b.description || b.title || b.name || '').slice(0, 115)}...
              </p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--brand-primary)', fontWeight: 600 }}>
              <span>View Brand Profile</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
