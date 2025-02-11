import React from "react"

export default function Footer() {
    return (
        <footer className="p-4 flex flex-row justify-between bg-neutral-300">
            <p>Made by Alexandra Eriksson 2024-2025</p>
            <p>Need help? <a className="text-blue-500 hover:underline hover:cursor-pointer">Contact support</a></p>
            <p>Credits</p>
        </footer>
    )
}