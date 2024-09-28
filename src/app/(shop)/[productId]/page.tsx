"use client";

import { useContext } from "react";
import { productArray } from "@/src/components/providers";

export async function generateStaticParams() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const products = useContext(productArray);
   
  return products.products.map((prod) => ({
    productId: prod.id,
  }))
}

export default function ProductPage({ params }: {params: {productId: string | number}}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { productId } = params; 
    return <h1>Product {params.productId}</h1>
}