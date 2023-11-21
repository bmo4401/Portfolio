import Image from 'next/image';
import ts_image from '@/public/rings/ts.svg';

const TS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src={ts_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default TS;
