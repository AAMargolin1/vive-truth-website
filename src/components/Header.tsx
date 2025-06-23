// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors">
          VIVE Truth
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/simulations" className="hover:text-cyan-400 transition-colors">
            Simulations
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}