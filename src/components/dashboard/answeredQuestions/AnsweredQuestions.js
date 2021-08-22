import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
const AnsweredQuestions = (props) => {
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
                            <div className="QuestionTitle my-2">be a frontend developer </div>
                            <Button>Go somewhere</Button>
                        </div>
                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default AnsweredQuestions;