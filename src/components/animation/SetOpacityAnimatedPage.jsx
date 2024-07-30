import React from 'react'
import { motion } from 'framer-motion';

// animate style ---------------------------------------------
const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exite: { opacity: 0 },
}
// animate style ---------------------------------------------

const OpacityAnimetedPage = ({ children, motion_div_className }) => {
    return (
        <motion.div
            className={motion_div_className}
            variants={animations}
            initial='initial'
            animate='animate'
            exite='exite'
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

export default OpacityAnimetedPage;