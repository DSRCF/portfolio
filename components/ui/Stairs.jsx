import {motion} from "framer-motion";

const stairAnimation= {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <div className="absolute inset-0 h-full w-full">
        {
            [...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full bg-white absolute"
                    style={{
                        width: `${100 / 6}%`,
                        left: `${(index * 100) / 6}%`,
                    }}
                />
            ))
        }
        </div>
    )
}

export default Stairs;