"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Stairs from "./Stairs";

const StairEffect = () => {
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Trigger animation on initial load
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname + (isInitialLoad ? "-initial" : "")}
        className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairEffect;