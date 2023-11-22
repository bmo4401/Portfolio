import { cn } from '@/libs/utils';

export interface RingProps {
  name: string;
  duration: number;
  ring: {
    size: { width: number };
    position: {
      top: string;
      left: string;
    };
    color?: string;
  };
  target: {
    /*  size: {
      width: number;
      height: number;
    }; */
    position: {
      top: string;
      left: string;
    };
    /* color?: string; */
    children?: React.ReactNode;
  };
  /*   isCore?: boolean; */
  link: string;
}
const Skill: React.FC<RingProps> = ({ duration, name, ring, target }) => {
  return (
    <li
      id={name}
      className={cn(
        'absolute indent-[-9999px] rounded-full aspect-square',
        'animate-spin border border-slate-500',
      )}
      style={{
        width: ring.size.width,
        top: `${ring.position.top}`,
        left: `${ring.position.left}`,
        animationDuration: `${duration}s`,
      }}
    >
      <span
        className={cn('block absolute rounded-full ')}
        style={{
          top: `${target.position.top}`,
          left: `${target.position.left}`,
        }}
      >
        {target.children}
      </span>
    </li>
  );
};
export default Skill;

/*  */
