"use client";
 import styles from "./page.module.scss";
 import { projects } from "../../data";
 import Image from "next/image";
 import Double from "../../components/double";
import WhoAreWe from "@/src/components/WhoAreWe";

const page = () => {
  return (
    <main className="text-lg md:text-2xl mb-32 lg:text-4xl">
      <WhoAreWe />
      <div className={ styles.gallery }>
        <h1 className="text-3xl text-gradient text-center justify-center font-semibold -mb-6" >Neler Yaptık?</h1>
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} />
        <Double projects={[projects[6], projects[7]]} reversed={true} />
      </div>
    </main>
  );
}

export default page