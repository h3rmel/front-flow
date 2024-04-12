// Import(s)
import { Metadata } from 'next';

import { PxRemInterface } from '@/features/px-rem';

export const metadata: Metadata = {
  title: 'PX/REM',
};

export default function Page(): JSX.Element {
  return <PxRemInterface />;
}
