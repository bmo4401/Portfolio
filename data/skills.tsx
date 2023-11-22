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
const array: Array<number> = Array.from({ length: 8 });
array[0] = 150;
for (let i = 1; i < array.length; i++) {
  array[i] = array[i - 1] + 70;
}
const positionRing = {
  css3: { top: '40%', left: '40%' },
  nextjs: { top: '35%', left: '35%' },
  nestjs: { top: '30%', left: '30%' },
  tailwind: { top: '25%', left: '25%' },
  reactjs: { top: '20%', left: '20%' },
  html: { top: '15%', left: '15%' },
  ts: { top: '10%', left: '10%' },
  graphql: { top: '5%', left: '5%' },
  /*   vuejs: { top: '0%', left: '0%' }, */
};

const widthObject = {
  css3: array[0],
  nextjs: array[1],
  nestjs: array[2],
  tailwind: array[3],
  reactjs: array[4],
  html: array[5],
  ts: array[6],
  graphql: array[7],
};

const positionObject = {
  css3: { top: '0%', left: '8%' },
  nextjs: { top: '13%', left: '81%' },
  nestjs: {
    top: '17%',
    left: '0%',
  },
  tailwind: { top: '68%', left: '0%' },
  reactjs: {
    top: '26%',
    left: '0%',
  },
  html: {
    top: '29%',
    left: '0%',
  },
  ts: {
    top: '28%',
    left: '0%',
  },
  graphql: {
    top: '28%',
    left: '0%',
  },
  vuejs: {
    top: '0%',
    left: '0%',
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
        width: widthObject.css3,
      },
      position: positionRing.css3,
    },
    target: {
      children: <CSS3 />,

      position: positionObject.css3,
    },
    duration: duration.css3,
    link: 'https://www.w3schools.com/css/',
  },
  /* NestJS */
  {
    name: 'NextJS',
    ring: {
      size: {
        width: widthObject.nextjs,
      },
      position: positionRing.nextjs,
    },
    target: {
      children: <NextJS />,
      position: positionObject.nextjs,
    },
    duration: duration.nextjs,
    link: 'https://nextjs.org',
  },
  /* NestJS */
  {
    name: 'NestJS',
    ring: {
      size: {
        width: widthObject.nestjs,
      },
      position: positionRing.nestjs,
    },
    target: {
      children: <NestJS />,
      position: positionObject.nestjs,
    },
    duration: duration.nestjs,
    link: 'https://nestjs.com',
  },
  /* Tailwind */
  {
    name: 'TailwindCSS',
    ring: {
      size: {
        width: widthObject.tailwind,
      },
      position: positionRing.tailwind,
    },
    target: {
      children: <Tailwind />,
      position: positionObject.tailwind,
    },
    duration: duration.tailwind,
    link: 'https://tailwindcss.com',
  },
  /* ReactJS */
  {
    name: 'ReactJS',
    ring: {
      size: {
        width: widthObject.reactjs,
      },
      position: positionRing.reactjs,
    },
    target: {
      children: <ReactJS />,
      position: positionObject.reactjs,
    },
    duration: duration.reactjs,
    link: 'https://react.dev',
  },
  /* HTML */
  {
    name: 'HTML',
    ring: {
      size: {
        width: widthObject.html,
      },
      position: positionRing.html,
    },
    target: {
      children: <HTML />,
      position: positionObject.html,
    },
    duration: duration.html,
    link: 'https://www.w3schools.com/html/',
  },
  /* TS */
  {
    name: 'TS',
    ring: {
      size: {
        width: widthObject.ts,
      },
      position: positionRing.ts,
    },
    target: {
      children: <TS />,
      position: positionObject.ts,
    },
    duration: duration.ts,
    link: 'https://www.typescriptlang.org',
  },
  /* Graphql */
  {
    name: 'Graphql',
    ring: {
      size: {
        width: widthObject.graphql,
      },
      position: positionRing.graphql,
    },
    target: {
      children: <Graphql />,
      position: positionObject.graphql,
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
      
    },
    duration: duration.vuejs,
  }, */
];
