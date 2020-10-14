import { motion } from 'framer-motion'
import React from 'react'

const iconVariants = {
    from: {
        y: 0,
    },
    to: {
        y: 10,
        transition: {
            duration: 1,
            yoyo: Infinity
        }
    }
}

export default function Icon({i, rotate, item}) {
    return (
        <motion.div
        className={`icon icon-${i}` }
        variants={iconVariants} 
        initial={{y:0, rotate: rotate}} 
        animate='to'>
            {item.icon}
        </motion.div>
    )
}

