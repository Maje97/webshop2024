"use client";

import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { productI } from "./interfaces";

export const productArray = createContext<productI>({
    "products": [
      {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 7.17,
        "rating": 4.94,
        "stock": 5,
        "tags": [
          "beauty",
          "mascara"
        ],
        "brand": "Essence",
        "sku": "RCH45Q1A",
        "weight": 2,
        "dimensions": {
          "width": 23.17,
          "height": 14.43,
          "depth": 28.01
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "reviews": [
          {
            "rating": 2,
            "comment": "Very unhappy with my purchase!",
            "date": "2024-05-23T08:56:21.618Z",
            "reviewerName": "John Doe",
            "reviewerEmail": "john.doe@x.dummyjson.com"
          },
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 24,
        "meta": {
          "createdAt": "2024-05-23T08:56:21.618Z",
          "updatedAt": "2024-05-23T08:56:21.618Z",
          "barcode": "9164035109868",
          "qrCode": "..."
        },
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      },
    ],
    "total": 194,
    "skip": 0,
    "limit": 30
  });

export const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { data } = useFetch("https://dummyjson.com/products");
  

  return (
    <productArray.Provider value={ data } >
      {children}
    </productArray.Provider>
  )
}