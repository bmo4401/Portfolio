'use client';
import Detail from '@/components/projects/Detail';
import Container from '@/components/ui/Container';
import Content from '@/components/ui/Content';
import Heading from '@/components/ui/Heading';
import { project1, project2, project3 } from '@/data/projects';
import { motion, useScroll } from 'framer-motion';
import { ElementRef, useRef } from 'react';

const Projects = () => {
  const divRef = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'end 66%'],
  });

  return (
    <Container className="text-forePrimary">
      <Heading title="Personal Projects" />
      <Content>
        <div
          ref={divRef}
          className="w-full px-20 relative"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[52.3%] top-2 w-[4px] h-full dark:bg-forePrimary bg-forePrimary origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between gap-5">
            <Detail type={1} />
            <Detail type={2} />
            <Detail type={3} />
          </ul>
        </div>
      </Content>
    </Container>
  );
};
export default Projects;
