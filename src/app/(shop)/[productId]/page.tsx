/* eslint-disable @next/next/no-img-element */
"use client";

import AddButton from "@/src/components/AddButton";
import { productArray } from "@/src/components/providers";
import React from "react";
import { useContext } from "react";

export default function ProductPage({ params }: {params: {productId: string | number}}) {
    const products = useContext(productArray);
    const product = products.products[Number(params.productId) - 1];

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-4 text-center font-semibold underline text-2xl">{product.title}</h1>
      <img src={product.images[0]} alt={`Image of ${product.title}`} className="object-contain size-96"/>
      <p className="m-8">{product.description}</p>
      <p>${product.price}</p>
      <AddButton id={params.productId} />
    </div>
  )
}