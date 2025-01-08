"use client";
import Link from "next/link";
import React from "react";
function PostCard({ post }) {
  return (
    <div>
      <Link href={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("clicki");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default PostCard;
