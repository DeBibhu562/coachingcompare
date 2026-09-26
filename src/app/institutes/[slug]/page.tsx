import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllInstituteBrandSlugs, getInstituteBrand } from '@/data/instituteBrands';
import { Icons } from '@/components/Icons';
import LeadConsultationForm from '@/components/LeadConsultationForm';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllInstituteBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getInstituteBrand(slug);
  if (!brand) return {};
  return {
    title: brand.title,
    description: brand.description || brand.title,
    alternates: { canonical: `/institutes/${brand.slug}` },
  };
}

export default async function InstituteBrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getInstituteBrand(slug);
  if (!brand) notFound();

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: brand.name,
    url: brand.url || `https://coachingcompare.in/institutes/${brand.slug}`,
    description: brand.description,
    telephone: brand.telephone || undefined,
    email: brand.email || undefined,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <div className="container" style={{ padding: '40px 20px 80px' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <Link href="/institutes">Institutes</Link>
            <Icons.ChevronRight size={13} />
          </div>
          <div className="breadcrumb-item">
            <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{brand.name}</span>
          </div>
        </nav>

        <div className="layout-grid" style={{ marginTop: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge badge-blue">Verified Brand Hub</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
              {brand.h1 || brand.name}
            </h1>

            <aside
              style={{
                borderLeft: '4px solid var(--brand-blue)',
                background: 'var(--bg-blue-light)',
                padding: '18px 22px',
                borderRadius: '12px',
                marginBottom: '28px',
              }}
            >
              <strong style={{ display: 'block', fontSize: '11.5px', letterSpacing: '0.06em', color: 'var(--brand-blue)', textTransform: 'uppercase', marginBottom: '8px' }}>
                DIRECT ANSWER & BRAND OVERVIEW
              </strong>
              <p style={{ margin: 0, lineHeight: '1.6', fontSize: '15px', color: 'var(--text-dark)' }}>
                {brand.description || `${brand.name} coaching brand profile on CoachingCompare.in.`}
              </p>
            </aside>

            <div className="card" style={{ padding: '28px', marginBottom: '32px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                Official Brand Contact & Verification Details
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px' }}>
                {brand.telephone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><Icons.Phone size={18} /></span>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '12.5px', display: 'block' }}>Official Phone:</span>
                      <a href={`tel:${brand.telephone}`} style={{ fontWeight: 700, color: 'var(--text-dark)' }}>
                        {brand.telephone}
                      </a>
                    </div>
                  </div>
                )}
                {brand.email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><Icons.Mail size={18} /></span>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '12.5px', display: 'block' }}>Admissions Desk Email:</span>
                      <a href={`mailto:${brand.email}`} style={{ fontWeight: 700, color: 'var(--brand-blue)' }}>
                        {brand.email}
                      </a>
                    </div>
                  </div>
                )}
                {brand.url && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'var(--brand-emerald)' }}><Icons.ShieldCheck size={18} /></span>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '12.5px', display: 'block' }}>Verified Official Website:</span>
                      <a href={brand.url} rel="noopener noreferrer" target="_blank" style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>
                        {brand.url} ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/compare" className="btn btn-primary">
                Compare with Competing Centres →
              </Link>
              <Link href="/fees-calculator" className="btn btn-outline">
                Calculate Fee Estimates
              </Link>
            </div>
          </div>

          <aside>
            <LeadConsultationForm instituteName={brand.name} />
          </aside>
        </div>
      </div>
    </>
  );
}
