import { Inter, Poppins, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const inter = Inter({ subsets: ['latin'] });
const space_grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap', weight: '500' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', display: 'swap', weight: '500' });

export const metadata = {
  title: 'Crypto homepage',
  description: 'crypto whitepaper',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${space_grotesk.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
