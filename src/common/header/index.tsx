import styles from "./Header.module.css"
import { ReactNode } from "react";
import { Levels } from "types";


interface HeqaderProps {
    level: Levels
    children: ReactNode
}

export default function Header({ level, children }: HeqaderProps) {
    const Component: keyof JSX.IntrinsicElements = `h${level}`;
    return <Component className={styles.header}>{children}</Component>
}