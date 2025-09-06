"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"; // adjust import path
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import DarkModeToggle from "./darkmodetoggle";

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  // List of social icons storing the component itself
  const socialIcons = [
    {
      icon: IconBrandGithub, // store the component itself
      link: "https://github.com/CodeWithMLamarti",
    },
    {
      icon: IconBrandX,
      link: "https://x.com/yourprofile",
    },
    {
      icon: IconBrandLinkedin,
      link: "https://linkedin.com/in/yourprofile",
    },
  ];

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks} />

        <div className="flex items-center space-x-4">
          {socialIcons.map(({ icon: Icon, link }, i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className="h-5 w-5 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors" />
            </a>
          ))}

          <DarkModeToggle />

          {/* <NavbarButton href="/signup">Get Started</NavbarButton> */}
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="w-full px-4 py-2 text-lg text-gray-700 dark:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Social icons for mobile */}
          <div className="flex items-center space-x-4 mt-4 px-4">
            {socialIcons.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
            <DarkModeToggle />
          </div>

          {/* <NavbarButton href="/signup" className="w-full text-center mt-4">
            Get Started
          </NavbarButton> */}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
