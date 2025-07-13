import { twMerge } from 'tailwind-merge';

type TCardProps = {
  className?: string;
  children: React.ReactNode;
};
const Card = ({ className, children }: TCardProps) => {
  return (
    <div
      className={twMerge(
        'card relative flex items-center justify-center border-b border-b-brand-primary-medium shadow-3 transition-all duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
