'use client';
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { Button } from './ui/button';
import { ShoppingCart, Sun, Moon, Menu } from 'lucide-react';
import DropDownAvatar from './DropDownAvatar';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const routes = [
  {
    id: 1,
    label: 'Products',
    link: '/products',
  },
  {
    id: 2,
    label: 'Blog',
    link: '/blog',
  },
  {
    id: 3,
    label: 'Contact',
    link: '/contact',
  },
  {
    id: 4,
    label: 'About',
    link: '/about',
  },
];
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="px-4 py-3 sm:flex sm:justify-between sm:items-center border-b border-gray-500 shadow-lg">
      <Container>
        <div className="flex justify-between items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 md:hidden"></Menu>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex gap-4 flex-col">
                {routes.map((route) => (
                  <Button asChild key={route.id} variant={'ghost'} size={'lg'}>
                    <Link href={route.link}>{route.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold">MY STORE</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
              <Button asChild key={route.id} variant={'ghost'} size={'lg'}>
                <Link href={route.link}>{route.label}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center">
            <Button variant={'ghost'} size={'icon'}>
              <ShoppingCart className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mr-6"
              aria-label="Theme Button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <div className="flex items-center">
              <DropDownAvatar />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
