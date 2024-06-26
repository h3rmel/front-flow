// Import(s)
import { Skeleton } from '@/ui/components/ui/skeleton';

export default function Loading(): JSX.Element {
  return (
    <main>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-96 w-[900px]" />
      </section>
    </main>
  );
}
