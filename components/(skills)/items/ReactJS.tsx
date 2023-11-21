import Image from 'next/image';
import reactjs_image from '@/public/rings/reactjs.svg';

const ReactJS = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src={reactjs_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default ReactJS;
