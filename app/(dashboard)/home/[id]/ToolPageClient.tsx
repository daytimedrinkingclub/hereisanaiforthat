'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from "next/link";
import { Star, ExternalLink, MessageSquare, Bookmark, MoreHorizontal, Send } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ReviewForm } from '@/components/ReviewForm';
import { useUser } from '@/hooks/useUser';
import { getReviewsForTool } from '@/utils/supabase/supabaseOperations';

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


interface Tool {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
  author?: {
    name: string;
    avatar: string;
    toolCount: number;
  };
  rating: number;
  ratingCount?: number;
  saveCount?: number;
  user_email: string;
}

interface Review {
  id: number; 
  rating: number;
  comment: string;
  user_email?: string;
  user?: string;
  date?: string;
}
import { useRouter } from 'next/router';
import ToolPageHeader from '@/components/ToolPageHeader';

export default function ToolPageClient({ tool }: { tool: Tool }) {
  // const router = useRouter();
  const { user } = useUser();

  const [imgSrc, setImgSrc] = useState(`/tool-logos/${tool.name.toLowerCase()}.png`);
  const [activeTab, setActiveTab] = useState('overview');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });


  useEffect(() => {
    async function fetchReviews() {
      console.log('Fetching reviews for tool:', tool.id);
      const fetchedReviews = await getReviewsForTool(tool.id);
      console.log('Fetched reviews:', fetchedReviews);
      setReviews(fetchedReviews);
    }
    fetchReviews();
  }, [tool.id]);



  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: reviews.length + 1,
      user: 'Current User', // Replace with actual user data
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString(),
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 0, comment: '' });
  };
  return (
    <div className="flex font-sans bg-gradient-to-br from-[#1e1e2d] to-[#2d2d3d] text-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow max-w-4xl mx-auto p-8"
      >
<ToolPageHeader tool={tool} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex space-x-1 mb-8 bg-[#2a2a3d] rounded-lg p-1"
        >
          {['Overview', 'Reviews', 'Q&A'].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              className={`text-white hover:bg-[#3a3a4d] transition-colors duration-200 ${activeTab === tab.toLowerCase().replace(/\s+/g, '-') ? 'bg-[#3a3a4d]' : ''}`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, '-'))}
            >
              {tab}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{tool.description}</p>
            </motion.div>
          )}
          {activeTab === 'reviews' && (
            <ReviewForm toolId={tool.id} />
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-80 p-8 bg-[#1a1a2d]"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Featured</h2>
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-[#2a2a3d] to-[#3a3a4d] border-none hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Featured Tool</h3>
              <p className="text-sm text-gray-300">An amazing AI-powered tool that revolutionizes your workflow.</p>
              <div className="mt-4 flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-500 text-white">AI</Badge>
                <Star className="text-yellow-400" size={16} />
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}