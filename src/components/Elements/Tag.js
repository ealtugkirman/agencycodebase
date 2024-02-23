import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "flex bg-first text-light py-2 px-6 capitalize font-light border-2 my-4 border-black hover:scale-105 transition-all ease duration-200 text-sm",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
