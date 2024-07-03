// components/RootLayout.js

import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head'; // Add import for Head component
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react'; // Import ReactNode type

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Eagles Ring - Investment Platform',
  description: 'Connect with investors and pitch your business idea at Eagles Ring.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <NextUIProvider>
        <Head>
          <title>{metadata.title}</title>
          <meta name='description' content={metadata.description} />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='author' content='Sanele Hlongwane' />
          <meta property='og:image' content='/EaglesRingLogo.png' />
        </Head>
        <html lang='en'>
          <body className={roboto.className}>
            <Header />
            <main className='container'>{children}</main>
            <ToastContainer />
          </body>
        </html>
      </NextUIProvider>
    </ClerkProvider>
  );
}
