"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
    const router = useRouter();
    
    return (
        <header className="p-4 flex flex-row justify-between bg-neutral-300">
            <h1 className="font-extrabold text-xl">Webshop</h1>
            <nav className="flex flex-row gap-4">
                <button onClick={() => router.push("/products")}>Shop</button>
                <button onClick={() => router.push("/products")}>About</button>
                <button onClick={() => router.push("/products")}>Contact</button>
            </nav>
        </header>
    )
}