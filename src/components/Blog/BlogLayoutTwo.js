import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="border-2  grid grid-cols-1  md:grid-cols-2 border-black text-dark dark:text-light">
      <div className="grid-cols-1 md:grid-rows-1">
        <Link href={blog.url} className="bg-red-200">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square hidden md:block  border-b-2 md:border-r-2 border-black  h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div className="group flex py-4 flex-col items-start mx-4  justify-between  md:grid-rows-1 grid-cols-1">
        <span className="uppercase  bg-first px-3 py-1 border-2 border-black text-light font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <div>
          <Link href={blog.url} className=" ">
            <h2 className="font-semibold capitalize text-xl mt-4">
              <span
                className="bg-gradient-to-r mt-2 from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                {blog.title}
              </span>
            </h2>
          </Link>
          <p className="mt-4 text-xs">{blog.description}</p>
        </div>

        <span className=" capitalize mt-2 text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
