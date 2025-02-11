// Not in use
'use client';
import { createContext, useContext, useState } from "react";

interface cartContentI {
    "id": number;
    "quantity": number;
}

interface cartI {
    "customer": {
        "name": string | undefined;
        "adress": string | undefined;
        "number": string | undefined;
        "mail": string | undefined;
    },
    "cartContent": Array<cartContentI>
}

const CartContext = createContext<unknown>({
    customer: {
        name: undefined,
        adress: undefined,
        number: undefined,
        mail: undefined
    },
    cartContent: []
});

export function AppWrapper({ children } : {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState<cartI>({
            customer: {
                name: undefined,
                adress: undefined,
                number: undefined,
                mail: undefined
            },
            cartContent: []
    });

    return (
        <CartContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext);
}