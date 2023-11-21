'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
const MotionLink = motion(Link);
const HireMe = () => {
  const { mode } = useThemeSwitcher();
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <MotionLink
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        className=" w-full h-full flex items-center justify-center rounded-full text-base dark:bg-black bg-primary-dark"
        whileHover={{
          backgroundColor: [
            mode === 'dark' ? '#000' : '#fff',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            mode === 'dark' ? '#000' : '#fff',
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
