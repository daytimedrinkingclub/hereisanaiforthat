'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Search, Plane, Star, Users, CheckSquare, PlusSquare, Phone } from 'lucide-react';

const sidebarLinks = [
  { icon: Home, text: 'Home', href: '/', color: 'text-blue-400' },
  { icon: Search, text: 'Search', href: '/', color: 'text-green-400' },
//   { icon: Plane, text: 'Just launched', href: '/dashboard/just-launched', color: 'text-yellow-400' },
//   { icon: Star, text: 'Featured', href: '/dashboard/featured', color: 'text-purple-400' },
//   { icon: Users, text: 'Popular', href: '/dashboard/popular', color: 'text-pink-400' },
//   { icon: CheckSquare, text: 'Tasks', href: '/dashboard/tasks', color: 'text-indigo-400' },
//   { icon: PlusSquare, text: 'Submit / Advertise', href: '/dashboard/submit', color: 'text-red-400' },
//   { icon: Phone, text: 'Contact us', href: '/dashboard/contact', color: 'text-teal-400' },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ width: 64 }}
      animate={{ width: isExpanded ? 250 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="bg-gradient-to-b from-[#2a2d3e] to-[#24283b] shadow-lg fixed h-full overflow-hidden flex flex-col"
    >
      <nav className="flex-grow flex flex-col space-y-2 py-4">
        {sidebarLinks.map((link) => (
          <Link key={link.text} href={link.href}>
            <motion.div
              className={`flex items-center space-x-2 py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                isExpanded ? 'hover:bg-[#373b44]' : 'hover:bg-opacity-50 hover:bg-white'
              }`}
            >
              <link.icon size={24} className={`${link.color} transition-colors duration-300 ease-in-out`} />
              {isExpanded && (
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
            </motion.div>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}