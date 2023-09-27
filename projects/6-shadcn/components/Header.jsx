'use client';
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import DropdownAvatar from './DropdownMenu';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const routes = [
  {
    id: 1,
    label: 'Home',
    link: '/',
  },
  {
    id: 2,
    label: 'Products',
    link: '/products',
  },
  {
    id: 3,
    label: 'Categories',
    link: '/categories',
  },
  {
    id: 4,
    label: 'On Sale',
    link: '/onsale',
  },
];
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="px-4 py-3 sm:flex sm:justify-between sm:items-center border-b border-gray-800 shadow-lg">
      <Container>
        <div className="flex items-center h-16 justify-between">
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Button key={route.id} asChild variant="ghost">
                      <Link href={route.link}>{route.label}</Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold">STORE NAME</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
              <Button key={route.id} asChild variant="ghost">
                <Link href={route.link}>{route.label}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
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
            <DropdownAvatar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
