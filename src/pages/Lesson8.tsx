// !!!!!!!!!!!!!!!!! in view
// import { inView, motion, ElementOrSelector } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// const Lesson8 = () => {
//     const ref = useRef<HTMLDivElement>(null)

//     useEffect(() => {
//         inView(ref.current as ElementOrSelector, (info) => {
//             console.log("in view", info)
//         })
//     }, [])
//     return (
//         <div className="border border-red-500 size-[400px] flex justify-center items-center">
//             <motion.div
//                 className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
//                 ref={ref}
//             >

//             </motion.div>
//         </div>
//     );
// };

// export default Lesson8;







// ! """""""""""""""""""""""""""""""""useInView"""""""""""""""""""""""""""""""""




import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Lesson8 = () => {
    const ref = useRef<HTMLDivElement>(null)

    const inView = useInView(ref, { once: true })
    console.log(inView)

    return (
        <div className="border border-red-500 size-[400px] flex justify-center items-center">
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
                ref={ref}
                animate={inView ? { opacity: 1, x: 0, transition: { delay: 0.7 } } : { opacity: 0, x: -500 }}
            >

            </motion.div>
        </div>
    );
};

export default Lesson8;