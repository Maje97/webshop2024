"use client";

import React from "react";
import useFetch from "../hooks/useFetch";
import { productI } from "./interfaces";
import { useCartStore } from "../store/cart";

export default function AddButton({ id }: { id: string | number }) {
    const { data } = useFetch<productI>(`https://dummyjson.com/products/${id}`);
    const cart = useCartStore(state => state.items);
    const addItem = useCartStore(state => state.addItem);
    const removeItem = useCartStore(state => state.removeItem);

    if (data !== null) {
        if (cart.some(e => e.id === Number(id))) {
            return (
                <button 
                    className="m-2 p-2 border border-black rounded-md hover:bg-slate-300 hover:cursor-pointer" 
                    onClick={() => removeItem(data.id)}
                >
                    Remove from cart
                </button>
            )
        } else {
            return (
                <button 
                    className="m-2 p-2 border border-black rounded-md hover:bg-slate-300 hover:cursor-pointer" 
                    onClick={() => addItem(data.id, 1, data.price)}
                >
                    Add to cart
                </button>
            )
        }
    }
}