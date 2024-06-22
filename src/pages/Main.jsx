import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import PostProblem from "./PostProblem";
import Admin from "./Admin";
import HackathonPage from "./HackathonPage";
import AllHackathons from "./AllHackathons";
import ViewHackathon from "./ViewHackathon";

export function Main() {
    return <>
        <HashRouter>
            <Navbar />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post-problem" element={<PostProblem />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/hackathons">
                        <Route index element={<HackathonPage />} />
                        <Route path="all-hackathons" element={<AllHackathons />} />
                        <Route path=":id" >
                            <Route index element={<ViewHackathon />} />
                            <Route path="submit-solution" element={<HackathonPage />} />
                        </Route>
                        {/* <Route path="submit-solution" element={<HackathonPage />} /> */}
                    </Route>
                </Routes>
            </div>
        </HashRouter>
    </>
}




