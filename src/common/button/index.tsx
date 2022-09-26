import styles from "./Button.module.css";
import React, { ReactNode } from "react";
import { Sizes, Colors } from "types";

type ButtonForms = "default" | "icon" | "block";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    color?: Colors
    size?: Sizes,
    form?: ButtonForms
}

export default function Button({ type = "button", color = "primary", size = "medium", form = "default", disabled = false, onClick, children, ...rest }: ButtonProps) {
    const classes = `${styles.btn} ${styles[color]} ${styles[size]} ${styles[form]}`;
    return <button className={classes} type={type} disabled={disabled} onClick={onClick} {...rest}>{children}</button>
}