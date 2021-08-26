import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import './questionDetails.scss'
const QuestionDetails = (props) => {
    console.log("Q_id props", props.location.state.questionProps)
    console.log("Q_id", props)
    const questionDetails_ID = props.match.params.id;
    const questionProps_Data = props.location.state.questionProps
    return (
        <div className="container col-6 col-center">

            <Card className="p-0 m-2" body>
                <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">
                    {/* {props.Q.author}  */}
                    {questionProps_Data.author} Asks </CardTitle>
                <CardText className="p-2">
                    <div className="d-flex">
                        <div className="w-25 border-end border-success d-flex flex-column justify-content-center">{questionProps_Data.author}</div>
                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">
                                {questionDetails_ID}
                                {questionProps_Data.author}
                                {/* {props.Q.id} */}
                            </div>

                            <div>
                                <input class="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios1" value="" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    {props.location.state.questionProps.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <input class="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios2" value="" />
                                <label class="form-check-label" for="exampleRadios2">
                                    {props.location.state.questionProps.optionTwo.text}
                                </label>
                            </div>


                            <button className="btn px-5">Submit vote</button>
                        </div>
                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default QuestionDetails;