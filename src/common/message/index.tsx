import styles from "./Message.module.css";
import { Sizes, Colors } from "types";

interface MessageProps {
    message: string,
    color?: Colors,
    size?: Sizes
}

export default function Message({ message, color = "primary", size = "medium" }: MessageProps) {
    const classes = `${styles.message} ${styles[color]} ${styles[size]}`;
    return <div className={classes}>{message}</div>
}