import React from 'react';
import { Link } from "react-router-dom";
const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bgLight">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">

                        <Link className="nav-link active" to="/newquestion">New Question</Link>
                        <Link className="nav-link " to="/leaderboard">leader Board</Link>
                        <Link className="nav-link " to="/">log Out</Link>



                    </div>
                    <div>Hello <span className="fw-bold">ourUser</span></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;