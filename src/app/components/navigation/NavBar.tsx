'use client';

import Link from 'next/link';
import { Color } from '@/app/types/colors';
import { useState, useRef, useEffect } from 'react';

type Props = {
  color: Color;
};

// TODO: change CV link

export default function NavBar(props: Props) {
  const color = props.color;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
      } else {
        menuRef.current.style.height = '0';
      }
    }
  }, [isMenuOpen]);

  return (
    <nav className={`flex items-center justify-between flex-wrap bg-${color}`}>
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded-sm hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      <div
        ref={menuRef}
        className={`w-full block grow lg:flex lg:items-center lg:w-auto text-sm nav-menu ${
          isMenuOpen ? 'open' : ''
        }`}
      >
        <div className="lg:grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            Home
          </Link>
          <Link
            href="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Projects
          </Link>
          <Link
            href="/about_me"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            About me
          </Link>
          <Link href="/#contact" className="block mt-4 lg:inline-block lg:mt-0">
            Contact
          </Link>
        </div>
        <div className="mt-4 mb-2 lg:my-0">
          <button onClick={() => window.open('cv/rosa_van_der_heide.pdf')}>
            Download CV
          </button>
        </div>
      </div>
      <style jsx>{`
        .nav-menu {
          transition: height 0.3s ease;
          overflow: hidden;
          height: 0;
        }

        .nav-menu.open {
          height: auto;
        }

        @media (min-width: 1024px) {
          .nav-menu {
            height: inherit !important;
          }
        }
      `}</style>
    </nav>
  );
}
