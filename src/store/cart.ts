/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

export type CartItem = {
    id: number
    quantity: number
}

export type State = {
    items: CartItem[]
}

export type Actions = {
    addItem: (id: number, quantity: number, price: number) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
}

export const useCartStore = create<State & Actions>()(set => ({
    items: [],
    addItem: (id: number, quantity: number, price: number) => set((state) => ({
        items: [
            ...state.items,
            {id, quantity, price}
        ]
    })),
    removeItem: (id: number) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
    })),
    updateQuantity: (id: number, quantity: number) => set((state) => ({
        items: state.items.map(item => item.id === id ? {...item, quantity} : item)
    }))
}))