/* eslint-disable @next/next/no-img-element */
"use client";

import AddButton from "@/src/components/AddButton";
import { productI } from "@/src/components/interfaces";
import useFetch from "@/src/hooks/useFetch";
import React from "react";

export default function ProductPage({ params }: {params: {productId: string | number}}) {
    const { data } = useFetch<productI>(`https://dummyjson.com/products/${params.productId}`);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-4 text-center font-semibold underline text-2xl">{data?.title}</h1>
      <img src={data?.images[0]} alt={`Image of ${data?.title}`} className="object-contain size-96"/>
      <p className="mx-12 my-4">{data?.description}</p>
      <p className="m-4">${data?.price}</p>
      <AddButton id={params.productId} />
    </div>
  )
}