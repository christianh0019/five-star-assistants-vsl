import React, { useState } from 'react';

interface Props {
  variant?: 'footer' | 'inline';
}

export default function NewsletterSignup({ variant = 'footer' }: Props) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, first_name: firstName }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setStatus('success');
    } catch (err: any) {
      setErrorMsg(err.message ?? 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={variant === 'footer' ? 'text-center py-2' : 'text-center'}>
        <p className="text-gold font-heading font-bold text-lg mb-1">You're in.</p>
        <p className="text-gray-400 text-sm font-body">Check your inbox — first issue lands Tuesday.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col ${variant === 'inline' ? 'sm:flex-row' : 'sm:flex-row'} gap-3`}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold/50 transition-colors"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-[2] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold/50 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-xl bg-gold text-navy font-heading font-bold text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors disabled:opacity-50 whitespace-nowrap shrink-0"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe Free'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2">{errorMsg}</p>
      )}
    </form>
  );
}
