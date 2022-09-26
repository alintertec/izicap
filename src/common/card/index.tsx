import styles from "./Card.module.css";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode
}

export default function Card({ children }: CardProps) {
    return <div className={styles.card}>{children}</div>
}