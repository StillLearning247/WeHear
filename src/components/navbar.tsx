"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart 
                className="h-8 w-8 text-primary" 
                fill="currentColor"
                strokeWidth={1.5}
              />
              <span className="text-2xl font-bold text-primary">WeHear</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/testimonials">Testimonials</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/faqs">FAQs</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <MobileNavLink href="/faqs" onClick={() => setIsOpen(false)}>FAQs</MobileNavLink>
            
            <div className="pt-4 border-t dark:border-gray-800 flex flex-col space-y-3">              
              <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors dark:text-gray-200 dark:hover:bg-gray-800"
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors dark:text-gray-200 dark:hover:bg-gray-800"
    >
      {children}
    </Link>
  );
};

export default Navbar;