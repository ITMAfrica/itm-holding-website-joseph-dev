'use client';

import Link from 'next/link';

export default function Btn() {
  return (
    <div>
      <Link
        href={'/fr/cd'}
        onClick={() => {
          localStorage.setItem('country', 'cd');
        }}
      >
        Test Link
      </Link>
    </div>
  );
}
