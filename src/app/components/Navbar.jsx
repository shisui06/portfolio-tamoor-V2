"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', url: '#home', icon: Home },
    { name: 'À propos', url: '#about', icon: User },
    { name: 'Projets', url: '#projects', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: FileText }
  ];

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-bold">
          Tamoor.
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[#842efe] text-[#842efe] hover:text-[#842efe] hover:border-[#842efe] relative overflow-hidden"
            >
              <Bars3Icon className="h-5 w-5" />
              <span className="absolute inset-0 bg-[#842efe] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute inset-0 border border-[#842efe] rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[#842efe] text-[#842efe] hover:text-[#842efe] hover:border-[#842efe] relative overflow-hidden"
            >
              <XMarkIcon className="h-5 w-5" />
              <span className="absolute inset-0 bg-[#842efe] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute inset-0 border border-[#842efe] rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <NavBar items={navItems} className="text-[#842efe]" />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navItems} /> : null}
    </nav>
  );
};

export default Navbar;
