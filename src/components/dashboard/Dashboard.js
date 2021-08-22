import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import UnAnsweredQuestions from './unAnsweredQuestions/UnAnsweredQuestions';
import AnsweredQuestions from './answeredQuestions/AnsweredQuestions';
import NavBar from '../navBar/NavBar';
import { connect } from 'react-redux'
import { handleInitialData } from '../../Actions/index'
import './Dashboard.scss'

const Dashboard = (props) => {

    const [question, setQuestion] = useState({});

    useEffect(() => {
        props.dispatch(handleInitialData())
        if (!props.question) {


            setQuestion(props.questions)
        }
        console.log('typeof question', typeof question);
        console.log('questionssssssssssssssss', question);
        console.log('propsssssssss from dashhhhhhhhhhboard', props);

    });



    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <NavBar loginUser={props.location.state.loginUser} />

            <div className="container col-6 col-center mt-5 border p-2">

                <Nav className="justify-content-center" tabs>
                    <NavItem className="w-50">
                        <NavLink className="NavItem"
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            UnAnswered Questions

                        </NavLink>
                    </NavItem>
                    <NavItem className="w-50 border-bottom">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Answered Questions
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row className="mt-4">
                            <Col sm="12">

                                {Object.keys(question).map((Q) => {
                                    return (<UnAnsweredQuestions Q={question[Q]} />

                                    )
                                })}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="mt-4">
                            <Col sm="12">
                                {Object.keys(question).map((Q) => {
                                    return (<AnsweredQuestions Q={question[Q]} />

                                    )
                                })}

                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </>
    );
};

function mapStateToProps({ questions }) {
    console.log('questions from maappping', questions);

    return {
        questions
        //.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);