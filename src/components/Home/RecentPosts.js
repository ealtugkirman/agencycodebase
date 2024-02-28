import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full  mt-8 sm:mt-16 px-5 sm:px-10 md:px-24 flex flex-col items-center justify-center">
      <div className="w-full items-center flex  justify-between">
        <h2 className="w-fit font-light capitalize text-2xl md:text-4xl text-dark">
          SON İÇERİKLER
        </h2>
        <Link
          href="/categories/all"
          className="capitalize text-sm md:ext-xl border-3 text-white bg-first  px-4 py-1 md:py-2 ">
            Hepsini Gör
        </Link>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-6 mt-4 md:mt-12">
        {sortedBlogs.slice(0, 12).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
