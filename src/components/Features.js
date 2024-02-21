"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import firstBlog from "../../public/blogs/webtasarımvegelistirme.jpg";
import secondBlog from "../../public/blogs/secondBlog.jpg";
import third from "../../public/blogs/dic.jpg";
import last from "../../public/blogs/seo.jpg";
import Link from "next/link";
export const Features = () => {
  return (
    <section className="mx-4 md:mx-12 lg:mx-24 py-6 md:py-24 lg:py-32 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-3xl font-bold md:text-5xl">
          Biz olmadan
          <span className="text-slate-400"> yolunuza başlamayın</span>
        </h2>
        <Link href="/blog">
          {" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-newcolor px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700">
            Hepsini Oku
          </motion.button>
        </Link>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Süreç nasıl ilerler?</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400  transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Link href="/blogs/anotherpost">
              <Image
                className="rounded-t-2xl"
                src={firstBlog}
                alt="test"
                width={600}
              />
            </Link>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Web Siteniz Prensipleri</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Link href="blogs/websitenizde-olmasi-gereken-15-ozellik">
              <Image
                className="rounded-t-2xl"
                src={secondBlog}
                alt="test"
                width={800}
              />
            </Link>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Terimler Rehberi</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 md:top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Link href="blogs/dic">
              <Image
                className="rounded-t-2xl"
                src={third}
                alt="test"
                width={800}
              />
            </Link>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>SEO?</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Link href="blogs/websitenizde-olmasi-gereken-15-ozellik">
              <Image
                className="rounded-t-2xl"
                src={last}
                alt="test"
                width={500}
              />
            </Link>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}>
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};




