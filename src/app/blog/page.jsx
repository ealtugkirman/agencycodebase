import React from "react";
import { allBlogs } from "contentlayer/generated";
import FeaturedPosts from "../../components/Home/FeaturedPosts";
import RecentPosts from "../../components/Home/RecentPosts";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";

const page = () => {
  return (
    <div className="pt-24">
      <div className="flex-col justify-center border-black border-t-2 border-b-2 flex py-8">
        <h1 className="text-8xl text-center">VOYAGE BLOG</h1>
        <p className="text-first text-xs md:text-sm mx-4 md:mx-12 mt-2 md:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          debitis commodi optio nam, recusandae voluptate nisi dolorum quas
          fugiat ea, rem cumque architecto voluptatibus accusamus minima quos
          beatae quae ullam eum? Temporibus illo eos sit ratione magni delectus
          praesentium natus accusamus eligendi!
        </p>
      </div>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </div>
  );
};

export default page;
