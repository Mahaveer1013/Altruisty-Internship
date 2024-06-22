import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export function Main() {
    return <>
        <HashRouter>
            <Routes>
               <Route path="/" element={<Home/>} />
            </Routes>
        </HashRouter>
    </>
}



// import IpssForm from "./IpssForm";
// import IpssView from "./IpssView";
// import ProblemStatement from "./HackathonPage";

// export function Main() {
//     return <>
//         <HashRouter>
//             <Routes>
//                 <Route index element={<IpssForm />} />
//                 <Route path="view" element={<IpssView />} />
//                 <Route path="hackathons" element={<ProblemStatement />} />
//             </Routes>
//         </HashRouter>
//     </>
// }

