import Image from 'next/image';
import nestjs_image from '@/public/rings/nestjs.png';

const NestJS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src={nestjs_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default NestJS;
