'use client';

// app/error.tsx
// Root error boundary. Self-contained (no Header/Footer imports) so a render
// fault in a shared component can't also break the error page. On a YMYL
// dental-emergency site the priority is getting the visitor a working path
// back, plus the 999 / NHS 111 safety line in case they are mid-emergency.
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="flex-grow bg-cream flex items-center justify-center py-24 lg:py-32 px-5">
      <div className="max-w-2xl text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/55 mb-6">
          Something went wrong
        </p>
        <h1 className="font-sans font-medium text-[28px] lg:text-[42px] leading-tight text-ink mb-5">
          This page didn&apos;t load properly
        </h1>
        <p className="text-[15px] text-ink/65 max-w-xl mx-auto mb-8 leading-relaxed">
          Sorry about that. Try again, or head back to the homepage to get matched with a vetted Enfield emergency dentist.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button onClick={reset} className="btn-primary text-[14px]">Try again</button>
          <Link href="/" className="btn-secondary text-[14px]">Go to homepage</Link>
        </div>
        <p className="text-[13px] text-ink/60 leading-relaxed border-t border-ink/10 pt-6 max-w-md mx-auto">
          For uncontrolled bleeding, spreading facial swelling, or breathing difficulty, call{' '}
          <strong className="text-urgent-600">999</strong> or{' '}
          <strong className="text-urgent-600">NHS 111</strong> — these need hospital care, not a dentist.
        </p>
      </div>
    </main>
  );
}
