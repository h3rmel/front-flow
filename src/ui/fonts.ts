import { Sora, IBM_Plex_Mono } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const ibm_plex_mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '500', variable: '--font-ibm-plex-mono' });

export { sora, ibm_plex_mono };
