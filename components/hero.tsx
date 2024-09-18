import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        AI Tools Dictionary
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        Discover and explore the latest AI tools to enhance your productivity and creativity.
      </p>
      <div className="flex justify-center gap-4">
      <Button asChild size="lg">
  <Link href="/tools">Explore AI Tools</Link>
</Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/submit">Submit a Tool</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
