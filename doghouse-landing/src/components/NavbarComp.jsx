import React, { useState } from 'react'
import { Navbar, NavbarContent, NavbarBrand, Button, NavbarItem, Link, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from '@nextui-org/react'

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
          <NavbarBrand>
            <p className="font-bold text-inherit">DogHouse Logo</p>
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