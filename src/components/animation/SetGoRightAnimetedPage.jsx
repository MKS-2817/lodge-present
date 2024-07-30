import React from 'react'
import { motion } from 'framer-motion';

// animate style ---------------------------------------------
const animations = {
    initial: { transform: 'translateX(-100%)' },
    animate: { transform: 'translateX(0)' },
    exite: { transform: `translateX(${window.innerWidth}px)` },
}
// animate style ---------------------------------------------

const RightAnimetedPage = ({ children, modtion_div_className }) => {
    return (
        <motion.div
            className={modtion_div_className}
            variants={animations}
            initial='initial'
            animate='animate'
            exite='exite'
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

export default RightAnimetedPage;