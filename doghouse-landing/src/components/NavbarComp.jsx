import React, { useState } from 'react'
import { Navbar, NavbarContent, NavbarBrand, Button, NavbarItem, Link, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from '@nextui-org/react'

import doghouseLogo from '../assets/logos/doghouse_studios_logo.png';

const NavbarComp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Games",
        "News",
        "Merch",
        "About",
        "Careers",
        "Contact",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#1A1A1A] h-[100px] z-40 text-white drop-shadow-lg">
        <NavbarContent>
          <NavbarBrand className="flex flex-row items-center uppercase font-black leading-[95%]">
            <img src={doghouseLogo} className="w-24 h-24" />
            <div className="flex flex-col text-start">
                <p>DogHouse</p>
                <p>Studios</p>
            </div>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent justify="end">
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden z-50"
            />
        </NavbarContent>
        <NavbarMenu className="flex justify-center items-center bg-[#1A1A1A]/90 gap-y-4 uppercase z-50 backdrop-blur-md">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-white font-black text-4xl"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
}

export default NavbarComp