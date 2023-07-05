'use client'

import { useParams } from 'next/navigation'

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams()
  const id = params['id']
  return (
    <div>
      <div>
        <div> user id : {id} / bar links</div>
      </div>
      {children}
    </div>
  );
}
