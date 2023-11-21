import Image from 'next/image';
import nextjs_image from '@/public/rings/nextjs.svg';

const NextJS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 bg-white rounded-full border border-white">
      <Image
        alt=""
        src={nextjs_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default NextJS;
