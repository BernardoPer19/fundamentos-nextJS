"use client"

// import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


function AboutPage() {

  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
      <p className="text-gray-600 mt-4">
        We are a team of passionate developers working to build amazing web
        applications.
      </p>
      {/* 
      <Link href={"/"}>
        {" "}
        <button className="bg-sky-400 px-4 py-2 text-white">CLick</button>
      </Link> */}

      <button 
      onClick={()=> {
        router.push("/")
      }}
      className="bg-sky-400 px-4 py-2 text-white">CLick</button>
    </div>
  );
}

export default AboutPage;
