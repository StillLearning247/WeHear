import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2">
              <Heart 
                className="h-6 w-6 text-primary" 
                fill="currentColor"
                strokeWidth={1.5}
              />
              <span className="text-xl font-bold text-primary">WeHear</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Providing compassionate and professional care services for the elderly since 2020. Your loved ones deserve the best care.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialLink href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/faqs">FAQs</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (555) 123-4567
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  contact@wehear.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  123 Care Street, Wellness City, CA 90210
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <div className="mt-4">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                  placeholder="Enter your email"
                />
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} WeHear. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/accessibility">Accessibility</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children, ...props }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
      {...props}
    >
      {children}
    </a>
  );
};

export default Footer;