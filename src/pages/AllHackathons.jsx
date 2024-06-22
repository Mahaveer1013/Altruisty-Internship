import React, { useState, useEffect, useCallback } from 'react';
import Hackathon from '../components/Hackathon';
import '../css/hackathon.css';
import { hackathonData } from '../datas/hackathonData';

const AllHackathons = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        challenge: '',
        datePosted: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedHackathons, setDisplayedHackathons] = useState([]);
    const [loading, setLoading] = useState(false);

    const hackathonsPerPage = 10;

    useEffect(() => {
        const initialHackathons = hackathonData.slice(0, hackathonsPerPage);
        setDisplayedHackathons(initialHackathons);
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const loadMoreHackathons = useCallback(() => {
        if (loading) return;
        setLoading(true);
        setTimeout(() => {
            const nextPage = currentPage + 1;
            const newHackathons = hackathonData.slice(0, nextPage * hackathonsPerPage);
            setDisplayedHackathons(newHackathons);
            setCurrentPage(nextPage);
            setLoading(false);
        }, 1000);
    }, [currentPage, loading]);

    const filteredHackathons = displayedHackathons.filter((hackathon) => {
        return (
            (filters.category === '' || hackathon.category === filters.category) &&
            (filters.challenge === '' || hackathon.challenge === filters.challenge) &&
            (filters.datePosted === '' || hackathon.date_posted === filters.datePosted) &&
            (searchTerm === '' || hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            loadMoreHackathons();
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreHackathons]);

    const [showFilter, setShowFilter] = useState(true);

    const AlterFilters = () => {
        setShowFilter(prev => (!prev));
    }

    return (
        <div className="hackathons-page">
            <div className="hackathon-search">
                <label htmlFor="search-hackathon">
                    <span className="material-symbols-outlined">search</span>
                    <input
                        type="search"
                        placeholder="Search Problems"
                        id="search-hackathon"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </label>
                <button className="submit-search-hackathon">Search Hackathon</button>
                <button className="submit-search-hackathon-symbol">
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
            <div className="all-hackathon-page main-hackathon-page">
                <div className="filter-for-hackathon">
                    <h2 className="heading" onClick={AlterFilters}>
                        <span className="material-symbols-outlined">filter_alt</span>
                        Filters
                        <div className="drop-down closed">
                            <span className="material-symbols-outlined">arrow_drop_down</span>
                        </div>
                    </h2>
                    { showFilter && <div className="filter-options">
                        <label>
                            Category:
                            <select name="category" value={filters.category} onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="AI">AI</option>
                                <option value="Interview">Interview</option>
                            </select>
                        </label>
                        <label>
                            Challenge:
                            <select name="challenge" value={filters.challenge} onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </label>
                        <label>
                            Date Posted:
                            <select name="datePosted" value={filters.datePosted} onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="2024-06-20">2024-06-20</option>
                                <option value="2024-06-15">2024-06-15</option>
                                <option value="2024-06-10">2024-06-10</option>
                                <option value="2024-06-05">2024-06-05</option>
                            </select>
                        </label>
                    </div>}
                </div>
                <div className="all-hackathon hackathon-list-page">
                    <h1>All Problems</h1>
                    <div className="hackathon-lists">
                        {filteredHackathons.map((hackathon) => (
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
                    {loading && <div className="loading-div"><div className="loading"></div></div>}
                </div>
            </div>
        </div>
    );
};

export default AllHackathons;