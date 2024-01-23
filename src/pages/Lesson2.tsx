import { motion } from "framer-motion"


const Lesson2 = () => {

    const parent = {
        hidden: { x: 0, y: 0, opacity: 0 },
        visible: {
            x: [0, 300, -300, 0],
            y: [0, 300, -300, 0],
            rotate: [0, 300, -300, 0],
            opacity: 1,
            transition: {
                duration: 5,
                ease: "linear",
                repeat: Infinity,
                opacity: {
                    duration: 0.5,
                },
                rotate: {
                    delay: 1,
                    repeat: Infinity,
                }


            }
        },

    }

    return (
        <div className="border border-red-500 size-[400px] flex justify-center items-center">
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
                variants={parent}
                initial="hidden"
                animate="visible"
            >

            </motion.div>
        </div>
    );
};

export default Lesson2;