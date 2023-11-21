'use client';
import { motion, useScroll } from 'framer-motion';
import { RefObject } from 'react';
interface CircleIconProps {
  reference: RefObject<HTMLLIElement>;
}
const CircleIcon: React.FC<CircleIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['start end', 'end 66%'],
  });

  return (
    <figure className=" stroke-forePrimary">
      <svg
        className="-rotate-90"
        width={75}
        height={75}
        viewBox="0 0 100 100"
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-forePrimary stroke-1 fill-none"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className=" stroke-[5px] fill-white"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="animate-pulse stroke-1 fill-forePrimary"
        />
      </svg>
    </figure>
  );
};
export default CircleIcon;
