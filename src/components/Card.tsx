import Image from 'next/image';
import { Card as ShadcnCard, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface CardProps {
  name: string;
  description: string;
  logo: string;
  rating: number;
}

export function Card({ name, description, logo, rating }: CardProps) {
  return (
    <ShadcnCard className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image src={logo} alt={name} width={400} height={200} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center">
          <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </ShadcnCard>
  );
}