import React from 'react';
import {motion} from 'framer-motion'

const FuzzyOverlay = () => {
    return (
        <motion.div 
            initial={{ transform: "translateX(-10%) translateY(-10%)" }}
            animate={{
                transform: "translateX(10%) translateY(10%)"
            }}
            transition={{ 
                repeat: Infinity,
                duration: 0.2,
                ease: 'linear',
                repeatType: 'mirror'
            }}
            style={{
                backgroundImage: 'url(/noise.png)'
            }}
            className='fuzzyOverlay'
        />
    )
}

export default FuzzyOverlay