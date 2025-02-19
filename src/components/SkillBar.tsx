import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-8 neon-border p-4 bg-[#0a0a0a]"
    >
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium text-glow">{name}</span>
        <span className="text-sm font-medium text-[var(--neon-blue)]">{level}%</span>
      </div>
      <div className="skill-progress" style={{ '--skill-level': `${level}%` } as any}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;