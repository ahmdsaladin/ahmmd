"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-oldLondon font-bold md:text-4xl text-xl text-white">
      Nebula Brand Identity
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A cosmic-inspired identity system blending clarity, mystery, and digital elegance for a visionary design studio.
</p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-oldLondon font-bold md:text-4xl text-xl text-white">
      ChronoSlate OS
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A temporal interface concept that reframes digital time as a tactile, spatial experience across screens.
</p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-oldLondon font-bold md:text-4xl text-xl text-white">
      STRATUM Data Visualization (upcoming)
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A layered visual language that turns abstract datasets into poetic, glass-like topographies of meaning.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-oldLondon font-bold md:text-4xl text-xl text-white">
      VIREO (upcoming)
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A serene biotechnological aesthetic where organic forms meet minimal tech — branding nature’s next interface.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/4grid/Nebula Brand Identity.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/4grid/ChronoSlate OS_ Temporal UI for Creative Minds.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/4grid/STRATUM Data Visualization.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/4grid/VIREO Business Card.png",
  },
];

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-3xl cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-3xl h-full w-full"
                : "bg-white rounded-3xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0  opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-3xl shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
