import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, x: 100 }, // initial state of animation
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ ease: "easeOut", duration: 0.6 }}>
            {children}
        </motion.div>
    );
}


export default AnimatedPage