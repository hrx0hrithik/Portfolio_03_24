import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const ToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const scrollHandler = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledPercentage = (window.scrollY / scrollHeight) * 100;

            if (scrolledPercentage > 12) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const topFunction = () => {
        console.log("scroll click")
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <motion.div
                initial={isVisible ? { y: 100 } : { y: 0 }}
                animate={isVisible ? { y: 0 } : { y: 100 }}
                whileTap={{ y: 100 }}
                transition={{ duration: 0.8, type: 'tween', ease: 'easeInOut' }}
                onClick={topFunction}
                className='fixed bottom-5 right-7 z-20 text-sm flex justify-center bg-transparent w-14 h-14 border-2 border-yellow-500 rounded-full text-black'>
                <button
                    className=" flex flex-col justify-center items-center m-1 bg-yellow-500 rounded-full px-3"
                    onClick={topFunction}
                    title="Go to top"
                >
                    &#x25B2;
                    <span className=' relative -top-1 font-medium '>Top</span>
                </button>
            </motion.div>
        </>
    );
};

export default ToTopBtn;
