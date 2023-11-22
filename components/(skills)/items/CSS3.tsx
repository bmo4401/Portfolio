import Image from 'next/image';
import css3_image from '@/public/rings/css3.svg';
const CSS3 = () => {
  return (
    <div className="absolute left-0 top-0 w-9 h-9  ">
      <Image
        alt=""
        src={css3_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default CSS3;
