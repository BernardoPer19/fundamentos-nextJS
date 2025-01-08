"use client";
import Link from "next/link";
import React from "react";

function PostCard({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <Link href={`/post/${post.id}`}>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-200">{post.title}</h3>
      </Link>
      <p className="text-gray-600 mt-2">{post.body}</p>
      <button
        onClick={() => {
          alert("clicki");
        }}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
      >
        Click
      </button>
    </div>
  );
}

export default PostCard;
