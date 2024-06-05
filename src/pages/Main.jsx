import IpssForm from "./IpssForm";
import IpssView from "./IpssView";
import { HashRouter, Routes, Route } from "react-router-dom";

export function Main() {
    return <>
        <HashRouter>
            <Routes>
                <Route index element={<IpssForm />} />
                <Route path="view" element={<IpssView />} />
            </Routes>
        </HashRouter>
    </>
}