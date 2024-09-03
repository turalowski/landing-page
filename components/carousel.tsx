'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  {
    url: '/images/logo/logo-1.svg',
    alt: 'Company logo 1',
  },
  {
    url: '/images/logo/logo-2.svg',
    alt: 'Company logo 2',
  },
  {
    url: '/images/logo/logo-3.svg',
    alt: 'Company logo 3',
  },
  {
    url: '/images/logo/logo-4.svg',
    alt: 'Company logo 4',
  },
  {
    url: '/images/logo/logo-5.svg',
    alt: 'Company logo 5',
  },
  {
    url: '/images/logo/logo-6.svg',
    alt: 'Company logo 6',
  },
  {
    url: '/images/logo/logo-7.svg',
    alt: 'Company logo 7',
  },
  {
    url: '/images/logo/logo-8.svg',
    alt: 'Company logo 8',
  },
  {
    url: '/images/logo/logo-9.svg',
    alt: 'Company logo 9',
  },
  {
    url: '/images/logo/logo-10.svg',
    alt: 'Company logo 10',
  },
];
function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div >
      <div
        className={cn(
          'items-center justify-center flex',
          'text-3xl font-bold',
          'py-10 px-10',
          'bg-gradient-to-r from-blue-500 to-green-300',
          'bg-clip-text text-transparent'
        )}
      >
        More than 100 brands manage their business with us
      </div>
      <div className="grid grid-cols-3 p-4 md:px-10 md:flex md:justify-between">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                scale: index === currentImageIndex ? 1.2 : 1,
              }}
              className='flex items-center justify-center h-30 w-30'
              custom={index}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={100}
                height={100}
                className="object-contain h-20 w-20 items-center justify-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Carousel;
