import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllInstituteBrandSlugs, getInstituteBrand } from '@/data/instituteBrands';

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
      <section className="section">
        <div className="container">
          <nav style={{ marginBottom: 14, fontSize: 14 }}>
            <Link href="/">Home</Link> / <Link href="/institutes">Institutes</Link> / <span>{brand.name}</span>
          </nav>
          <h1 style={{ marginBottom: 12 }}>{brand.h1 || brand.name}</h1>
          <aside
            style={{
              borderLeft: '4px solid #4f46e5',
              background: '#eef2ff',
              padding: '14px 16px',
              borderRadius: 12,
              marginBottom: 24,
              maxWidth: 820,
            }}
          >
            <strong style={{ display: 'block', fontSize: 12, letterSpacing: '0.05em', marginBottom: 6 }}>
              DIRECT ANSWER
            </strong>
            <p style={{ margin: 0, lineHeight: 1.55 }}>
              {brand.description || `${brand.name} coaching brand profile on CoachingCompare.in.`}
            </p>
          </aside>

          <div
            style={{
              display: 'grid',
              gap: 10,
              maxWidth: 520,
              padding: 18,
              border: '1px solid var(--border-subtle, #e2e8f0)',
              borderRadius: 14,
              background: '#fff',
            }}
          >
            {brand.telephone ? (
              <p style={{ margin: 0 }}>
                <strong>Phone:</strong> {brand.telephone}
              </p>
            ) : null}
            {brand.email ? (
              <p style={{ margin: 0 }}>
                <strong>Email:</strong> {brand.email}
              </p>
            ) : null}
            {brand.url ? (
              <p style={{ margin: 0 }}>
                <strong>Website:</strong>{' '}
                <a href={brand.url} rel="noopener noreferrer" target="_blank">
                  {brand.url}
                </a>
              </p>
            ) : null}
          </div>

          <p style={{ marginTop: 28 }}>
            <Link href="/compare" className="btn btn-accent">
              Compare institutes
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
