import * as React from "react";
import { motion} from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    visibility: 'visible',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    visibility: 'hidden',
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay:1}
  }
};

const menuData = [
  {
    id: 1,
    name: 'home',
    href: '#home',
    borderDM: '#00DFFC',
  },
  {
    id: 2,
    name: 'about me',
    href: '#about-me',
    borderDM: '#00B4CC',
  },
  {
    id: 3,
    name: 'projects',
    href: '#projects',
    borderDM: '#008C9E',
  },
  {
    id: 4,
    name: 'contact',
    href: '#contact',
    borderDM: '#007b88',
  },
]


export const Navigation = ({toggle}) => (
    <motion.ul 
    variants={variants}
    className="mobile-menu"
    >
      {menuData.map(item => (
        <MenuItem toggle={toggle} i={item} key={item.id} />
      ))}
    </motion.ul>
);
