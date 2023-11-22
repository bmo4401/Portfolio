import Skill from '@/components/(skills)/Skill';
import Web from '@/components/(skills)/items/Web';
import { skills } from '@/data/skills';
import { cn } from '@/libs/utils';
import Link from 'next/link';

const Rings = () => {
  return (
    <section className="w-full ">
      <ul className="left-[10%] relative h-[900px] list-none   overflow-hidden">
        {/* Core */}
        <li
          className={cn(
            'block absolute border-2 border-[#394057] indent-[-9999px] rounded-full border-none z-50 transition-all duration-200 ease-in sun aspect-square',
            'w-[80px] ',
            'top-[370px] left-[770px]',
            'shadow-[0 0 50px #c90]',
          )}
        >
          <span className="block absolute w-[80px] h-[80px] rounded-full ">
            <Web />
          </span>
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
