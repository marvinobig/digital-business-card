import React from "react";
import QR from "../media/qr-code.png"

export default function Header() {
    return (
        <header>
            <img id="me" src={QR} alt="picture of Marvin Obig" />
        </header>
    )
}