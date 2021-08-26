import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Navbar from '../navBar/NavBar';
import './NewQuestion.css'

const NewQuestion = (props) => {
    return (
        <div className="container">
            <Navbar />
            <Card className="p-0  col-6  col-center " body>
                <CardTitle className="border-bottom text-body text-center fw-bold  p-2 "> <h4>Create New Question</h4></CardTitle>
                <CardText className="p-2">
                    <div className="card-body d-flex flex-column">





                        <div className="fw-bold bgLightColor">Would You Rather</div>
                        <input
                            placeholder="Enter Option One Text Here"
                            type="text" className="form-control my-2" />
                        <div className="my-2">OR</div>
                        <input
                            placeholder="Enter Option Two Text Here"
                            type="text" className="form-control my-2" />
                        <Link className="btn px-5 my-2">Submit</Link>

                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default NewQuestion;