'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/Icons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Student Counselling',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Breadcrumbs */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-item">
          <Link href="/">Home</Link>
          <Icons.ChevronRight size={13} />
        </div>
        <div className="breadcrumb-item">
          <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>Contact Us</span>
        </div>
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge badge-blue" style={{ marginBottom: '10px' }}>
            Get in Touch
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
            Contact CoachingCompare.in
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Have a question about an institute ranking, request an inspection, or need personalized counselling? Reach out to our team.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '36px' }}>
          {/* Left Info Panel */}
          <div>
            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                Editorial & Audit Desk
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--brand-blue)', marginTop: '2px' }}><Icons.Mail size={18} /></span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Admissions & Helpdesk</div>
                    <a href="mailto:admissions@coachingcompare.in" style={{ color: 'var(--brand-blue)' }}>
                      admissions@coachingcompare.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--brand-blue)', marginTop: '2px' }}><Icons.Mail size={18} /></span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Audit & Verification Desk</div>
                    <a href="mailto:audit@coachingcompare.in" style={{ color: 'var(--brand-blue)' }}>
                      audit@coachingcompare.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--brand-blue)', marginTop: '2px' }}><Icons.Phone size={18} /></span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Phone Helpline</div>
                    <span style={{ color: 'var(--text-muted)' }}>+91-11-49508822 (Mon-Fri, 9am - 6pm)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--brand-blue)', marginTop: '2px' }}><Icons.MapPin size={18} /></span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>Registered Office</div>
                    <span style={{ color: 'var(--text-muted)' }}>
                      Level 5, Connaught Place Educational Towers, New Delhi 110001, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '24px', background: 'var(--brand-amber-light)', border: '1px solid var(--brand-amber-border)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#92400e', marginBottom: '6px' }}>
                Note for Coaching Directors
              </h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#78350f' }}>
                Please do not contact us offering sponsorships for rank improvements. If you want your institute audited, choose &quot;Institute Audit Request&quot; in the form.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="card" style={{ padding: '32px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--brand-emerald-light)',
                    color: 'var(--brand-emerald)',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Icons.Check size={32} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Message Received
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Thank you, <strong>{form.name}</strong>. Our team has received your query regarding <strong>{form.type}</strong> and will get back to you within 24 business hours.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', type: 'Student Counselling', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>
                  Send a Message
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="form-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      className="form-input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Query Type</label>
                  <select
                    className="form-select"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="Student Counselling">Student Admission / Counselling Guidance</option>
                    <option value="Institute Audit Request">Institute Audit Request (For Directors)</option>
                    <option value="Correction or Update">Correction or Data Update Request</option>
                    <option value="General Feedback">General Feedback / Press</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry or the details of your centre..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '6px' }}>
                  Submit Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
