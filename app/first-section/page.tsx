import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

const FirstSection = () => {
  return (
    <section
      className={cn(
        'bg-gradient-to-r from-gray-100 to-gray-200',
        'py-10 md:py-20',
        'space-y-10'
      )}
    >
      <div className="container mx-auto text-center">
        <div
          className={cn(
            'text-4xl md:text-6px font-bold',
            'flex justify-center',
            'md:px-20 pb-10',
            'bg-gradient-to-r from-blue-500 to-green-300',
            'bg-clip-text text-transparent'
          )}
        >
          Start to centralize management of your business in a second
        </div>
        <p className="text-lg md:text-xl mb-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold">
          Experience the power of centralized control at your fingertips.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-blue-500 hover:bg-blue-900" size="lg">
            Get Started
          </Button>
          <Button className="bg-gray-700" size="lg">
            Learn More
          </Button>
        </div>
        <div className="pt-10 px-3">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="content/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
