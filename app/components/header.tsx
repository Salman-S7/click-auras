"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: { label: string; href: string }[] = [
    { label: "Our Work", href: "#our-work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ];

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const linkClasses = (href: string) =>
    `text-sm font-medium px-3 py-1 rounded-full transition ${
      href === pathname
        ? "bg-white text-black"
        : "hover:bg-gray-100 hover:text-black"
    }`;

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpeg" alt="Logo" width={50} height={50} />
          <span className="text-sm font-light">Click Auras</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-4">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClasses(href)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#audit"
          className="hidden md:inline-block text-sm font-medium bg-white text-black px-4 py-1.5 rounded-full hover:opacity-80 transition"
        >
          Book Audit
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 h-[100vh]  bg-black backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          >
            {/* Mobile drawer */}
            <div className="fixed inset-0 pt-24 md:hidden flex flex-col items-center gap-6 z-50">
              {/* Close button */}
              <button
                aria-label="Close menu"
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="#audit"
                className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:opacity-80 transition"
              >
                Book Audit
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
