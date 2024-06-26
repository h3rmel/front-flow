// Import(s)
import { Metadata } from 'next';

import { HomeInterface } from './_components/interface';

export const metadata: Metadata = {
  title: 'Home | FrontFlow',
};

export default function Home(): JSX.Element {
  return <HomeInterface />;
}
