import Layout from "layout";
import Error from "common/error";
import Home from "pages/Home";
import Places from "pages/Places";
import { Routes, Route } from "react-router-dom";

export default function Router() {
    return <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="*" element={<Error code={404} message="Sorry, that page doesn't exist!" />} />
        </Route>
    </Routes>
}