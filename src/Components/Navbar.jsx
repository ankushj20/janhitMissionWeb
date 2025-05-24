import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full bg-[#F1F5F9] border-t-4 border-b-4 border-zinc-400 px-[4vw] py-3">
      
      {/* Container for whole nav */}
      <div className="flex items-center justify-between gap-10">
        
        {/* Left: Home Icon */}
        <Link to="/" className="text-2xl sm:text-3xl font-bold">
          <i className="ri-home-3-line text-[#671C98]"></i>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex  gap-10 items-center">
          <Link to="/humse-miliye" className="text-lg xl:text-3xl text-[#671C98] font-bold">हमसे मिलिये</Link>
          <Link to="/khbar-palika" className="text-lg xl:text-3xl text-[#671C98] font-bold">खबर पालिका</Link>
          <Link to="/mantri-santri" className="text-lg xl:text-3xl text-[#671C98] font-bold">मन्त्री संत्री</Link>
          <Link to="/yah-bhi-padhiye" className="text-lg xl:text-3xl text-[#671C98] font-bold">यह भी पढिये</Link>
          <Link to="/court-kachahri" className="text-lg xl:text-3xl text-[#671C98] font-bold">कोर्ट कचहरी</Link>
          <Link to="/anukarniya" className="text-lg xl:text-3xl text-[#671C98] font-bold">अनुकर्णीय</Link>
          <Link to="/apna-mp" className="text-lg xl:text-3xl text-[#671C98] font-bold">अपना MP</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-3xl text-[#671C98]" onClick={toggleMenu}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="lg:hidden flex  flex-col gap-3 mt-4">
          <Link to="/humse-miliye" className="text-base text-[#671C98] font-bold">हमसे मिलिये</Link>
          <Link to="/khbar-palika" className="text-base text-[#671C98] font-bold">खबर पालिका</Link>
          <Link to="/mantri-santri" className="text-base text-[#671C98] font-bold">मन्त्री संत्री</Link>
          <Link to="/yah-bhi-padhiye" className="text-base text-[#671C98] font-bold">यह भी पढिये</Link>
          <Link to="/court-kachahri" className="text-base text-[#671C98] font-bold">कोर्ट कचहरी</Link>
          <Link to="/anukarniya" className="text-base text-[#671C98] font-bold">अनुकर्णीय</Link>
          <Link to="/apna-mp" className="text-base text-[#671C98] font-bold">अपना MP</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
