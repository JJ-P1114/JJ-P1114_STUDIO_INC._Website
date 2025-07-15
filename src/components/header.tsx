'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'À Propos', href: '/about' },
  { name: 'Boutique', href: '/shop' },
  { name: 'Nous contacter', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Navigation principale">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-xl font-mono font-bold text-primary">JJ-P1114 STUDIO</Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Ouvrir le menu</span>
          </button>
        </div>

        {/* Navigation principale desktop */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-primary transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Boutons utilisateur à droite */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" type="button">Se connecter</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-mono font-bold text-primary">JJ-P1114</Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="h-6 w-6" />
              <span className="sr-only">Fermer</span>
            </button>
          </div>
          <div className="mt-6 divide-y divide-gray-200">
            <div className="space-y-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-900 hover:text-primary transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost">Se connecter</Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
