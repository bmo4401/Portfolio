import Image from 'next/image';

const Web = () => {
  return (
    <div className="absolute left-0 top-0 w-20 h-20  ">
      <Image
        alt=""
        src="/rings/web.svg"
        fill
        className="object-cover"
      />
    </div>
  );
};
export default Web;
