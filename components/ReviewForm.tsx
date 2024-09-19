import { submitReview } from '@/utils/supabase/supabaseOperations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// import { LargeNumberLike } from 'node:crypto';
import { useUser } from "@/contexts/UserContext";

export function ReviewForm({ toolId }: { toolId: number }) {
    const { user } = useUser();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rating = parseInt(formData.get('rating') as string);
    const comment = formData.get('comment') as string;
    const userEmail = user?.email as string;

    try {
      await submitReview({ toolId, rating, comment, userEmail });
      console.log('successfully created')
      // Handle successful submission (e.g., show a success message, reset form)
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <div>
        <Label htmlFor="rating">Rating</Label>
        <Input type="number" id="rating" name="rating" min="1" max="5" required />
      </div>
      <div>
        <Label htmlFor="comment">Comment</Label>
        <Textarea id="comment" name="comment" required />
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  );
}