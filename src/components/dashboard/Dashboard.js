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

    // console.log('questions', props.questions);
    // console.log('users', props.users.users);
    // console.log('loginUser', props.users.loginUser);




    const questionsForLoop = Object.entries(props.questions);
    const usersForLoop = Object.entries(props.users.users);

    const questions_UnAnswered = [];
    const questions_Answered = [];

    // console.log('questions keys', questionsForLoop);
    // console.log('users keys', usersForLoop);

    let currentLogin = {}
    usersForLoop.map((userFormLoop) => {

        if (userFormLoop[0] == props.users.loginUser) {
            currentLogin = userFormLoop
        }

    })

    // console.log('currentLogin', Object.entries(currentLogin)[1][1].answers);
    // console.log('currentLogin', Object.entries(currentLogin)[1][1].avatarURL);

    questionsForLoop.map((questionFormLoop) => {



        if (Object.entries(currentLogin)[1][1].answers.hasOwnProperty(questionFormLoop)) {

            //     if (currentLogin[1].answers.includes(questionFormLoop)[0]) {
            questions_Answered.push(questionFormLoop[1])

            // console.log('y', questionFormLoop);


        } else {
            questions_UnAnswered.push(questionFormLoop[1])
        }

    })

    // console.log('questions_Answered', questions_Answered);
    // console.log('questions_UnAnswered', questions_UnAnswered);



    // for (const key of Object.entries(props.questions)) {
    //     console.log(`${key}`);
    // }



    // function currentLoginUser(logInUser) {
    //     return logInUser.id === props.users.loginUser;
    // }

    // console.log(Object.keys(props.users.users).find(currentLoginUser));

    // const result = Object.keys(props.users.users).find((logInUser) => logInUser.id === props.users.loginUser);

    // console.log(result)





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

                                {questions_UnAnswered.sort((a, b) => b.timestamp - a.timestamp)
                                    .map((question_UnAnswered) => {
                                        return (
                                            <UnAnsweredQuestions
                                                avatar={Object.entries(currentLogin)[1][1].avatarURL}
                                                Q={question_UnAnswered} />

                                        )
                                    })

                                }
                            </Col>
                            {/* <Col sm="12">

                                {Object.keys(props.questions).sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)
                                    .map((Q) => {
                                        return (<UnAnsweredQuestions
                                            avatar={Object.entries(currentLogin)[1][1].avatarURL}
                                            key={Q} usersData={props.users} Q={props.questions[Q]} />

                                        )
                                    })}
                            </Col> */}
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="mt-4">

                            <Col sm="12">
                                {questions_Answered.sort((a, b) => b.timestamp - a.timestamp).map((question_Answered) => {
                                    return (<AnsweredQuestions
                                        avatar={Object.entries(currentLogin)[1][1].avatarURL}
                                        Q={question_Answered}
                                    />

                                    )
                                })
                                }

                            </Col>

                            {/* <Col sm="12">
                                {Object.keys(props.questions).map((Q) => {
                                    return (<AnsweredQuestions key={Q} Q={props.questions[Q]} />

                                    )
                                })
                                }

                            </Col> */}
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