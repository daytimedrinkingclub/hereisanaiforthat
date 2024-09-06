'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

interface AIToolCardProps {
  title: string;
  rating: number;
  description: string;
  // onClick: () => void;  // Add this line
}

const AIToolCard: React.FC<AIToolCardProps> = ({ title, rating, description }) => {


  return (
    <Card 
      className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"  // Add this line
    >
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-gray-500">
              <path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.83L19.13 19H4.87L12 5.83zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
            </svg>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <div className="flex items-center space-x-1">
              {/* {renderStars(rating)} */}
              <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AIToolCard;