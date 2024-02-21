import React from "react";
import { allBlogs } from "contentlayer/generated";
import FeaturedPosts from "../../components/Home/FeaturedPosts";
import RecentPosts from "../../components/Home/RecentPosts";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";

const page = () => {
  return (
    <div className="">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </div>
  );
};

export default page;
