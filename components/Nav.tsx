'use client'

import Link from 'next/link'
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

interface NavDropdownProps {
  label: string
  items: NavItem[]
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='relative bg-background shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <h2 className='text-2xl md:text-4xl font-bold text-[#193D67] dark:text-[#A9C7EA]'>
            Movies
          </h2>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8 text-slate-700 dark:text-slate-300'>
            <NavDropdownMenu label="Movies" items={movieItems} />
            <NavDropdownMenu label="TV Shows" items={tvItems} />
            <NavDropdownMenu label="Actors" items={actorItems} />
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
          <div className='px-2 pt-2 pb-3 space-y-1'>
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