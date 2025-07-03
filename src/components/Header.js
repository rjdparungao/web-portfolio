// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
    <div className="flex justify-center items-center max-w-7xl mx-auto px-8 py-5">
        <nav className="space-x-12 flex">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        </nav>
    </div>
    </header>
  );
}

export default Header;
