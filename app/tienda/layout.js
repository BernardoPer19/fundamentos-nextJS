import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Tienda Oficial"
}

function layout({ children }) {
  return (
    <div>
      <nav>
        <h3>Seccion Categorias</h3>
        <ul>
          <li>
            <Link href={"/tienda/categories"}>Categorias</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default layout;
