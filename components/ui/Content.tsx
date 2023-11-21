import { cn } from '@/libs/utils';

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}
const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={cn('my-10', className)}>{children}</div>;
};
export default Content;
