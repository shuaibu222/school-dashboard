'use client';

import { useState } from 'react';
import { MyContext } from '../app/hooks/MyContext';
import { Poppins } from 'next/font/google';
import './globals.css';
import Aside from './components/Aside';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'DHTN school management system',
  description: 'this is a huge database system designed for DHTN school',
  charset: 'UTF-8',
  author: 'shuaibu abdulkadir hussain',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'database DHTN school management system',
};

const poppins = Poppins({ subsets: ['devanagari'], weight: '400' });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <MyContext.Provider value={{ setIsSidebarOpen, isSidebarOpen }}>
        <body className={poppins.className}>
          <Aside />
          {/*  */}
          <section
            className={`side ${
              isSidebarOpen ? 'side-active' : 'side-not-active'
            }`}
          >
            <Navigation />
            {children}
          </section>
        </body>
      </MyContext.Provider>
    </html>
  );
}
