import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, IBM_Plex_Mono } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Bauhaus Design System',
  description: 'A Bauhaus-inspired styleguide and component library',
  metadataBase: new URL('https://agentic-1a48c656.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${plexMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
