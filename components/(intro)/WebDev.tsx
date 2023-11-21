import Link from 'next/link';
import { WebDevIcon } from '@/components/ui/icon/WebDevIcon';
import HireMe from '@/components/(intro)/HireMe';

const WebDev = () => {
  return (
    <div className="absolute left-4 bottom-4 flex items-center justify-center overflow-hidden ">
      <div className="w-48 flex items-center justify-center relative">
        <WebDevIcon className="fill-dark dark:fill-slate-100 animate-spin-slow" />
        <Link
          href={process.env.NEXT_PUBLIC_EMAIL}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark  text-light shadow-md border border-solid border-primary dark:border-primary-dark   w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          <HireMe />
        </Link>
      </div>
    </div>
  );
};
export default WebDev;
