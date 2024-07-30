import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

import Navbar from '@/components/custom/navbar/Navbar';
import { connectToDB } from '@/mongoDB/helpers/DbConnection';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Air transport app',
  description: 'Udemy course project',
};

connectToDB();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
