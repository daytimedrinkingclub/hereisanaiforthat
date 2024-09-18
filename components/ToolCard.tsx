'use client'
import Link from "next/link";
import { Eye, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge";

interface Tool {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
  views?: number;
  rating?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.2 
    } 
  }
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/home/${tool.id}`);
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="cursor-pointer"
      >
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 md:p-6 rounded-2xl shadow-xl border border-white border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4 shadow-lg">
              {tool.name[0]}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white">{tool.name}</h3>
          </div>
          <p className="text-gray-300 text-xs md:text-sm mb-4 line-clamp-2">
            {tool.description}
          </p>
          <div className="flex flex-wrap justify-between items-center text-xs md:text-sm">
            <Badge variant="outline" className="bg-opacity-20 text-emerald-400 border-emerald-400 mb-2 md:mb-0">
              {tool.category.length > 14 ? `${tool.category.slice(0, 14)}..` : tool.category}
            </Badge>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <Eye size={14} className="mr-1" />
                <span>{tool.views || 0}</span>
              </div>
              <div className="flex items-center">
                <Star size={14} className="mr-1 text-yellow-400" />
                <span>{tool.rating?.toFixed(1) || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}