import Image from 'next/image';
import html_image from '@/public/rings/html.svg';

const HTML = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src={html_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default HTML;
