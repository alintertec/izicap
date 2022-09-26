import styles from "./Error.module.css";

interface ErrorProps {
    code?: number;
    message?: string
}

export default function Error({ code, message = "Something went wrong. Please try again later." }: ErrorProps) {
    return <div className={styles.error}>
        {code && <div className={styles.error__code}>{code}</div>}
        <div className={styles.error__text}> {message}</div>
    </div>
}