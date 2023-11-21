import { RingProps } from '@/components/(skills)/Skill';
import NestJS from '@/components/(skills)/items/NestJS';
import NextJS from '@/components/(skills)/items/NextJS';
import CSS3 from '@/components/(skills)/items/CSS3';
import Tailwind from '@/components/(skills)/items/Tailwind';
import ReactJS from '@/components/(skills)/items/ReactJS';
import HTML from '@/components/(skills)/items/HTML';
import TS from '@/components/(skills)/items/TS';
import Graphql from '@/components/(skills)/items/Graphql';
import VueJS from '@/components/(skills)/items/VueJS';

const positionRing = {
  css3: { top: 323, left: 723 },
  nextjs: { top: 293, left: 693 },
  nestjs: { top: 263, left: 663 },
  tailwind: { top: 233, left: 633 },
  reactjs: { top: 203, left: 603 },
  html: { top: 173, left: 573 },
  ts: { top: 143, left: 543 },
  graphql: { top: 113, left: 513 },
  /*   vuejs: { top: 83, left: 483 }, */
};

const positionObject = {
  css3: { top: 10, left: 10 },
  nextjs: { top: 101, left: 212 },
  nestjs: {
    top: 40,
    left: 5,
  },
  tailwind: { top: 60, left: 305 },
  reactjs: {
    top: 70,
    left: 5,
  },
  html: {
    top: 56,
    left: 30,
  },
  ts: {
    top: -23,
    left: 276,
  },
  graphql: {
    top: 498,
    left: 76,
  },
  vuejs: {
    top: 208,
    left: -10,
  },
};

const duration = {
  css3: 16,
  nextjs: 13,
  nestjs: 14,
  tailwind: 8,
  reactjs: 12,
  html: 13,
  ts: 15,
  graphql: 8,
  /*   vuejs: 9, */
};

export const skills: RingProps[] = [
  /* CSS3 */
  {
    name: 'CSS3',
    ring: {
      size: {
        width: 180,
      },
      position: positionRing.css3,
    },
    target: {
      children: <CSS3 />,

      position: positionObject.css3,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.css3,
    link: 'https://www.w3schools.com/css/',
  },
  /* NestJS */
  {
    name: 'NextJS',
    ring: {
      size: {
        width: 240,
      },
      position: positionRing.nextjs,
    },
    target: {
      children: <NextJS />,
      position: positionObject.nextjs,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.nextjs,
    link: 'https://nextjs.org',
  },
  /* NestJS */
  {
    name: 'NestJS',
    ring: {
      size: {
        width: 300,
      },
      position: positionRing.nestjs,
    },
    target: {
      children: <NestJS />,
      position: positionObject.nestjs,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.nestjs,
    link: 'https://nestjs.com',
  },
  /* Tailwind */
  {
    name: 'TailwindCSS',
    ring: {
      size: {
        width: 360,
      },
      position: positionRing.tailwind,
    },
    target: {
      children: <Tailwind />,
      position: positionObject.tailwind,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.tailwind,
    link: 'https://tailwindcss.com',
  },
  /* ReactJS */
  {
    name: 'ReactJS',
    ring: {
      size: {
        width: 420,
      },
      position: positionRing.reactjs,
    },
    target: {
      children: <ReactJS />,
      position: positionObject.reactjs,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.reactjs,
    link: 'https://react.dev',
  },
  /* HTML */
  {
    name: 'HTML',
    ring: {
      size: {
        width: 480,
      },
      position: positionRing.html,
    },
    target: {
      children: <HTML />,
      position: positionObject.html,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.html,
    link: 'https://www.w3schools.com/html/',
  },
  /* TS */
  {
    name: 'TS',
    ring: {
      size: {
        width: 540,
      },
      position: positionRing.ts,
    },
    target: {
      children: <TS />,
      position: positionObject.ts,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.ts,
    link: 'https://www.typescriptlang.org',
  },
  /* Graphql */
  {
    name: 'Graphql',
    ring: {
      size: {
        width: 600,
      },
      position: positionRing.graphql,
    },
    target: {
      children: <Graphql />,
      position: positionObject.graphql,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.graphql,
    link: 'https://graphql.org',
  },
  /* VueJS */
  /*  {
    name: 'VueJS',
    ring: {
      size: {
        width: 660,
      },
      position: positionRing.vuejs,
    },
    target: {
      children: <VueJS />,
      position: positionObject.vuejs,
      size: {
        height: 10,
        width: 10,
      },
    },
    duration: duration.vuejs,
  }, */
];
