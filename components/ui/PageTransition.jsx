"use client";
import { AnimatePresence, motion     } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                    initial={{opacity: 1}} 
                    animate={{
                    opacity: 0, 
                    transition: {delay: 0.4, duration: 0.5, ease: "easeInOut"},
                }}
                className="h-screen w-screen fixed top-0 left-0 z-50 bg-black pointer-events-none"
            />
            {children}
        </div>
    </AnimatePresence>
    );
};

export default PageTransition;