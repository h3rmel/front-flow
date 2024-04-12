// Import(s)
import { Metadata } from 'next';

import { HomeInterface } from '@/features/home';

export const metadata: Metadata = {
  title: 'Home | FrontFlow',
};

export default function Home(): JSX.Element {
  return <HomeInterface />;
}
