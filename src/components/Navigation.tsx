"use client";

import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/workflow", label: "Workflow" },
    { href: "/setup", label: "Setup" },
    { href: "/predictoor/create", label: "Predictoor" },
    { href: "/trader/create", label: "Trader" },
    { href: "/monitor", label: "Monitor" },
    { href: "/claim", label: "Claim" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Predictoor Bot Runner
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
