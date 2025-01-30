import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  [key: string]: any; 
}

const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
