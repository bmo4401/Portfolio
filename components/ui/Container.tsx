import { cn } from '@/libs/utils';
import { motion } from 'framer-motion';

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={cn('my-32', className)}
    >
      {children}
    </motion.div>
  );
};
export default Container;
