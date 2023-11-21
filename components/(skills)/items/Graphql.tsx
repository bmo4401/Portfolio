import Image from 'next/image';
import graphql_image from '@/public/rings/graphql.svg';

const Graphql = () => {
  return (
    <div className="absolute left-0 top-0 w-10 h-10 ">
      <Image
        alt=""
        src={graphql_image}
        fill
        className="object-cover"
      />
    </div>
  );
};
export default Graphql;
