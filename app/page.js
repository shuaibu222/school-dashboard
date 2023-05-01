import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['devanagari'], weight: '400' });

export default function Home() {
  return (
    <main className={inter.className}>
      <h3>Dashboard</h3>
    </main>
  );
}
