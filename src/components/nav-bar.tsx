"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Scissors, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import Image from 'next/image'

const menuItems = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '#services' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Avaliações', href: '#testimonials' },
  { name: 'Contato', href: '#contact' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-1">
          <Link href="/" className="text-2xl font-bold text-white">
            <Image
              width={600}
              height={600}
              alt='Logo Icon'
              src="/images/logo.jpeg"
              className='h-12 sm:h-20 w-full max-w-[179px] md:max-w-[299px]'
            />
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-white">
              <Link href="https://linktr.ee/barbeariakonoha" className='flex items-center'>
                <Scissors className="w-4 h-4 mr-2" />
                Assinar Plano Ilimitado
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className='bg-white text-black hover:bg-gray-800 hover:text-white'
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className='bg-white text-black hover:bg-gray-800 hover:text-white'
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              className="text-foreground ml-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-white mt-6">
                <Link href="https://linktr.ee/barbeariakonoha" className='flex items-center'>
                  <Scissors className="w-4 h-4 mr-2" />
                  Assinar Plano Ilimitado
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}