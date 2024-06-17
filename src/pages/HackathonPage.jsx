import React from "react";
import Hackathon from "../components/Hackathon";
import hackathon_poster_1 from '../images/medium_square.png'
import hackathon_poster_2 from '../images/medium_square (1).png'
import hackathon_poster_3 from '../images/medium_square.jpg'
import { Link } from "react-router-dom";

export default function HackathonPage() {
    
    return (
        <>
            <div className="hackathons-page">
                <div className="hackathon-search">
                    <label htmlFor="search-hackathon">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        <input type="search" placeholder="Search hackathon by ID or Name" id="search-hackathon" />
                    </label>
                    <button className="submit-search-hackathon">Search Hackathon</button>
                    <button className="submit-search-hackathon-symbol">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>

                </div>
                <div className="main-hackathon-page">
                    <div className="hackathon-list-page">
                        <h1>Hackathons for you</h1>
                        <div className="hackathon-lists">
                            <Hackathon
                                img={hackathon_poster_1}
                                title = 'MICROSOFT DEVELOPERS AI LEARNING HACKATHON'
                                timeline = '1 hour left'
                                mode='Offline, Chennai'
                                company_name = 'Microsoft'
                            />
                            <Hackathon
                                img={hackathon_poster_2}
                                title = 'Zoho Interview clearing hackathon'
                                timeline = '12 days left'
                                mode = 'Online'
                                company_name = 'Zoho, Corporation of India'
                            />
                            <Hackathon
                                img={hackathon_poster_3}
                                title = 'MICROSOFT DEVELOPERS AI LEARNING HACKATHON'
                                timeline = '1 day left'
                                mode = 'Offline, Coimbatore'
                                company_name = 'Google'
                            />
                            <Hackathon
                                img={hackathon_poster_1}
                                title = 'MICROSOFT DEVELOPERS AI LEARNING HACKATHON'
                                timeline = '6 hours left'
                                mode = 'Online'
                                company_name = 'Zoho, Information technology'
                            />
                            <button className="see-all-btn">See all hackathons</button>
                        </div>
                    </div>
                    <div className="hackathon-leaderboard-page">
                        <h1>Top hacakathons themes</h1>
                        <table className="hackathon-leaderboard-table">
                            <thead>
                                <tr>
                                    <td>Theme</td>
                                    <td className="hackathons-th">Hackathon</td>
                                    <td className="hackathons-small-th">#</td>
                                    <td>Total prizes</td>
                                    <td> </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>1. <Link>Beginner Friendly</Link></p>
                                    </td>
                                    <td>
                                        57
                                    </td>
                                    <td>
                                        $608,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>2. <Link>Machine Learning</Link></p>
                                    </td>
                                    <td>
                                        34
                                    </td>
                                    <td>
                                        $1,335,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>3. <Link>Social Good</Link></p>
                                    </td>
                                    <td>
                                        57
                                    </td>
                                    <td>
                                        $438,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>4. <Link>Open Ended</Link></p>
                                    </td>
                                    <td>
                                        24
                                    </td>
                                    <td>
                                        $137,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>5. <Link>Beginner Friendly</Link></p>
                                    </td>
                                    <td>
                                        57
                                    </td>
                                    <td>
                                        $608,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>6. <Link>Machine Learning</Link></p>
                                    </td>
                                    <td>
                                        34
                                    </td>
                                    <td>
                                        $1,335,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>7. <Link>Social Good</Link></p>
                                    </td>
                                    <td>
                                        57
                                    </td>
                                    <td>
                                        $438,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>8. <Link>Open Ended</Link></p>
                                    </td>
                                    <td>
                                        24
                                    </td>
                                    <td>
                                        $137,000
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="feautured-hackathon-page">
                    <h1>Featured online hackathons</h1>
                    <div className="featured-hackathon-lists">
                        <Hackathon
                            img={hackathon_poster_1}
                            title = 'MICROSOFT DEVELOPERS AI LEARNING HACKATHON'
                            timeline = '1 hour left'
                            mode='Offline, Chennai'
                            company_name = 'Microsoft'
                        />
                        <Hackathon
                            img={hackathon_poster_2}
                            title = 'Zoho Interview clearing hackathon'
                            timeline = '12 days left'
                            mode = 'Online'
                            company_name = 'Zoho, Corporation of India'
                        />
                        <Hackathon
                            img={hackathon_poster_3}
                            title = 'MICROSOFT DEVELOPERS AI LEARNING HACKATHON'
                            timeline = '1 day left'
                            mode = 'Offline, Coimbatore'
                            company_name = 'Google'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
