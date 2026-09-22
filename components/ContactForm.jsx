'use client';

import React, { useState } from 'react';

const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return 'https://api.swaatienterprises.com/api/v1';
  }
  return 'http://localhost:4000/api/v1';
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    productInterested: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });

    try {
      const res = await fetch(`${getApiBaseUrl()}/public/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          companyName: formData.companyName,
          phone: formData.phone,
          email: formData.email,
          productInterested: formData.productInterested,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your requirement has been registered with Swaati Enterprises. Our technical engineer will contact you shortly.',
        });
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          productInterested: 'General Inquiry',
          message: '',
        });
      } else {
        const errorData = await res.json().catch(() => null);
        setStatus({
          state: 'error',
          message: errorData?.message || 'Unable to submit your enquiry at this moment. Please call us directly at +91 93700 11133.',
        });
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Network error: Unable to reach the server. Please check your internet connection or call +91 93700 11133.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.state === 'success' && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold flex items-center gap-2">
          <span>✓ {status.message}</span>
        </div>
      )}

      {status.state === 'error' && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm font-semibold flex items-center gap-2">
          <span>⚠ {status.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your Name *"
          className="w-full max-w-full px-3.5 sm:px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none text-slate-800 text-sm sm:text-base"
        />
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          placeholder="Company Name"
          className="w-full max-w-full px-3.5 sm:px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none text-slate-800 text-sm sm:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Phone Number *"
          className="w-full max-w-full px-3.5 sm:px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none text-slate-800 text-sm sm:text-base"
        />
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email Address *"
          className="w-full max-w-full px-3.5 sm:px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none text-slate-800 text-sm sm:text-base"
        />
      </div>

      <div>
        <select
          value={formData.productInterested}
          onChange={(e) => setFormData({ ...formData, productInterested: e.target.value })}
          className="w-full max-w-full px-3.5 sm:px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none text-slate-700 text-sm sm:text-base"
        >
          <option value="Waterproofing Systems">Waterproofing Systems (Terrace, Basement, Podium)</option>
          <option value="Concrete Admixtures">Concrete Admixtures & Plasticizers</option>
          <option value="Epoxy Flooring">Epoxy Flooring Systems</option>
          <option value="Structural Repair">Structural Repair & Strengthening</option>
          <option value="Grouts & Anchors">Grouts & Precision Anchoring</option>
          <option value="Building & Joint Sealants">Building & Joint Sealants</option>
          <option value="Specialized Coatings">Specialized Industrial Coatings</option>
          <option value="General Inquiry">General Product Inquiry</option>
        </select>
      </div>

      <textarea
        rows="4"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Please describe your project location and requirement (e.g. area size, dampness problem, specification requirement)..."
        className="w-full max-w-full px-3.5 sm:px-4 py-3 border border-slate-300 rounded-xl bg-white resize-none focus:ring-2 focus:ring-royal-600 focus:outline-none text-slate-800 text-sm sm:text-base"
      ></textarea>

      <button
        type="submit"
        disabled={status.state === 'submitting'}
        className="btn-primary text-white w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all text-sm sm:text-base text-center"
      >
        {status.state === 'submitting' ? 'Sending Enquiry...' : 'Send Enquiry'}
      </button>
    </form>
  );
}
