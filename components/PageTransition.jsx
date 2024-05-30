"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransitionEvent = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.1, ease: "easeInOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEvent;