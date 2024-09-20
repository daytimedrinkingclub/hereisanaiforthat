import React, { useState, useEffect } from 'react';
import { submitReview, getReviewsForTool } from '@/utils/supabase/supabaseOperations';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from "@/contexts/UserContext";
import { Star, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  id: number;
  rating: number;
  comment: string;
  user_email?: string;
  user?: string;
  date?: string;
}

export function ReviewForm({ toolId }: { toolId: number }) {
  const { user } = useUser();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    async function fetchReviews() {
      const fetchedReviews = await getReviewsForTool(toolId);
      setReviews(fetchedReviews);
    }
    fetchReviews();
  }, [toolId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userEmail = user?.email as string;

    setLoading(true); // Set loading to true on submit
    try {
      await submitReview({ toolId, rating: newReview.rating, comment: newReview.comment, userEmail });
      console.log('Review submitted successfully');
      // Refresh reviews after submission
      const updatedReviews = await getReviewsForTool(toolId);
      setReviews(updatedReviews);
      // Reset form
      setNewReview({ rating: 0, comment: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mt-8"
    >
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>
      <Card className="bg-gradient-to-br from-[#2a2a3d] to-[#3a3a4d] border-none mb-8 shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4 text-white">Write a Review</h3>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={32}
                  className={`cursor-pointer transition-colors duration-200 ${
                    star <= newReview.rating ? 'text-yellow-400' : 'text-gray-400'
                  } hover:text-yellow-300`}
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                />
              ))}
            </div>
            <Textarea
              placeholder="Write your review here..."
              className="mb-4 bg-[#4a4a5d] border-none text-white placeholder-gray-400 resize-none h-32"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            />
            <Button 
              type="submit" 
              className={`bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Submit Review'} <Send size={16} className="ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-gradient-to-br from-[#2a2a3d] to-[#3a3a4d] border-none shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-lg text-gray-40 -0">{review.user || review.user_email}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={star <= review.rating ? 'text-yellow-400' : 'text-gray-400'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-3">{review.comment}</p>
              <span className="text-sm text-gray-400 block">
                {review.date && new Date(review.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}