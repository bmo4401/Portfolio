import { cn } from '@/libs/utils';
import Link from 'next/link';

const LinkCustom = ({ url, type }: { url: string; type: 1 | 2 | 3 }) => {
  return (
    <Link
      className={cn(
        'underline decoration-project3 underline-offset-4 ',
        type === 1 && 'decoration-project1',
        type === 2 && 'decoration-project2',
        type === 3 && 'decoration-project3',
      )}
      href={url}
      target="_blank"
    >
      {url}
    </Link>
  );
};

export default LinkCustom;
