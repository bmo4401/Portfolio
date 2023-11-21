import Image from 'next/image';
import pj1_img from '@/public/images/project1_image.png';
import pj2_img from '@/public/images/project2_image.png';
import pj3_img from '@/public/images/project3_image.png';
import { DetailProps } from '@/components/projects/Detail';
import { cn } from '@/libs/utils';
const ProjectImageInfo: React.FC<DetailProps> = ({ type }) => {
  const image = {
    1: pj1_img,
    2: pj2_img,
    3: pj3_img,
  };
  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <div
        className={cn(
          'relative h-64 aspect-video border-2 rounded-md overflow-hidden',
          type === 1 && 'border-project1',
          type === 2 && 'border-project2',
          type === 3 && 'border-project3',
        )}
      >
        <Image
          fill
          alt=""
          src={image[type]}
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default ProjectImageInfo;
