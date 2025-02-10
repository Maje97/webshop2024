/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react"
import { useRouter } from "next/navigation";
import useFetch from "../hooks/useFetch";
import { productListI } from "./interfaces";

export default function ProductList() {
    const { data } = useFetch<productListI>('https://dummyjson.com/products');
    const router = useRouter();

    return (
        <div className="flex flex-row justify-center flex-wrap gap-2">
            {data?.products.map((value) => (
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