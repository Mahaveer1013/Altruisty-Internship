import IpssForm from "./IpssForm";
import IpssView from "./IpssView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Main() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route index element={<IpssForm />} />
                <Route path="/view" element={<IpssView />} />
            </Routes>
        </BrowserRouter>
    </>
}