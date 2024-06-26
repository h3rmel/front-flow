// Import(s)

import { Skeleton } from '@/ui/components/ui/skeleton';

export default function Loading(): JSX.Element {
  return (
    <main className="p-12">
      <Skeleton className="container py-64" />
      <Skeleton className="container py-32" />
      <Skeleton className="container py-32 h-[1112px]" />
      <Skeleton className="container py-32" />
    </main>
  );
}
