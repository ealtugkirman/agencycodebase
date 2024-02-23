import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12">
      <div className="md:grid-col-1  border-4 border-black flex-col  mx-4 md:mx-20">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={1000}
          height={800}
          className=""
          sizes="200vw"
          priority
        />
      </div>
      <div className=" md:grid-col-1 mr-12 mx-4 md:mx-0 space-y-2 md:space-y-4 flex flex-col items-center md:items-start justify-center  text-black">
        <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
        <Link href={blog.url} className="">
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
            <span
              className="bg-gradient-to-r from-first to-yellow-500 
              bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
              {blog.title}
            </span>
          </h1>
        </Link>
        <p className="mt-4  text-sm">{blog.description}</p>
      </div>
    </div>
  );
};

export default HomeCoverSection;
