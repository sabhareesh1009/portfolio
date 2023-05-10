import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article>
      <Link>
        <Image />
      </Link>
    </article>
  );
};

export default FeaturedProject;
