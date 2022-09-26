import "./index.css";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (obj: any) => void
    label?: string
}

export default function Input({ label = "", onChange, ...rest }: InputProps) {
    return <>
        <label htmlFor="baseInput">{label}</label>
        <input id="baseInput" onChange={onChange} {...rest} />
    </>
}