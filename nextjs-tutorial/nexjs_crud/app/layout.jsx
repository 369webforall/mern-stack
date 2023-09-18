import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import Navbar from '@/app/components/Navbar';
export const metadata = {
  title: 'nextjs mongoose fullstack tutorial',
  description: 'CRUD Operation with nextjs and mongoose',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
