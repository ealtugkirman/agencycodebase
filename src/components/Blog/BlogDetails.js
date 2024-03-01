import { format, parseISO } from "date-fns";
import { tr } from "date-fns/locale"; // Import the Turkish locale
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-2  md:px-10 bg-light border-2 border-black text-first dark:text-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10">
      <time className="m-3">
        { format(parseISO(blog.publishedAt), "d LLLL yyyy", { locale: tr })}
      </time>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="m-3">{blog.readingTime.text} okuma süresi</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
