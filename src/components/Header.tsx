"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
    const router = useRouter();
    
    return (
        <header className="py-4 px-10 flex flex-row justify-between bg-neutral-300">
            <h1 className="font-extrabold text-xl">Webshop</h1>
            <nav className="flex flex-row gap-4">
                <button onClick={() => router.push("/")}>Home</button>
                <button onClick={() => router.push("/products")}>Shop</button>
                <button onClick={() => router.push("/about")}>About</button>
                <button onClick={() => router.push("/contact")}>Contact</button>
            </nav>
        </header>
    )
}