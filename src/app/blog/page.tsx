
'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
const router = useRouter();
  return (
    <div>
          My name is Waleed Majeed.
          <br/>
          <button type="button" onClick={() => router.push('/blog/address')}>
            Click to login
          </button>
      
    </div>
  )
}
