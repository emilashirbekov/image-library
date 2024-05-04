"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { navItems } from "@/lib/constants/constants";
import { DropdownComponent } from "./DropdownComponent";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar className='bg-transparent' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' className='font-bold text-inherit'>
            <svg
              fill='white'
              className='ayR4i uFlu6'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              version='1.1'
              aria-labelledby='unsplash-home'
              aria-hidden='false'
            >
              <desc lang='en-US'>Unsplash logo</desc>
              <title id='unsplash-home'>Unsplash Home</title>
              <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z'></path>
            </svg>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {navItems.map((item, index) => (
          <NavbarItem key={index + 1}>
            <Link
              color={`${
                item.name === "Sign up" || "Sign in" ? "warning" : "primary"
              }`}
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <DropdownComponent />
      </NavbarContent>

      <NavbarMenu className='bg-transparent'>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${index + 1}`}>
            <Link className='w-full text-white' href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
