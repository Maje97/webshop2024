import useFetch from "@/src/hooks/useFetch";
import React from "react";

export async function generateStaticParams() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useFetch("https://dummyjson.com/products");
   
  return data.products.map((prod) => ({
    productId: prod.id,
  }))
}

export default function ProductPage({ params }: {params: {productId: string | number}}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { productId } = params; 
    return <h1>Product {params.productId}</h1>
}