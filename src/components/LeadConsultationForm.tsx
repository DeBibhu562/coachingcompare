'use client';

import React, { useState } from 'react';
import { EXAM_CATEGORIES, CITIES_DATA } from '@/data/coachingData';
import { Icons } from './Icons';

interface LeadConsultationFormProps {
  examName?: string;
  cityName?: string;
  instituteName?: string;
}

export default function LeadConsultationForm({ examName = '', cityName = '', instituteName }: LeadConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    exam: examName,
    city: cityName,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="lead-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
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
          Consultation Requested!
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
          Thank you, <strong>{formData.name}</strong>. Our senior academic counsellor for <strong>{formData.exam || 'your target exam'}</strong> in <strong>{formData.city || 'your city'}</strong> will call you within 15 minutes.
        </p>
        <button
          className="btn btn-outline btn-sm"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', exam: '', city: '' });
          }}
        >
          Submit Another Query
        </button>
      </div>
    );
  }

  return (
    <div className="lead-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span style={{ color: 'var(--brand-emerald)', display: 'flex' }}>
          <Icons.ShieldCheck size={18} />
        </span>
        <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-primary)' }}>
          Commercial-Free Consultation
        </span>
      </div>
      <h3 className="lead-card-title">Personalized Batch & Living Advisory</h3>
      <p className="lead-card-sub">
        Speak with an independent academic advisor to evaluate genuine batch sizes, faculty stability, and living costs tailored to your target exam.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            required
            placeholder="Enter student name"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mobile Number</label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#64748b',
              }}
            >
              +91
            </span>
            <input
              type="tel"
              required
              pattern="[6-9][0-9]{9}"
              placeholder="10-digit mobile number"
              className="form-input"
              style={{ paddingLeft: '48px' }}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <div className="form-group">
            <label className="form-label">Target Exam</label>
            <select
              required
              className="form-select"
              value={formData.exam}
              onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
            >
              <option value="" disabled>Select exam</option>
              {EXAM_CATEGORIES.map((e) => (
                <option key={e.id} value={e.shortName}>
                  {e.shortName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Your City</label>
            <select
              required
              className="form-select"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="" disabled>Select city</option>
              {CITIES_DATA.slice(0, 16).map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
              <option value="Other">Other City</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-accent"
          style={{ width: '100%', marginTop: '6px', fontSize: '15px' }}
        >
          Request Free Callback →
        </button>
      </form>
    </div>
  );
}
