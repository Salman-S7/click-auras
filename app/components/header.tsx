import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpeg" alt="Logo" width={50} height={50} />
          <span className="text-sm font-light">Click Auras</span>
        </Link>
      </div>

      <nav className="hidden md:flex gap-4">
        <Link
          href="#our-work"
          className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
        >
          Our Work
        </Link>
        <Link
          href="#process"
          className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
        >
          Process
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-100 hover:text-black transition"
        >
          About
        </Link>
      </nav>

      <Link
        href="#audit"
        className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-full hover:opacity-80 transition"
      >
        Book Audit
      </Link>
    </header>
  );
}
