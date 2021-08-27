import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import UnAnsweredQuestions from './unAnsweredQuestions/UnAnsweredQuestions';
import AnsweredQuestions from './answeredQuestions/AnsweredQuestions';
import NavBar from '../navBar/NavBar';
import { connect } from 'react-redux'
import { handleInitialData } from '../../Actions/index'
import './Dashboard.scss'

const Dashboard = (props) => {

    console.log('xssssssss', props);


    const [question, setQuestion] = useState({});

    useEffect(() => {
        // props.handleInitialData()
        // if (!props.question) {


        //     setQuestion(props.questions)

        // }


    }, []);



    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>

            <NavBar />

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

                                {Object.keys(props.questions).sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)
                                    .map((Q) => {
                                        return (<UnAnsweredQuestions key={Q.id} usersData={props.users} Q={props.questions[Q]} />

                                        )
                                    })}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="mt-4">
                            <Col sm="12">
                                {Object.keys(props.questions).map((Q) => {
                                    return (<AnsweredQuestions key={Q.id} Q={props.questions[Q]} />

                                    )
                                })
                                }

                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </>
    );
};

function mapStateToProps({ questions, users }) {
    return {
        questions,
        users

    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleInitialData: () => {
            dispatch(handleInitialData())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);