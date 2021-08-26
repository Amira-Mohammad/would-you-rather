import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Navbar } from 'reactstrap';
import NavBar from '../../navBar/NavBar'
import { Link } from "react-router-dom";
const AnsweredQuestions = (props) => {
    console.log('props FROM answered Qs', props.Q);

    return (
        <div>
            <Card className="p-0 " body>
                <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">{props.Q.author} Asks</CardTitle>
                <CardText className="p-2">
                    <div className="d-flex">
                        <div className="imgAvatar border-success d-flex flex-column justify-content-center rounded-circle border">
                            {props.Q.author}
                        </div>
                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">
                                <div>{props.Q.optionOne.text}</div>
                                <div>{props.Q.optionTwo.text}</div>
                            </div>
                            <Link className="btn px-5"
                                to={{ pathname: "/questionPoll", state: { Q_forPoll: props.Q } }}
                                to="/questionPoll">
                                View Poll
                            </Link>
                        </div>
                    </div>
                </CardText>

            </Card>
        </div>
    );
};

export default AnsweredQuestions;