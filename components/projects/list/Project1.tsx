'use client';
import LinkCustom from '@/components/projects/list/LinkCustom';
import { Button } from '@/components/ui/Button';
import { project1 } from '@/data/projects';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Project1 = () => {
  const [opacity, setOpacity] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [lightness, setLightness] = useState('95%');
  const hsl = `hsla(272, 72%, ${lightness}, 0.5)`;
  const hsla = `hsla(272, 72%, 100%, 0.1)`;
  const { name, feature, technology } = project1;
  useEffect(() => {
    const overlayContainer = document.getElementById('project1Overlay');

    if (overlayContainer === null) return;
    const applyOverlayMask = (e: PointerEvent) => {
      if (overlayContainer instanceof HTMLElement) {
        const x = e.clientX;
        const y = e.clientY;
        setOpacity(1);
        setX(x);
        setY(y);
        setLightness('47%');
      }
    };

    overlayContainer.addEventListener('pointermove', (e) => {
      return applyOverlayMask(e);
    });
    overlayContainer.addEventListener('mouseenter', (e) => {
      setHidden(true);
    });
    overlayContainer.addEventListener('mouseleave', (e) => {
      setHidden(false);
      setX(-999);
      setY(-999);
    });
    return () => {
      overlayContainer.removeEventListener('pointermove', (e) => {
        return applyOverlayMask(e);
      });
    };
  }, []);
  return (
    <div
      id="project1Overlay"
      className="relative"
    >
      {/* main */}
      <div
        className=" text-primary dark:text-primary-dark w-full h-full border-2 border-project1 rounded-md px-5 py-2 flex flex-col gap-3"
        style={{ backgroundColor: !hidden ? hsla : '#000' }}
      >
        {/* Name */}
        <div>
          <h2 className="text-2xl text-project1  border-project1">
            {name.title}
          </h2>
          <ul className="list-disc pl-5 pt-2">
            <li>Description: {name.text.description}</li>
            <li>
              Base on:{' '}
              <LinkCustom
                url={name.text.baseOn}
                type={1}
              />
            </li>
            <li>
              Website:{' '}
              <LinkCustom
                url={name.text.website}
                type={1}
              />
            </li>
            <li>
              Github:{' '}
              <LinkCustom
                url={name.text.github}
                type={1}
              />
            </li>
          </ul>
        </div>
        {/* Feature */}
        <div>
          <h2 className="text-xl ">Feature</h2>
          <ul className="list-disc pl-5 pt-2">
            <li>Song: {feature.song}</li>
            <li>User: {feature.user}</li>
            <li>Responsive: {feature.responsive}</li>
          </ul>
        </div>
        {/* Technology */}
        <div>
          <h2 className="text-xl ">Technology</h2>
          <ul className="list-disc pl-5 pt-2">
            <li>Fontend: {technology.fontend}</li>
            <li>Backend: {technology.backend}</li>
          </ul>
        </div>
        <div className="flex justify-center gap-10">
          <Link
            href={name.text.website}
            target="_blank"
          >
            <Button className="bg-transparent border border-slate-500">
              Demo
            </Button>
          </Link>
          <Link
            href={name.text.github}
            target="_blank"
          >
            <Button className="bg-transparent border border-slate-500">
              Github
            </Button>
          </Link>
        </div>
      </div>
      {/* overlay */}
      <div
        className={cn(
          'transition duration-300 ease-linear absolute inset-0 pointer-events-none select-none ',
        )}
        style={{
          WebkitMask: `radial-gradient(15rem 15rem at ${x}px ${y}px,#000 1%, transparent 50%)`,
          opacity: opacity,
        }}
      >
        <div
          className="w-full h-full relative"
          style={{
            backgroundColor: `${hsl}`,
            borderColor: `${hsl}`,
            boxShadow: `0 0 0 1px inset hsl(${hsl})`,
          }}
        >
          {/* button */}
          <div className="absolute bottom-0 w-full pb-[10.6px]">
            <div className="w-full flex justify-center gap-10">
              <Link
                href={name.text.website}
                target="_blank"
              >
                <Button
                  className="text-white bg-transparent border border-slate-500"
                  style={{
                    backgroundColor: `hsl(272, 72%, ${lightness})`,
                    boxShadow: `0 0 0 1px hsl(272, 72%, ${lightness})`,
                  }}
                >
                  Demo
                </Button>
              </Link>
              <Link
                href={name.text.github}
                target="_blank"
              >
                <Button
                  className="text-white bg-transparent border border-slate-500"
                  style={{
                    backgroundColor: `hsl(272, 72%, ${lightness})`,
                    boxShadow: `0 0 0 1px hsl(272, 72%, ${lightness})`,
                  }}
                >
                  Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project1;
