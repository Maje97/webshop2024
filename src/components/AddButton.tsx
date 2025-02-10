"use client";

import React from "react";
import useFetch from "../hooks/useFetch";
import { productI } from "./interfaces";

export default function AddButton({ id }: { id: string | number }) {
    const { data } = useFetch<productI>(`https://dummyjson.com/products/${id}`);

    return (
        <button onClick={() => console.log(data)}>Add to cart</button>
    )
}