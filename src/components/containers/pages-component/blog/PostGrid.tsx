"use client";

import { useState } from "react";
import { BlogCard, type BlogCardData } from "@/containers/shared/BlogCard";

const PAGE = 9;

/** 3-column post grid that reveals 9 more cards per "Load More" click, like the Elementor posts widget. */
export const PostGrid: React.FC<{ posts: BlogCardData[] }> = ({ posts }) => {
  const [count, setCount] = useState(PAGE);
  return (
    <>
      <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, count).map((post) => (
          <BlogCard key={post.href} post={post} variant="grid" />
        ))}
      </div>
      {count < posts.length && (
        <div className="mt-[59px] text-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + PAGE)}
            className="group inline-flex h-[46px] items-center justify-center rounded-[18px] bg-ink px-[29px] font-syne text-xs font-bold uppercase leading-[20.4px] tracking-[-0.2px] text-white"
          >
            <span className="hover-fill [--fill:rgba(176,167,239,0.35)]">Load More</span>
          </button>
        </div>
      )}
    </>
  );
};
