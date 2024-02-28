import React from "react";
import { allBlogs } from "contentlayer/generated";
import FeaturedPosts from "../../components/Home/FeaturedPosts";
import RecentPosts from "../../components/Home/RecentPosts";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import BlogCategories from "@/src/components/Blog/BlogCategories";
import VoyageBlog from "@/src/components/Blog/VoyageBlog";

const page = () => {
  const categories = [
    { name: "Web Tasarım", slug: "web-tasarim" },
    { name: "SEO", slug: "seo" },
    { name: "Digital Pazarlama", slug: "digital-pazarlama" },
    { name: "Dijital Rehberler", slug: "digital-rehberler" },
    { name: "E-Kitaplar", slug: "e-book" },
    { name: "Sosyal Medya", slug: "social-media" },

    // Add more categories as needed
  ];
  return (
    <div className="pt-24">
      <VoyageBlog />
      <BlogCategories categories={categories} />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </div>
  );
};

export default page;
