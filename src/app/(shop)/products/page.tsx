/* eslint-disable @next/next/no-img-element */
"use client";

import { useContext } from "react";
import { productArray } from "@/src/components/providers";

export default function Products() {
    const products = useContext(productArray);
    
    return (
        <div>
            <h1 className="my-4 text-center font-semibold underline text-2xl">Products</h1>
            <div className="flex flex-row justify-center flex-wrap gap-2">
                {products.products.map((value) => (
                    <div key={Math.random()} className="p-2 w-40 flex flex-col justify-center text-center shadow hover:bg-slate-300 hover:cursor-pointer">
                        <img src={value.images[0]} alt={`Image of ${value.title}`} className="object-contain size-36" />
                        <p>{value.title}</p>
                        <p>${value.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}