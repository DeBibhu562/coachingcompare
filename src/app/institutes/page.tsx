import type { Metadata } from 'next';
import Link from 'next/link';
import { INSTITUTE_BRANDS } from '@/data/instituteBrands';

export const metadata: Metadata = {
  title: 'Coaching Institute Brands Directory | CoachingCompare.in',
  description:
    'Browse verified coaching institute brand hubs — fees, centres, courses and ranking appearances across India.',
  alternates: { canonical: '/institutes' },
};

export default function InstitutesIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <nav style={{ marginBottom: 14, fontSize: 14 }}>
          <Link href="/">Home</Link> / <span>Institutes</span>
        </nav>
        <h1 style={{ marginBottom: 10 }}>Coaching institute brands</h1>
        <p style={{ marginBottom: 24, maxWidth: 680, color: 'var(--text-muted, #64748b)' }}>
          Brand hubs recovered from the production archive — {INSTITUTE_BRANDS.length} institutes.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 12,
          }}
        >
          {INSTITUTE_BRANDS.map((b) => (
            <Link
              key={b.slug}
              href={`/institutes/${b.slug}`}
              style={{
                display: 'block',
                padding: '14px 16px',
                borderRadius: 12,
                border: '1px solid var(--border-subtle, #e2e8f0)',
                background: '#fff',
              }}
            >
              <strong style={{ display: 'block', marginBottom: 4 }}>{b.name}</strong>
              <span style={{ fontSize: 13, color: 'var(--text-muted, #64748b)' }}>
                {(b.description || b.title).slice(0, 110)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
