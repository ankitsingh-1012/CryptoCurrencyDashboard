"use client";
import SearchBar from '../components/searhBar/page.jsx';
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/navigation";

export default function home() {
    return (
        <>
            <SearchBar/>
            Hello this is the home page of crypto app.
            <Link href="login" className="h-10 w-5/12 bg-btn rounded-lg text-black text-center items-center py-2 font-semibold">Login</Link>
        </>
    );
}