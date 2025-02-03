/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext } from "react"
import { useRouter } from "next/navigation";
import { productArray } from "@/src/components/providers";

export default function ProductList() {
    const products = useContext(productArray);
    const router = useRouter();

    return (
        <div className="flex flex-row justify-center flex-wrap gap-2">
            {products.products.map((value) => (
                <div 
                    key={Math.random()} 
                    className="p-2 w-40 flex flex-col justify-center text-center shadow hover:bg-slate-300 hover:cursor-pointer" 
                    onClick={() => router.push(`/${value.id}`)}
                >
                    <img src={value.images[0]} alt={`Image of ${value.title}`} className="object-contain size-36"/>
                    <p>{value.title}</p>
                    <p>${value.price}</p>
                </div>
            ))}
        </div>
    )
}