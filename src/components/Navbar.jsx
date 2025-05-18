
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">TravelSite</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/booking" className="hover:underline">Booking</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
