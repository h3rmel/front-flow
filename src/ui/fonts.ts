import { Sora, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const space_grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const ibm_plex_mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '500', variable: '--font-ibm-plex-mono' });

export { sora, space_grotesk, ibm_plex_mono };
