"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { wrap } from "popmotion";

const images = [
  "/shopPhoto/photo (2).jpg",
  "/shopPhoto/photo (1).jpg",
  "/shopPhoto/photo (3).jpg",
];

export const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;
  return (
    <div className="relative w-full h-60 md:h-[550px] rounded-lg hover:cursor-grab">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute w-full h-full object-top object-cover rounded-lg"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-2xl"
        onClick={() => paginate(1)}
      >
        ‣
      </button>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 rotate-180 bg-white bg-opacity-50 rounded-full p-2 text-2xl"
        onClick={() => paginate(-1)}
      >
        ‣
      </button>
    </div>
  );
};
