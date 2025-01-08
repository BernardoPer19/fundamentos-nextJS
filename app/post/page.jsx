import PostCard from "@/components/PostCard";
import React from "react";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve)=> setTimeout(resolve,2000)) 

  return data;
}

async function PostPages() {
  const posts = await loadPost();

  return (
    <div>
      <h1>Posts</h1>

      <div>
        {posts.map((post) => (
         <PostCard post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}

export default PostPages;
