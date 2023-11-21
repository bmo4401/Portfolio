import Image from 'next/image';

const ProjectImageInfo = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <div className="relative h-64 aspect-video">
        <Image
          fill
          alt=""
          src="/images/intro.png"
        />
      </div>
    </div>
  );
};
export default ProjectImageInfo;
