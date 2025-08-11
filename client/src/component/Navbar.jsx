import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { MenuIcon, SearchIcon } from 'lucide-react';
import { assets } from '../assets/assets';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser
} from '@clerk/clerk-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-black/70 backdrop-blur'>

        <Link to='/' className='max-md:flex-1'>
          <img src={assets.logo} alt="" className='w-36 h-auto' />
        </Link>

        <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-md:w-full' : 'max-md:hidden'}`}>
          <XMarkIcon
            className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'
            onClick={() => setMenuOpen(false)}
          />

          {[
            { path: '/', label: 'Home' },
            { path: '/movies', label: 'Movies' },
            { path: '/theaters', label: 'Theaters' },
            { path: '/releases', label: 'Releases' },
            { path: '/favorite', label: 'Favorites' }
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`relative group transition duration-200 ${
                isActive(link.path)
                  ? 'text-primary font-semibold underline underline-offset-4'
                  : 'text-white/90'
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* 👇 My Bookings link only when user is signed in */}
          <SignedIn>
            <Link
              to="/my-bookings"
              onClick={() => setMenuOpen(false)}
              className={`relative group transition duration-200 ${
                isActive('/my-bookings')
                  ? 'text-primary font-semibold underline underline-offset-4'
                  : 'text-white/90'
              }`}
            >
              My Bookings
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </SignedIn>
        </div>

        <div className='flex items-center gap-8'>

          <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />

          <SignedOut>
            <SignInButton>
              <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {!menuOpen && (
            <MenuIcon
              className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer'
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
