import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const LinkedInBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const scrollHandler = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledPercentage = (window.scrollY / scrollHeight) * 100;

            if (scrolledPercentage > 4 && scrolledPercentage < 45) {
                setIsVisible(true);
            }
            else if (scrolledPercentage > 88) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);


    return (
        <motion.div
            initial={isVisible ? { x: 100 } : { x: 0 }}
            animate={isVisible ? { x: 0 } : { x: 100 }}
            exit={isVisible ? { x: 0 } : { x: 100 }}
            transition={{ duration: 0.8, type: 'tween', ease: 'easeInOut' }}
            onClick={() => (
                window.open('https://www.linkedin.com/in/hrithik-gupta-7314b6203/', '_blank')
            )}
            className={`fixed right-0 top-1/2 z-20 flex justify-end bg-transparent h-14 border-2 border-r-0 rounded-sm border-[#03a9f4] text-white`}
        >
            <button
                className="flex flex-col justify-center items-center my-1 ml-1 bg-[#03a9f4] px-2 rounded-sm"
                title="Go to top"
            >
                <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 512 512">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <g id="7935ec95c421cee6d86eb22ecd125aef">
                            <path
                                style={{ display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd' }}
                                d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"
                            >
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </motion.div>
    );
};

export default LinkedInBtn;
