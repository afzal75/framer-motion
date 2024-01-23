// import { motion } from "framer-motion"


// const Lesson1 = () => {

//     const parent = {
//         // initial: { rotate: 0 },
//         // animate: { rotate: 360 }
//         hidden: { opacity: 1, scale: 0.9 },
//         visible: {
//             opacity: 1, scale: 1,
//             transition: {
//                 ease: "easeInOut",
//                 duration: 1.5,
//                 staggerChildren: 0.5,
//                 delayChildren: 0.5
//                 // repeat: Infinity,
//                 // repeatType: "reverse"

//             }
//         },

//     }

//     const child = {
//         hidden: { opacity: 1, scale: 0.1 },
//         visible: { opacity: 1, scale: 1 }
//     }

//     return (
//         <div className="main">
//             <motion.div
//                 className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
//                 variants={parent}
//                 initial="hidden"
//                 animate="visible"

//             >
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>

//             </motion.div>
//         </div>
//     );
// };

// export default Lesson1;


// ! farmer motion gestures



// import { motion } from "framer-motion"


// const Lesson1 = () => {

//     const parent = {
//         // initial: { rotate: 0 },
//         // animate: { rotate: 360 }
//         hidden: { opacity: 1, scale: 0.9 },
//         visible: {
//             opacity: 1, scale: 1,
//             transition: {
//                 ease: "easeInOut",
//                 duration: 2,
//                 staggerChildren: 0.5,
//                 delayChildren: 0.5

//             }
//         },
//         hover: {
//             scale: 1.1,
//             transition: {
//                 duration: 0.5
//             }
//         },
//         tap: {
//             scale: 1,
//             rotate: 45
//         }

//     }

//     // const child = {
//     //     hidden: { opacity: 1, scale: 0.1 },
//     //     visible: { opacity: 1, scale: 1 }
//     // }

//     return (
//         <div className="main">
//             <motion.div
//                 className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
//                 variants={parent}
//                 initial="hidden"
//                 animate="visible"
//                 whileHover="hover"
//                 whileTap="tap"
//                 drag
//             >
//                 {/* <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div>
//                 <motion.div
//                     className="size-20 bg-cyan-400 rounded-sm"
//                     variants={child}
//                 >
//                 </motion.div> */}

//             </motion.div>
//         </div>
//     );
// };

// export default Lesson1;




// ! farmer motion gestures


import { motion } from "framer-motion"
import { useRef } from "react";


const Lesson1 = () => {
    const parentRef = useRef(null)

    const parent = {
        // initial: { rotate: 0 },
        // animate: { rotate: 360 }
        hidden: { opacity: 1, scale: 0.9 },
        visible: {
            opacity: 0.6,
            scale: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.5,

            }
        },
        hover: {
            opacity: 1
        },
        tap: {
            scale: 1.1,
            boxShadow: "0px 10px 10px #000"
        }
    }

    // const child = {
    //     hidden: { opacity: 1, scale: 0.1 },
    //     visible: { opacity: 1, scale: 1 }
    // }

    return (
        <div
            ref={parentRef}
            className="border border-red-500 size-[400px] flex justify-center items-center">
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
                variants={parent}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                drag
                // dragSnapToOrigin
                dragElastic={0.5}
                dragConstraints={parentRef}
                whileDrag={{
                    scale: 1.1,
                    boxShadow: "0px 10px 10px #000"
                }}
            // {{ left: -200, right: 200, top: -200, bottom: 200 }}
            >


            </motion.div>
        </div>
    );
};

export default Lesson1;
