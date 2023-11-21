import WebDev from '@/components/(intro)/WebDev';
import AnimatedText from '@/components/animation/AnimatedText';
import ParticlesContainer from '@/components/ParticlesContainer';
import WaterEffect from '@/components/animation/WaterEffect';
import { Button } from '@/components/ui/Button';
import { LinkArrow } from '@/components/ui/icon/LinkArrow';
import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className=" w-full h-full flex items-start mt-10 justify-center gap-10 ">
        <div className="relative w-80 aspect-square rounded-full overflow-hidden">
          <Image
            src="/images/intro.png"
            alt="Avatar"
            fill
            className="aspect-square"
          />
        </div>
        <div className="max-w-2xl flex flex-col gap-2 ">
          {' '}
          <AnimatedText
            text={`Hi, I'm Hai`}
            className="text-6xl  text-start"
          />
          <AnimatedText
            text={`I'm a Web Developer`}
            className="pt-5 text-6xl  text-start normal-case h-fit"
            isWaterEffect
          />
          <div className="max-w-lg -translate-y-8">
            <AnimatedText
              text={
                ' I am looking for a professional environment where I can learn, develop my knowledge and skills, and willing to learn new things and take on challenges.'
              }
              className="text-2xl  text-start normal-case h-fit"
            />
          </div>
          <Link
            href={'/cv.pdf'}
            target="_blank"
          >
            <Button>
              Resume <LinkArrow className="w-6 ml-1" />{' '}
            </Button>
          </Link>
        </div>
      </div>
      {/* Position Absolute */}
      <div className="absolute bottom-20 left-3">
        <WebDev />
      </div>
      {/*       <ParticlesContainer /> */}
    </div>
  );
};
export default Intro;
