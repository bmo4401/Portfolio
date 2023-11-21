import Image from 'next/image';
import vuejs_image from '@/public/rings/vuejs.svg';

const VueJS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src={vuejs_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default VueJS;
