'use client';
import LinkCustom from '@/components/projects/list/LinkCustom';
import { Button } from '@/components/ui/Button';
import { project2 } from '@/data/projects';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Project2 = () => {
  const [opacity, setOpacity] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [lightness, setLightness] = useState('95%');
  const hsl = `hsla(45, 93%, ${lightness}, 0.5)`;
  const hsla = `hsla(45, 93%, 100%, 0.1)`;
  const { name, feature, technology } = project2;
  useEffect(() => {
    const overlayContainer = document.getElementById('project2Overlay');
    if (overlayContainer === null) return;
    const applyOverlayMask = (e: PointerEvent) => {
      if (overlayContainer instanceof HTMLElement) {
        const x = e.clientX - 50;
        const y = e.clientY - 50;
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
      id="project2Overlay"
      className="relative"
    >
      {/* main */}
      <div
        className=" text-primary dark:text-primary-dark w-full h-full border-2 border-yellow-500 rounded-md px-5 py-2 flex flex-col gap-3"
        style={{ backgroundColor: !hidden ? hsla : '#000' }}
      >
        {/* Name */}
        <div>
          <h2 className="text-2xl text-yellow-500">{name.title}</h2>
          <ul className="list-disc pl-5 pt-2">
            <li>Description: {name.text.description}</li>
            <li>
              Base on:{' '}
              <LinkCustom
                url={name.text.baseOn}
                type={2}
              />
            </li>
            <li>
              Website:
              <li className="[list-style-type:'-'] pl-2">
                Store:{' '}
                <LinkCustom
                  url={name.text.website.store}
                  type={2}
                />
              </li>
              <li className="[list-style-type:'-'] pl-2">
                Dashboard:{' '}
                <LinkCustom
                  url={name.text.website.dashboard}
                  type={2}
                />
              </li>
            </li>
            <li>
              Github
              <li className="[list-style-type:'-'] pl-2">
                Store:{' '}
                <LinkCustom
                  url={name.text.github.store}
                  type={2}
                />
              </li>
              <li className="[list-style-type:'-'] pl-2">
                Dashboard:{' '}
                <LinkCustom
                  url={name.text.github.dashboard}
                  type={2}
                />
              </li>
            </li>
          </ul>
        </div>
        {/* Feature */}
        <div>
          <h2 className="text-xl ">Feature</h2>
          <ul className="list-disc pl-5 pt-2">
            <li>Store: {feature.store}</li>
            <li>Dashboard: {feature.dashboard}</li>
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
        {/* Button */}
        <div className="flex justify-center gap-10">
          <Link
            href={name.text.website.store}
            target="_blank"
          >
            <Button className="bg-transparent border-2 border-slate-500">
              Demo
            </Button>
          </Link>
          <Link
            href={name.text.github.store}
            target="_blank"
          >
            <Button className="bg-transparent border-2 border-slate-500">
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
          className="w-full h-full"
          style={{
            backgroundColor: `${hsl}`,
            borderColor: `${hsl}`,
            boxShadow: `0 0 0 1px inset hsl(${hsl})`,
          }}
        >
          <div
            className="w-9 h-9 rounded-md"
            style={{
              backgroundColor: `${hsl}`,
              boxShadow: `0 0 0 1px ${hsl}`,
            }}
          >
            {/* button */}
            <div className="absolute bottom-0 w-full pb-[10.6px]">
              <div className="w-full flex justify-center gap-10">
                <Link
                  href={name.text.website.store}
                  target="_blank"
                >
                  <Button
                    className="text-white bg-transparent border-2 border-slate-500"
                    style={{
                      backgroundColor: `hsl(45, 93%, ${lightness})`,
                      boxShadow: `0 0 0 1px hsl(45, 93%, ${lightness})`,
                    }}
                  >
                    Demo
                  </Button>
                </Link>
                <Link
                  href={name.text.github.store}
                  target="_blank"
                >
                  <Button
                    className="text-white bg-transparent border-2 border-slate-500"
                    style={{
                      backgroundColor: `hsl(45, 93%, ${lightness})`,
                      boxShadow: `0 0 0 1px hsl(45, 93%, ${lightness})`,
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
    </div>
  );
};
export default Project2;
