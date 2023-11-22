import Skill from '@/components/(skills)/Skill';
import Web from '@/components/(skills)/items/Web';
import { skills } from '@/data/skills';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import universal from '@/public/universal-removebg-preview.png';
import CSS3 from '@/components/(skills)/items/CSS3';
import universal_image from '@/public/universal-removebg-preview.png';
const Rings = () => {
  return (
    <section className="w-full h-[900px] flex items-center justify-center ">
      <ul
        className="rounded-full w-[750px] h-[750px] relative list-none   overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${universal_image.src})` }}
      >
        {/* Core */}
        <li
          className={cn(
            ' border-[#394057] indent-[-9999px] border-none z-50 transition-all duration-200 ease-in',
            'shadow-[0 0 50px #c90]',
          )}
        >
          <Web />
        </li>

        {skills.map((item) => (
          <Skill
            {...item}
            key={item.name}
          />
        ))}
      </ul>

      <ul className="absolute right-36 top-[5rem] ">
        {skills.map((item) => (
          <li
            key={item.name}
            className="relative pt-16 aspect-square group hover:scale-110 transition-all"
          >
            <Link
              href={item.link}
              target="_blank"
            >
              {item.target.children}
              <h2 className="text-yellow-500 font-semibold absolute right-0 translate-x-full pl-1 top-2 group-hover:text-indigo-500">
                {item.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Rings;
