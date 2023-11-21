'use client';
import WaterEffect from '@/components/animation/WaterEffect';
import { cn } from '@/libs/utils';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
interface AnimatedTextProps {
  text: string;
  className?: string;
  isWaterEffect?: boolean;
}

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  isWaterEffect = false,
}) => {
  const [animate, setAnimate] = useState<string | undefined>('animate');
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate={animate}
        className={cn(
          'inline-block w-full text-dark font-bold capitalize text-8xl',
          className,
        )}
      >
        {!isWaterEffect ? (
          text.split(' ').map((word, index) => (
            <motion.span
              variants={singleWord}
              key={word + '-' + index}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))
        ) : (
          <motion.span
            variants={singleWord}
            className="inline-block"
          >
            <WaterEffect
              text={text}
              className="relative"
              color="#4338ca"
            />
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
