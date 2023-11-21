import { cn } from '@/libs/utils';
import { Poppins } from 'next/font/google';
const font = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});
const WaterEffect = ({
  text,
  className,
  color,
}: {
  text: string;
  className: string;
  color: string;
}) => {
  return (
    <div className={cn('translate-x-1/2  text-6xl', font.className)}>
      <h2
        className="absolute  -translate-x-1/2 -translate-y-1/2 dark:text-black text-white "
        style={{
          WebkitTextStroke: `2px ${color}`,
        }}
      >
        {text}
      </h2>
      <h2
        className={cn(
          'absolute  -translate-x-1/2 -translate-y-1/2  animate-water',
          className,
        )}
        style={{
          color,
        }}
      >
        {text}
      </h2>
    </div>
  );
};
export default WaterEffect;
