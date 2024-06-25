import React from "react";
import Hackathon from "../components/Hackathon";
import { Link } from "react-router-dom";
import '../css/hackathon.css'

const hackathons = [
    {
        id: 1,
        title: 'AI in Healthcare',
        timeline: '1 hour left',
        mode: 'Offline, Chennai',
        company_name: 'HealthTech Co.',
        category: 'AI',
        challenge: 'Beginner',
        date_posted: '2024-06-20'
    },
    {
        id: 2,
        title: 'Zoho Interview Prep',
        timeline: '12 days left',
        mode: 'Online',
        company_name: 'Zoho Corporation',
        category: 'Interview',
        challenge: 'Intermediate',
        date_posted: '2024-06-15'
    },
    {
        id: 3,
        title: 'Google AI Challenge',
        timeline: '1 day left',
        mode: 'Offline, Coimbatore',
        company_name: 'Google',
        category: 'AI',
        challenge: 'Advanced',
        date_posted: '2024-06-10'
    },
    {
        id: 4,
        title: 'Zoho AI Hackathon',
        timeline: '6 hours left',
        mode: 'Online',
        company_name: 'Zoho Corp',
        category: 'AI',
        challenge: 'Advanced',
        date_posted: '2024-06-05'
    }
];

const featuredHackathons = [
    {
        id: 6,
        title: 'Data Science Bootcamp',
        timeline: '10 days left',
        mode: 'Online',
        company_name: 'DataWorks',
        category: 'Data Science',
        challenge: 'Intermediate',
        date_posted: '2024-06-11'
    },
    {
        id: 7,
        title: 'Cybersecurity 101',
        timeline: '5 hours left',
        mode: 'Offline, Delhi',
        company_name: 'SecureNet',
        category: 'Cybersecurity',
        challenge: 'Beginner',
        date_posted: '2024-06-20'
    },
    {
        id: 8,
        title: 'Python Coding Challenge',
        timeline: '2 days left',
        mode: 'Online',
        company_name: 'CodeAcademy',
        category: 'Programming',
        challenge: 'Intermediate',
        date_posted: '2024-06-13'
    },
    {
        id: 9,
        title: 'Cloud Computing Hackathon',
        timeline: '7 days left',
        mode: 'Offline, Hyderabad',
        company_name: 'CloudSolutions',
        category: 'Cloud Computing',
        challenge: 'Advanced',
        date_posted: '2024-06-14'
    }
];

const leaderboard = [
    { name: 'Ram Kumar', solutions: 67 },
    { name: 'Monish', solutions: 34 },
    { name: 'Sophia', solutions: 29 },
    { name: 'Ravi', solutions: 25 },
    { name: 'Priya', solutions: 22 },
    { name: 'John', solutions: 20 },
    { name: 'Aria', solutions: 18 },
    { name: 'Chen', solutions: 16 },
    { name: 'Maria', solutions: 14 },
    { name: 'Liam', solutions: 12 },
    { name: 'Anya', solutions: 11 },
    { name: 'Oliver', solutions: 10 },
    { name: 'Akira', solutions: 9 },
    { name: 'Fatima', solutions: 8 },
    { name: 'Samuel', solutions: 7 }
];

export default function HackathonPage() {
    return (
        <>
            <div className="hackathons-page">
                <div className="hackathon-search">
                    <label htmlFor="search-hackathon">
                        <span className="material-symbols-outlined">search</span>
                        <input type="search" placeholder="Search Problems" id="search-hackathon" />
                    </label>
                    <button className="submit-search-hackathon">Search Hackathon</button>
                    <button className="submit-search-hackathon-symbol">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
                <div className="main-hackathon-page">
                    <div className="hackathon-list-page">
                        <h1>Problems for you</h1>
                        <div className="hackathon-lists">
                            {hackathons.map((hackathon) => (
                                <Hackathon
                                    key={hackathon.id}
                                    id={hackathon.id}
                                    title={hackathon.title}
                                    timeline={hackathon.timeline}
                                    mode={hackathon.mode}
                                    company_name={hackathon.company_name}
                                />
                            ))}
                            <Link to='all-hackathons' className="see-all-btn">
                                <span className="material-symbols-outlined">arrow_forward</span>
                                See all Problems
                            </Link>
                        </div>
                    </div>
                    <div className="hackathon-leaderboard-page">
                        <h1>Leaderboard</h1>
                        <table className="hackathon-leaderboard-table">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td className="hackathons-th" colSpan={2}>Solutions submitted</td>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboard.map((entry, index) => (
                                    <tr key={index}>
                                        <td>
                                            <p>{index + 1}. <Link to="#">{entry.name}</Link></p>
                                        </td>
                                        <td>{entry.solutions}</td>
                                        <td>
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="featured-hackathon-page">
                    <h1>Recently Posted Problems</h1>
                    <div className="featured-hackathon-lists">
                        {featuredHackathons.map((hackathon) => (
                            <Hackathon
                                key={hackathon.id}
                                id={hackathon.id}
                                title={hackathon.title}
                                timeline={hackathon.timeline}
                                mode={hackathon.mode}
                                company_name={hackathon.company_name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
