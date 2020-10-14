import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styled from "styled-components";

const sidebar = {
  open: (height = window.innerHeight) => ({
    clipPath: `circle(${height * 2.5}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={`${isOpen ? 'mobile-nav' : 'closed mobile-nav'}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="menu-background" variants={sidebar} />
      <AnimatePresence>{isOpen ? <Backdrop/> : null}</AnimatePresence>
      <Navigation toggle={() => toggleOpen()}/>
      <MenuToggle toggle={() => toggleOpen()}/>
    </motion.nav>
  );
};


const Backdrop = styled(motion.div).attrs(() => ({
  variants: backdropVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit'
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  z-index: -1;
`
