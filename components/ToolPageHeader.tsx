'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageSquare, Bookmark, MoreHorizontal } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Tool {
  id: number;
  name: string;
  link: string;
  category: string;
  author?: {
    name: string;
    avatar: string;
  };
  rating: number;
  ratingCount?: number;
  saveCount?: number;
  user_email: string;
}

interface ToolPageHeaderProps {
  tool: Tool;
}

export default function ToolPageHeader({ tool }: ToolPageHeaderProps) {
  const [imgSrc, setImgSrc] = useState(`https://picsum.photos/80/80?random=${tool.id}`);

  return (
    <div className="mb-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div className="flex items-center">
          <Image
            src={imgSrc}
            alt={tool.name}
            width={80}
            height={80}
            className="rounded-2xl mr-6 shadow-lg"
            onError={() => setImgSrc('https://picsum.photos/80/80?random=default')}
          />
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {tool.name}
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link href={tool.link} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Visit website
              <ExternalLink size={18} className="ml-2" />
            </Button>
          </Link>
          <Button variant="secondary" size="lg" className="bg-green-600 hover:bg-green-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#3a3a4d] transition-colors duration-200">
            <Bookmark size={22} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-[#3a3a4d] transition-colors duration-200">
            <MoreHorizontal size={22} />
          </Button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center mt-6 space-x-6"
      >
        <Badge 
          variant="secondary" 
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm px-4 py-1 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {tool.category}
        </Badge>
        <div className="flex items-center">
          <Star size={18} className="text-yellow-400 mr-2" />
          <span className="text-lg font-semibold">
            {tool.rating ? tool.rating.toFixed(1) : 'N/A'} 
            <span className="text-gray-400 ml-1">({tool.ratingCount || 0})</span>
          </span>
        </div>
        <div className="flex items-center text-gray-400">
          <Bookmark size={18} className="mr-2" />
          <span className="text-lg">{tool.saveCount || 0}</span>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center mt-6"
      >
        {tool.author && tool.author.avatar && (
          <Image
            src={tool.author.avatar}
            alt={tool.author.name || 'Author'}
            width={32}
            height={32}
            className="rounded-full mr-3 border-2 border-purple-500"
          />
        )}
        <span className="text-lg text-gray-300">
          {tool.user_email ? (
            <>
              {tool.user_email} •
            </>
          ) : (
            'Unknown Author'
          )}
        </span>
        <Button variant="ghost" size="sm" className="ml-6 hover:bg-[#3a3a4d] transition-colors duration-200">
          <MessageSquare size={18} className="mr-2" />
          Message
        </Button>
      </motion.div>
    </div>
  );
}