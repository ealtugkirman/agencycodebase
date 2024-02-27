// import React from "react";
// // Import Link from Next.js if you're using Next.js
// import Link from "next/link";

// const BlogCategories = ({ categories }) => {
//   return (
//     <div className="flex flex-col bg-light text-first ">
//           <h1>Kategoriler</h1>{" "}
//       <ul className="flex flex-row" >
//         {categories.map((category, index) => (
//           <li key={index}>
//             <Link href={`/category/${category.slug}`}>{category.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BlogCategories;

import React from "react";
// Import Link from Next.js if you're using Next.js
import Link from "next/link";

const BlogCategories = ({ categories }) => {
  return (
    <article className="flex flex-col text-newcolor dark:text-light">
      <div className="flex flex-col bg-light text-first ">
        <ul className="px-0 md:px-10 sxl:px-20 mt-6 text-dark dark:text-light   flex items-start flex-wrap font-medium mx-5 md:mx-10">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                className="inline-block py-1  px-3  md:py-2 md:px-5 lg:py-2 lg:px-9   rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2"
                href={`/categories/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default BlogCategories;
