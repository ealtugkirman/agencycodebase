"use client"
// import { allBlogs } from "contentlayer/generated";
// import Script from "next/script";
import { useEffect, useState } from "react";
import { Features } from "../components/Features";
import Herosection from "../components/Herosection";
import { AnimatePresence } from "framer-motion";
import Homen from "../components/Homen/Homen";
import Preloader from "../components/Preloader"
import LogoSlider from "../components/LogoSlider";
import WhoAreWe from "../components/WhoAreWe";
import WorkWithUs from "../components/WorkWithUs";
import NewsLetter from "../components/NewsLetter";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main className="flex flex-col">
      <AnimatePresence mode='wait'>
        { isLoading && <Preloader /> }
      </AnimatePresence>
      <div className="hidden lg:block" >
        <Homen />
     </div>
      <Herosection />
      <LogoSlider />
      <Features />
      <WorkWithUs />
      <WhoAreWe />
      <NewsLetter />
    </main>
  );
}

{
  /* <Script src="https://www.googletagmanager.com/gtag/js?id=G-7V291HMZJB" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
  gtag('config', 'G-7V291HMZJB');
        `}
      </Script> */
}
