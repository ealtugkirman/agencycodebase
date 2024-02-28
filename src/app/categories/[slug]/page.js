import { allBlogs } from "@/.contentlayer/generated";
import BlogCategories from "@/src/components/Blog/BlogCategories";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import VoyageBlog from "@/src/components/Blog/VoyageBlog";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: "Blogs",
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  const categories = [
    { name: "Web Tasarım", slug: "web-tasarim" },
    { name: "SEO", slug: "seo" },
    { name: "Digital Pazarlama", slug: "digital-pazarlama" },
    { name: "Dijital Rehberler", slug: "digital-rehberler" },
    { name: "E-Kitaplar", slug: "e-book" },
    { name: "Sosyal Medya", slug: "social-media" },
  ];
  return (
    <article className="pt-12 lg:pt-24 flex flex-col">
      <VoyageBlog />
      <BlogCategories categories={categories} />
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-3 sm:mt-5 md:mt-12 sxl:mt-16 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
