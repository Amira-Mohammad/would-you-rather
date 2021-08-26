import React from 'react';
import { Link } from "react-router-dom";
const NavBar = (props) => {
    console.log('props from NavBar', props);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bgLight">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Home</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/dashboard">Dshboard</Link>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">

                        <Link className="nav-link active" to="/newquestion">newquestion</Link>
                        <Link className="nav-link " to="/leaderboard">leaderboard</Link>
                        <Link className="nav-link " to="/">logOut</Link>



                    </div>
                    <div>Hello <span className="fw-bold">ffffffffff</span></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;