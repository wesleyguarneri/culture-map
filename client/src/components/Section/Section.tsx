import { forwardRef, ReactNode } from 'react';
import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  [key: string]: any; // Allows passing additional props like `id`, `style`, etc.
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(props, ref) {
  const { children, className, backgroundColor, ...rest } = props;

  let sectionClassName = styles.section;

  if (className) {
    sectionClassName = `${sectionClassName} ${className}`;
  }

  return (
    <section ref={ref} className={sectionClassName} data-background-color={backgroundColor} {...rest}>
      {children}
    </section>
  );
});

export default Section;
