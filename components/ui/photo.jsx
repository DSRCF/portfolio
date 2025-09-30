"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CIRCUMFERENCE = 2 * Math.PI * 250; 

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.4, ease: "easeIn" }
                }}
                className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] flex items-center justify-center"
            >
                {/* Animated Circle Border */}
                <motion.svg
                    className="absolute inset-0 w-full h-full z-0"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: `${CIRCUMFERENCE} 0` }}
                        animate={{
                            strokeDasharray: [
                                `${CIRCUMFERENCE} 0`, // full circle
                                "15 120 25 25",      // broken
                                `${CIRCUMFERENCE} 0`  // back to full
                            ],
                            rotate: [120, 360, 480],
                        }}
                        transition={{
                            duration: 8,
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#FF0000" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 m-auto w-[250px] h-[250px] xl:w-[370px] xl:h-[370px] z-10 flex items-center justify-center"
                >
                    <img
                        src="/assets/picture.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;
