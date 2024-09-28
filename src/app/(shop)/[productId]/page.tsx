"use client";

import { productArray } from "@/src/components/providers";
import React from "react";
import { useContext } from "react";

export default function ProductPage({ params }: {params: {productId: string | number}}) {
    const products = useContext(productArray);

  return <h1>Product {products.products[Number(params.productId)].title}</h1>
}