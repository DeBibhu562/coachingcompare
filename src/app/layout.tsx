import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CoachingCompare.in | Independent Coaching Institute Benchmarks & 100-Point Audits',
  description: 'Compare top coaching institutes across India for UPSC, CLAT, JEE, NEET, and CAT. Independent 100-point inspection audits, verified student selections, authentic fee schedules, and small batch ratio reports.',
  metadataBase: new URL('https://coachingcompare.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'CoachingCompare.in | Objective 100-Point Coaching Institute Benchmarks',
    description: 'Unbiased forensic evaluations of premier test-prep academies across 110+ Indian cities. Real topper roll-number audits and verified faculty metrics.',
    url: 'https://coachingcompare.in',
    siteName: 'CoachingCompare.in',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoachingCompare.in | Objective Coaching Institute Benchmarks',
    description: 'Independent, forensic coaching institute evaluations across 110+ cities and 15 competitive exams.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Structured Data (AEO & SEO)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CoachingCompare.in',
    url: 'https://coachingcompare.in',
    description: 'Independent directory and evaluation platform for competitive coaching institutes in India.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://coachingcompare.in/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CoachingCompare.in',
    url: 'https://coachingcompare.in',
    logo: 'https://coachingcompare.in/favicon.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'admissions@coachingcompare.in',
      contactType: 'Admissions and Audit Desk',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
