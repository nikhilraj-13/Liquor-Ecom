import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart, FaUser, FaHeart,
  FaSearch, FaBars, FaChevronDown, FaTimes
} from 'react-icons/fa';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const categories = [
    {
      label: 'Beers',
      links: [
        { to: '/strong-beer', label: 'Strong Beers' },
        { to: '/mild-beer', label: 'Mild Beers' },
        { to: '/wheat-beer', label: 'Wheat Beers' },
      ],
    },
    {
      label: 'Wine',
      links: [
        { to: '/red-wine', label: 'Red Wine' },
        { to: '/white-wine', label: 'White Wine' },
        { to: '/sparkling-wine', label: 'Sparkling Wine' },
        { to: '/rose-wine', label: 'Rosé Wine' },
      ],
    },
    {
      label: 'Spirits',
      links: [
        { to: '/indian-whiskey', label: 'Indian Whiskey' },
        { to: '/whiskey', label: 'Whiskey' },
        { to: '/vodka', label: 'Vodka' },
        { to: '/rum', label: 'Rum' },
        { to: '/gin', label: 'Gin' },
      ],
    },
    {
      label: 'Extras',
      links: [
        { to: '/mixers', label: 'Mixers' },
        { to: '/glasses', label: 'Glasses' },
      ],
    },
  ];

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50 w-full">

      {/* ── Top Row ── */}
      <div className="flex items-center justify-between gap-3 px-6 py-3 flex-wrap">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold items-center text-amber-400 tracking-wide shrink-0 font-serif"
        >
            <div className='w-10 h-8 pl-4px items-center'>
                <img src="https://res.cloudinary.com/dkiez6yqc/image/upload/v1775704475/DrinkDesk_logo_with_laptop_and_bottle_rmrwy8.png" alt="" />
            </div>
            <span className='text-white'>Drink</span> Desk
        </Link>

        {/* Search Bar */}
        <div className="flex items-stretch bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden flex-1 max-w-lg min-w-[180px] order-3 md:order-none">
          <input
            type="text"
            placeholder="Search beers, wines, spirits…"
            className="bg-transparent outline-none px-4 py-2 text-sm text-neutral-300 placeholder-neutral-500 w-full"
          />
          <button className="bg-amber-400 hover:bg-amber-500 px-4 text-neutral-900 transition-colors shrink-0 flex items-center justify-center">
            <FaSearch size={13} />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1 shrink-0">

          <Link
            to="/profile"
            className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <FaUser size={14} />
            <span className="hidden sm:inline">Profile</span>
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <FaHeart size={14} />
            <span className="hidden sm:inline">Saved</span>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors text-sm relative"
          >
            <FaShoppingCart size={14} />
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-amber-400 text-neutral-900 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
              0
            </span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden border border-neutral-700 rounded-lg p-2 text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 ml-1 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* ── Bottom Row: Desktop ── */}
      <div className="hidden lg:flex items-center  px-4 border-t border-neutral-800 bg-neutral-900 overflow-x-auto">

        {/* Deals */}
        <Link
          to="/deals"
          className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-amber-400 border-b-2 border-amber-400 whitespace-nowrap"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
          Deals
        </Link>

        {/* Category Dropdowns */}
        {categories.map(({ label, links }) => (
          <div key={label} className="relative group">
            <button className="flex items-center gap-1.5 px-4 py-3 text-sm text-neutral-400 hover:text-amber-400 border-b-2 border-transparent group-hover:border-amber-400 transition-colors whitespace-nowrap font-medium">
              {label}
              <FaChevronDown size={9} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 min-w-[170px] bg-neutral-950 border border-neutral-700 rounded-b-lg rounded-tr-lg py-1.5 z-50 hidden group-hover:block shadow-xl">
              {links.map(({ to, label: l }) => (
                <Link
                  key={to}
                  to={to}
                  className="block px-4 py-2 text-sm text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Static Links */}
        {[
          { to: '/most-popular', label: 'Most Popular' },
          { to: '/my-order', label: 'My Order' },
          { to: '/blogs', label: 'Blogs' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="px-4 py-3 text-sm text-neutral-400 hover:text-amber-400 border-b-2 border-transparent hover:border-amber-400 transition-colors whitespace-nowrap font-medium"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-neutral-950 border-t border-neutral-800 px-5 py-4 flex flex-col gap-1">

          <p className="text-xs text-neutral-600 uppercase tracking-widest pb-2 font-semibold">
            Categories
          </p>

          <Link
            to="/deals"
            className="px-3 py-2.5 text-sm font-medium text-amber-400 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            Deals
          </Link>

          {categories.map(({ label, links }) => (
            <div key={label}>
              <button
                onClick={() => toggleDropdown(label)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 rounded-lg transition-colors"
              >
                {label}
                <FaChevronDown
                  size={10}
                  className={`transition-transform duration-200 ${openDropdown === label ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === label && (
                <div className="ml-3 mt-0.5 flex flex-col border-l border-neutral-800 pl-3">
                  {links.map(({ to, label: l }) => (
                    <Link
                      key={to}
                      to={to}
                      className="block px-3 py-2 text-sm text-neutral-500 hover:text-amber-400 hover:bg-neutral-800 rounded-lg transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <p className="text-xs text-neutral-600 uppercase tracking-widest pb-2 pt-3 font-semibold">
            Explore
          </p>

          {[
            { to: '/most-popular', label: 'Most Popular' },
            { to: '/my-order', label: 'My Order' },
            { to: '/blogs', label: 'Blogs' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-3 py-2.5 text-sm font-medium text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}