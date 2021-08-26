import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const QuestionPoll = (props) => {
    //const Q_forPoll = props.location.state.Q_forPoll
    console.log("QuestionPoll", props)
    return (
        <div className="col-6  col-center">
            <Card className="p-0" body>
                <CardTitle className="bg-light fw-bold text-start p-2 ">props.Q.author Asks</CardTitle>
                <CardText className="p-2">
                    <div className="d-flex">
                        <div className="imgAvatar border-success d-flex flex-column justify-content-center rounded-circle border">
                            props.Q.author
                        </div>
                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">
                                <div>props.Q.optionOne.textdddddddd</div>
                                <div>props.Q.optionTwo.text</div>
                            </div>
                        </div>
                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default QuestionPoll;