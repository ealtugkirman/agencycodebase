'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "ANA SAYFA",
    href: "/",
    src: "home.png"
  },
  {
    title: "Blog",
    href: "/blog",
    src: "shop.png"
  },
  {
    title: "İLETİŞİM",
    href: "/about",
    src: "home.png"
  },
  {
    title: "Portfolyo",
    href: "/portfolyo",
    src: "lookbook.png"
  },
  {
    title: "HAKKIMIZDA",
    href: "/contact",
    src: "contact.png"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}