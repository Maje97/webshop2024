"use client";

import { productArray } from "@/src/components/providers";
import React from "react";
import { useContext } from "react";

export default function AddButton({ id }: { id: string | number }) {
    const products = useContext(productArray);
    const product = products.products[Number(id) - 1];

    return (
        <button>Add to cart</button>
    )
}