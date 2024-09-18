'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, Plane, Star, Users, CheckSquare, PlusSquare, Mail, Phone, Bell, Eye, User, Settings, LogOut, Image, BarChart2 } from 'lucide-react'
import { Tooltip } from 'react-tooltip'

const DashboardPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const sidebarLinks = [
    { icon: Home, text: 'Home', color: 'text-blue-400' },
    { icon: Search, text: 'Search', color: 'text-green-400' },
    { icon: Plane, text: 'Just launched', color: 'text-yellow-400' },
    { icon: Star, text: 'Featured', color: 'text-purple-400' },
    { icon: Users, text: 'Popular', color: 'text-pink-400' },
    { icon: CheckSquare, text: 'Tasks', color: 'text-indigo-400' },
    { icon: PlusSquare, text: 'Submit / Advertise', color: 'text-red-400' },
    { icon: Phone, text: 'Contact us', color: 'text-teal-400' },
  ]

  return (
    <div className="flex min-h-screen bg-[#1a1b26] text-white font-sans">
      {/* Sidebar */}
      <motion.div
        initial={{ width: 64 }}
        animate={{ width: isSidebarExpanded ? 250 : 64 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setIsSidebarExpanded(true)}
        onMouseLeave={() => setIsSidebarExpanded(false)}
        className="bg-gradient-to-b from-[#2a2d3e] to-[#24283b] shadow-lg fixed h-full overflow-hidden flex flex-col"
      > 
        <nav className="flex-grow flex flex-col space-y-2 py-4">
          {sidebarLinks.map((link, index) => (
            <motion.div
              key={link.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex items-center space-x-2 py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                isSidebarExpanded ? 'hover:bg-[#373b44]' : 'hover:bg-opacity-50 hover:bg-white'
              }`}
              data-tooltip-id={`tooltip-${link.text}`}
              data-tooltip-content={link.text}
            >
              <link.icon size={24} className={`${link.color} transition-colors duration-300 ease-in-out`} />
              <AnimatePresence>
                {isSidebarExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`whitespace-nowrap overflow-hidden text-sm font-medium ${link.color}`}
                  >
                    {link.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </nav>
        <Tooltip id="tooltip-sidebar" />
      </motion.div>

      {/* Main content */}
      <div className="flex-1 ml-16 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* User profile */}
          <div className="flex justify-end items-center mb-12">
            <Bell size={20} className="mr-4 text-gray-400 cursor-pointer hover:text-white transition-colors" />
            <div 
              ref={profileRef}
              className="relative"
              onMouseEnter={() => setIsProfileDropdownOpen(true)}
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                <span className="text-sm font-bold">AL</span>
              </div>
              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-[#24283b] rounded-md shadow-lg py-3 z-10"
                  >
                    <div className="px-4 py-2 border-b border-gray-700">
                      <p className="text-sm font-semibold">Aditya Lingwal</p>
                      <p className="text-xs text-gray-400">0 tools | 0 karma</p>
                    </div>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#373b44] flex items-center">
                        <User size={20} className="mr-3" /> Profile
                      </a>
                    </div>
                    <div className="py-2 border-t border-gray-700">
                      <p className="px-4 py-1 text-xs text-gray-500 uppercase">For You</p>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#373b44] flex items-center">
                        <Image size={20} className="mr-3" /> Gallery
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#373b44] flex items-center">
                        <BarChart2 size={20} className="mr-3" /> Dashboard
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#373b44] flex items-center">
                        <Mail size={20} className="mr-3" /> Inbox
                      </a>
                    </div>
                    <div className="py-2 border-t border-gray-700">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#373b44] flex items-center">
                        <Settings size={20} className="mr-3" /> Settings
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#373b44] flex items-center">
                        <LogOut size={20} className="mr-3" /> Log out
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <h1 className="text-7xl font-extrabold mb-4 text-center tracking-tight">HERE'S AN AI FOR THAT</h1>

          <div className="relative mb-10">
            <input
              type="text"
              placeholder="Find AIs using AI"
              className="w-full bg-[#24283b] text-white border border-gray-700 rounded-full py-4 px-6 pl-14 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-lg"
            />
            <Search className="absolute left-5 top-4 text-gray-400" size={24} />
          </div>

          <div className="flex items-center mb-8">
            <Users className="text-gray-400 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Most Popular</h2>
            <span className="ml-auto text-gray-400 text-2xl font-semibold">Featured</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Imagetocaptio...', icon: '🖼️', description: 'Image captions', pricing: 'Free + from $9.99/mo', views: '1,692', rating: '4.0' },
              { name: 'Godmode', icon: '⚡', description: 'AutoGPT', pricing: 'No pricing', views: '6,230', rating: '3.2' },
              { name: 'NSFW JS', icon: '🔥', description: 'NSFW image det...', pricing: 'Free', views: '748', rating: '2.4' },
              { name: 'Photo AI', icon: '📷', description: 'Images', pricing: 'Free + from $9/mo', views: '2,367', rating: '2.7' },
              { name: 'Generated Pho...', icon: '👤', description: 'Whole body imag...', pricing: 'From $19.99/mo', views: '1,164', rating: '4.0' },
              { name: 'Text to Video AI', icon: '🎥', description: 'Videos', pricing: 'No pricing', views: '3,605', rating: '1.6' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#24283b] p-5 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3 flex items-center">
                  {item.description} <span className="ml-2 text-yellow-400">🔔</span>
                </p>
                <p className="text-gray-500 text-sm mb-3">{item.pricing}</p>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span className="flex items-center"><Eye size={16} className="mr-1" /> {item.views}</span>
                  <span className="flex items-center">⭐ {item.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardPage


