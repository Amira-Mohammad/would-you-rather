import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

const QuestionDetails = (props) => {
    return (
        <div className="container col-6 col-center">

            <Card className="p-0 m-2" body>
                <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">
                    {/* {props.Q.author}  */}
                    Asks QuestionDetails</CardTitle>
                <CardText className="p-2">
                    <div className="d-flex">
                        <div className="w-25 border-end border-success d-flex flex-column justify-content-center">ffffffffff</div>
                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">
                                QuestionTitle
                                {/* {props.Q.id} */}
                            </div>
                            <Link className="btn px-5" to="/questionDetails">Submit vote</Link>
                        </div>
                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default QuestionDetails;