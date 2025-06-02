'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { ModeToggle } from './ToggleMode'
import { Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { movieItems, tvItems, actorItems, NavItem } from '@/data'
import { useRouter } from 'next/navigation'

interface NavDropdownProps {
  label: string
  items: NavItem[]
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className='relative bg-background shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Image
            className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'
            alt='movie'
            src='./movie-svgrepo-com.svg'
            width={56}
            height={56}
            suppressHydrationWarning
          />

          {/* Search Bar */}
          <form onSubmit={handleSearch} className='flex ml-auto space-x-2'>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search...'
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
            />
            <button type='submit' className='px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer'>
              Search
            </button>
          </form>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-4 text-slate-700 dark:text-slate-300'>
            <Link href="/" className="flex items-center gap-1">
              <Button variant="ghost">Home</Button>
            </Link>
            <NavDropdownMenu label="Movies" items={movieItems} />
            <NavDropdownMenu label="TV Shows" items={tvItems} />
            <NavDropdownMenu label="People" items={actorItems} />
            <ModeToggle />
          </nav>

          {/* Mobile menu button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-background border-t z-40'>
          <div className='px-2 pt-2 pb-3'>
            <Link href="/" className='px-3 py-2'>
              <Button variant="ghost">Home</Button>
            </Link>
            <MobileNavDropdown label="Movies" items={movieItems} />
            <MobileNavDropdown label="TV Shows" items={tvItems} />
            <MobileNavDropdown label="Actors" items={actorItems} />
            <div className='px-3 py-2'>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop Dropdown Menu Component
const NavDropdownMenu: React.FC<NavDropdownProps> = ({ label, items }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="flex items-center gap-1">
        {label}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="z-50">
      {items.map((item) => (
        <DropdownMenuItem key={item.href}>
          <Link href={item.href} className="w-full">
            {item.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)

// Mobile Dropdown Menu Component
const MobileNavDropdown: React.FC<NavDropdownProps> = ({ label, items }) => (
  <div className="px-3 py-2">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50">
        {items.map((item) => (
          <DropdownMenuItem key={item.href}>
            <Link href={item.href} className="w-full">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)

export default Nav