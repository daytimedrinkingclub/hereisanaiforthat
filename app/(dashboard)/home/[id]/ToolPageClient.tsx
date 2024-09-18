'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, Star, ExternalLink, ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Tool {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
  views?: number;
  rating?: number;
}

export default function ToolPageClient({ tool }: { tool: Tool }) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-20">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="text-emerald-400 hover:text-black mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Tools
      </Button>
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg">
          {tool.name[0]}
        </div>
        <h1 className="text-4xl font-bold text-white">{tool.name}</h1>
      </div>
      <p className="text-xl text-gray-300 mb-6">{tool.description}</p>
      <div className="flex items-center space-x-4 mb-6">
        <Badge variant="outline" className="bg-opacity-20 text-emerald-400 border-emerald-400 text-sm px-3 py-1">
          {tool.category}
        </Badge>
        <div className="flex items-center text-gray-300">
          <Eye size={18} className="mr-2" />
          <span>{tool.views || 0} views</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Star size={18} className="mr-2 text-yellow-400" />
          <span>{tool.rating?.toFixed(1) || 'N/A'} rating</span>
        </div>
      </div>
      <Button
        asChild
        className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold hover:from-emerald-500 hover:to-teal-600 transition duration-300 ease-in-out"
      >
        <Link
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
          <ExternalLink size={18} className="ml-2" />
        </Link>
      </Button>
    </div>
  );
}