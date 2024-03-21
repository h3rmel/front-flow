// #region Imports

import { createRoot } from 'react-dom/client';

import { App } from '@/app';

import '@/ui/globals.css';

// #endregion

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
