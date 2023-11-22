'use client';
import ProjectImageInfo from '@/components/projects/ProjectImageInfo';
import Project1 from '@/components/projects/list/Project1';
import CircleIcon from '@/components/ui/icon/CircleIcon';
import { motion } from 'framer-motion';
import { ElementRef, useEffect, useRef, useState } from 'react';
import Project2 from '@/components/projects/list/Project2';
import Project3 from '@/components/projects/list/Project3';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

type Type = 1 | 2 | 3;
export interface DetailProps {
  type: Type;
}
const Detail: React.FC<DetailProps> = ({ type }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const liRef = useRef<ElementRef<'li'>>(null);
  if (!isMounted) return null;

  return (
    <div className="w-full flex justify-between">
      <li
        ref={liRef}
        className="w-full flex  items-center  justify-around   relative "
      >
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-1/3"
        >
          {type === 1 && <Project1 />}
          {type === 2 && <Project2 />}
          {type === 3 && <Project3 />}
        </motion.div>
        <div className="absolute left-1/2 top-1 ">
          {' '}
          <CircleIcon reference={liRef} />
        </div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-[40%]"
        >
          <ProjectImageInfo type={type} />
        </motion.div>
      </li>
    </div>
  );
};
export default Detail;
