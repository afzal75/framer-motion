
import { motion, useCycle } from 'framer-motion';
const Lesson7 = () => {

    const boxAnimations = [
        { x: 0, y: 0, opacity: 1 },
        { x: 100, y: 100, opacity: 0.5 },
        { x: -100, y: 100, opacity: 0.25 },
        { x: -100, y: -100, opacity: 0 },
    ]

    const [animate, cycle] = useCycle(...boxAnimations)
    // const [x, cycle] = useCycle(0, 100, -100, 200, -200)

    return (
        <div className="border border-red-500 size-[400px] flex justify-center items-center">
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
                animate={animate}
                onTap={() => cycle()}
            >
            </motion.div>
        </div>
    );
};

export default Lesson7;