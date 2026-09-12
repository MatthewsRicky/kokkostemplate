"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "motion/react";

type ImageRevealProps = ImageProps & {
  wrapperClassName?: string;
};

export default function ImageReveal({
  wrapperClassName = "",
  className = "",
  alt,
  ...props
}: ImageRevealProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${wrapperClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.div
        className="absolute inset-0 z-10 bg-kokkos-charcoal"
        variants={{
          hidden: {
            scaleX: 1,
            transformOrigin: "right",
          },
          visible: {
            scaleX: 0,
            transformOrigin: "right",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
      />

      <motion.div
        className="relative h-full w-full"
        variants={{
          hidden: {
            scale: 1.08,
          },
          visible: {
            scale: 1,
            transition: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        <Image {...props} alt={alt} className={`object-cover ${className}`} />
      </motion.div>
    </motion.div>
  );
}
