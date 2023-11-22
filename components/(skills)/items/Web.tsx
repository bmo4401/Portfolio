import Image from 'next/image';
import web_image from '@/public/rings/web.svg';

const Web = () => {
  return (
    <div className="relative  w-20 h-20  ">
      <Image
        alt=""
        src={web_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default Web;
