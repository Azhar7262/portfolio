import React from 'react';
import { motion } from 'motion/react';

/* Routed-page animation: soft rise + fade on enter, quick lift + fade on exit.
   Keeps navigation feeling deliberate and premium instead of an instant snap. */
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{ duration: 0.38, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

/* Staggered entrance: the container doubles as the layout wrapper (pass your
   grid classes on it) and each direct child rises into view in sequence. */
export const StaggerGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const items = React.Children.toArray(children);
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {items.map((node, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
          }}
        >
          {node}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PageTransition;
