'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const MotionLink = motion(Link);
const HireMe = () => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <MotionLink
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        className=" w-full h-full flex items-center justify-center rounded-full text-base bg-black text-primary-dark "
        whileHover={{
          backgroundColor: [
            '#000',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#000',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Hire Me
      </MotionLink>
    </div>
  );
};
export default HireMe;
