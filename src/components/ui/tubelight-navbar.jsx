"use client";
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function NavBar({
  items,
  className
}) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    const sections = items.map(item => document.querySelector(item.url))
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const activeItem = items.find(item => item.url === `#${sectionId}`)
          if (activeItem) {
            setActiveTab(activeItem.name)
          }
        }
      })
    }, { threshold: 0.5 })

    sections.forEach(section => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [items])

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center gap-3 py-1 px-1 rounded-full">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-black px-6 py-2 rounded-full transition-all",
                "text-[#842efe]/80 hover:text-[#842efe] hover:drop-shadow-[0_0_10px_#842efe]",
                isActive && "text-[#842efe] drop-shadow-[0_0_10px_#842efe] bg-transparent"
              )}>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#842efe]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}>
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#842efe] rounded-t-full">
                    <div
                      className="absolute w-12 h-6 bg-[#842efe]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#842efe]/20 rounded-full blur-md -top-1" />
                    <div
                      className="absolute w-4 h-4 bg-[#842efe]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
