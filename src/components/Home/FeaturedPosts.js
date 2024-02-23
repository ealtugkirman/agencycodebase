import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="py-3 px-5 sm:px-10 md:px-24 flex flex-col items-center">
      <h2 className="w-full inline-block font-thin  text-2xl md:text-4xl text-dark ">
        ÖNE ÇIKANLAR
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-6 sm:mt-8">
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[0]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>{" "}
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
