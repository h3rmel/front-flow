// Import(s)
import { Skeleton } from '@/ui/components/ui/skeleton';

export default function Loading(): JSX.Element {
  return (
    <main>
      <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
        <Skeleton className="h-8 w-28" />
        <Skeleton className="max-w-[360px] sm:max-w-[480px] w-full h-64" />
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-10 w-44" />
        <div className="w-full flex items-center justify-around">
          <Skeleton className="w-80 h-96" />
          <Skeleton className="w-80 h-96" />
        </div>
      </section>
    </main>
  );
}
