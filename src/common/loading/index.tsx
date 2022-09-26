import styles from "./Loading.module.css";

export default function Loading() {
    return <div className={styles.loading}>
        <div className={styles.loading__dots}></div>
    </div>
}