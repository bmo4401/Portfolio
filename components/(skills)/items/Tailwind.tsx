import Image from 'next/image';
import tailwind_image from '@/public/rings/tailwind.svg';

const Tailwind = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10  ">
      <Image
        alt=""
        src={tailwind_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default Tailwind;
