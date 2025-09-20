'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  variant?: 'subtle' | 'lift' | 'glow' | 'scale';
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ variant = 'subtle', children, ...props }, ref) => {
    const variants = {
      subtle: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        whileHover: { y: -5 },
      },
      lift: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        whileHover: { 
          y: -10, 
          boxShadow: "0 20px 40px -10px rgba(240, 66, 153, 0.2)"
        },
      },
      glow: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        whileHover: { 
          scale: 1.02,
          boxShadow: "0 0 30px rgba(240, 66, 153, 0.3)"
        },
      },
      scale: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        whileHover: { 
          scale: 1.05
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        {...variants[variant]}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'bounce' | 'glow' | 'scale' | 'elegant';
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = 'bounce', children, ...props }, ref) => {
    const variants = {
      bounce: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      },
      glow: {
        whileHover: { 
          scale: 1.02,
          boxShadow: "0 0 20px rgba(240, 66, 153, 0.4)"
        },
        whileTap: { scale: 0.98 },
      },
      scale: {
        whileHover: { scale: 1.08 },
        whileTap: { scale: 0.92 },
      },
      elegant: {
        whileHover: { 
          scale: 1.02,
          y: -2
        },
        whileTap: { scale: 0.98, y: 0 },
      },
    };

    return (
      <motion.button
        ref={ref}
        {...variants[variant]}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ delay = 0, direction = 'up', children, ...props }, ref) => {
    const directionOffset = {
      up: { y: 30, x: 0 },
      down: { y: -30, x: 0 },
      left: { y: 0, x: 30 },
      right: { y: 0, x: -30 },
    };

    return (
      <motion.div
        ref={ref}
        initial={{ 
          opacity: 0, 
          ...directionOffset[direction]
        }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          x: 0 
        }}
        transition={{ 
          duration: 0.6, 
          delay
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ staggerDelay = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";

export const StaggerItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";