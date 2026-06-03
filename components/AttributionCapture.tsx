'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

// Mount-once client component that records first-touch attribution for the
// session. Renders nothing. Lives in the root layout so it runs on whatever
// page the visitor lands on first.
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
