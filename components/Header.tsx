// components/AppNavbar.js

import React from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';

const menuItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
  'Log Out',
];

const AppNavbar = async () => {
  const user = await checkUser();

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label="Open menu" />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Eagles Ring</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Eagles</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
