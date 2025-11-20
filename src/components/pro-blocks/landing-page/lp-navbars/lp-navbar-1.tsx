"use client";

import { Button } from "~/components/ui/button";
import { Menu, X, Search, Bell, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Products", href: "#" },
  { label: "Use cases", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b">
      <div className="container m-auto flex items-center gap-4 px-4 py-3">
        {/* Left: menu + logo */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2">
            <Image src="/images/yt.png" alt="YouTube" width={28} height={28} style={{ display: 'inline-block' }} />
            <span className="hidden text-lg font-semibold md:inline">YouTube</span>
          </Link>
        </div>

        {/* Center: search */}
        <div className="flex-1 px-4">
          <form className="mx-auto max-w-2xl">
            <div className="relative">
              <input
                type="search"
                name="q"
                aria-label="Search"
                placeholder="Search"
                className="w-full rounded-full border bg-transparent py-2 pl-4 pr-14 text-sm shadow-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-sm"
                aria-label="Search"
              >
                <Search />
              </button>
            </div>
          </form>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              <Bell />
            </Button>
          </a>

          <a href="https://www.youtube.com/@NinongRy" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="flex items-center gap-2">
              <User />
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col gap-2 px-4 py-3">
            <NavMenuItems />
            <div className="flex items-center gap-2">
              <Button className="w-full">Get started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
