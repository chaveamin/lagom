'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Styles from '@/components/Styles'
import StyleManager from '@/components/StyleManager'
import MenuManager from '@/components/MenuManager'
import DifferentLayout from '@/components/DifferentLayout'
import Order from '@/components/Order'
import Extension from '@/components/Extension'
import Other from '@/components/Other'
import Customer from '@/components/Customer'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Bg from '@/components/Bg'
import FAQ from '@/components/FAQ'
import LiveDemos from '@/components/LiveDemos'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <Bg />
      <Hero onPreviewClick={() => setIsSidebarOpen(true)} />
      <Styles />
      <StyleManager />
      <MenuManager />
      <DifferentLayout />
      <Order />
      <Extension />
      <Other />
      <Customer />
      <Pricing />
      <FAQ />
      <CTA />
      <LiveDemos
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`absolute inset-0 z-20 h-screen bg-black opacity-20 ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      ></div>
    </>
  )
}
