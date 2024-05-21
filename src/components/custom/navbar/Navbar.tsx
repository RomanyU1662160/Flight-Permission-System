'use client';
import React from 'react';
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navigationLinks } from './navbarLinks';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <div className=' decoration-clone fps-theme p-4 mb-2 rounded-sm '>
        <NavigationMenu className=''>
          <NavigationMenuViewport />
          <Link href='/' legacyBehavior passHref>
            <div className=''>
              <Image
                className='cursor-pointer rounded-full fade-in-90 mr-5'
                src='/logo4.jpeg'
                alt='logo'
                width={100}
                height={100}
              />
            </div>
          </Link>

          <NavigationMenuList>
            {navigationLinks.map((link) => {
              if (link.isDirectLink) {
                return (
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()}`}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  '>
                        {link.children?.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

export default Navbar;
