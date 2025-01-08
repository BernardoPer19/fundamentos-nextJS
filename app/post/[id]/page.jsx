import React, { Suspense } from "react";
import Post from "../page";

// Cargar el post en el servidor
async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch the post");
  }
  const data = await res.json();
  return data;
}

// Componente principal
async function Page({ params }) {
  const { id } = params;
  const post = await loadPost(id);

  return (
    <div>
      <h1>Post Page {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Otra publicaciones</h3>
      <hr />
      <Suspense fallback={<h1>Cargando Mas Posts...</h1>}>
        <Post />
      </Suspense>
    </div>
  );
}

export default Page;
