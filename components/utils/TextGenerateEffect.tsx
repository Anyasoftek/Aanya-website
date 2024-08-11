"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((line, lineIdx) => (
          <div key={lineIdx}>
            {line.split(" ").map((word, idx) => (
              <motion.span
                key={word + idx}
                className={`${idx % 2 === 0 ? "text-pink-400" : "text-white"} opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold font-gilroy", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};