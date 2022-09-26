import styles from "./Layout.module.css";
import Navigation from "components/navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return <>
        <div className={styles.layout}>
            <div className={styles.layout__nav}><Navigation /></div>
            <main className={styles.layout__main}>
                <div className="text-right pa-md">Powered by FOURSQUARE</div>
                <Outlet />
            </main>
        </div>
    </>
}