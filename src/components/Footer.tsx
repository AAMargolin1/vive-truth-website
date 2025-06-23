// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
      <p>© {currentYear} VIVE Truth. All rights reserved.</p>
    </footer>
  );
}