'use client';

import { useSearchParams } from 'next/navigation'

export default () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')

  console.log('init')

  return (
    <div>
      query: {searchQuery}
    </div>
  )
};
