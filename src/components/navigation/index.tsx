import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {

    return <nav className={styles.nav}>
        <Link to="/"><span className={styles.nav__icon}>&#9737;</span> Places Near Me</Link>
    </nav>
}