'use client';
// import styles from './style.module.scss';
// import Link from 'next/link';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { opacity, background } from './anim';
// import Nav from './nav';

// export default function index() {

//     const [isActive, setIsActive] = useState(false);

//     return (
//         <div className={styles.header}>
//             <div className={styles.bar}>
//                 <Link href="/" className='text-newcolor' >DigitalVoyage</Link>
//                 <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
//                     <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
//                     <div className={styles.label}>
//                         <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
//                         <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Kapat</motion.p>
//                     </div>
//                 </div>
//                 <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
//                     <div className={ styles.el }>
//                         <p>BİZE ULAŞIN</p>
//                     </div>
//                 </motion.div>
//             </div>
//             <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
//             <AnimatePresence mode="wait">
//                 {isActive && <Nav/>}
//             </AnimatePresence>
//         </div>
//     )
// }

// index.js

import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    const handleLinkClick = () => {
        setIsActive(false); // Bu tıklama işlevi ile isActive durumunu false yaparak menüyü kapatır
    };

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/" className="text-newcolor">
                    DigitalVoyage
                </Link>
                <div onClick={() => setIsActive(!isActive)} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>
                            Menu
                        </motion.p>
                        <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
                            Kapat
                        </motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? 'open' : 'closed'} className={styles.shopContainer}>
                    <div className={styles.el}>
                        <p>BİZE ULAŞIN</p>
                    </div>
                </motion.div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? 'open' : 'closed'} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">{isActive && <Nav onLinkClick={handleLinkClick} />}</AnimatePresence>
        </div>
    );
}