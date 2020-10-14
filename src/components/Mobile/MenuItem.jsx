import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i, toggle }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ color: "#ffffff" }}
      whileTap={{ scale: 0.95 }}
      className="mobile-menu-item"
    >
      <a href={i.href} 
      className="mobile-menu-link"
      onClick={toggle} 
      style={{
      borderBottom: `1px solid ${i.borderDM}`}}>
          {i.name}
      </a>
    </motion.li>
  );
};
