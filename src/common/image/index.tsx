import styles from "./Image.module.css"
import React from "react"

export default function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img className={styles.image} {...props}></img>
}