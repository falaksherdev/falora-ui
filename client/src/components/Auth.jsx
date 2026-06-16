import React from "react";
import { AnimatePresence, motion } from "motion/react";
const Auth = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justiy-center bg-black/70 black-drop-sm p-4"
      ></motion.div>
    </AnimatePresence>
  );
};

export default Auth;
