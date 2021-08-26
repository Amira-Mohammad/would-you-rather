import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NavBar from '../navBar/NavBar';
import { connect } from 'react-redux';
import { handleInitialData } from '../../Actions/index';
import './LeaderBoard.css'

const LeaderBoard = (props) => {

    const [question, setQuestion] = useState({});
    const [users, setUsers] = useState({});
    useEffect(() => {
        props.dispatch(handleInitialData())
        if (!props.question) {


            setQuestion(props.questions)
        }

        if (!props.users) {


            setUsers(props.users)
        }

        console.log('typeof question', typeof question);
        console.log('questionssssssssssssssss', question);
        console.log('userssssssssssssssssssss', users);
        console.log('propsssssssss from dashhhhhhhhhhboard', props);

    });


    return (
        <div>
            <NavBar />



            <Card className="p-0 container col-6 col-center " body>
                <CardText className="p-2">
                    <div className="d-flex ">
                        <div className="imgAvatar d-flex flex-column justify-content-center rounded-circle border">
                            props.Q.author
                        </div>
                        <div className="px-3 border-end  "> <span className="visually-hidden">ssssssss</span></div>
                        <div className="w-75 border-end  px-3">
                            <div className="fw-bold bgLightColor">Name</div>
                            <div className="d-flex justify-content-around">
                                <div>Answered Questions</div>
                                <div>5</div>
                            </div>

                            <div className="d-flex justify-content-around">
                                <div>Created Questions</div>
                                <div>7</div>
                            </div>

                        </div>
                        <div className="px-3">
                            <div className="card" >
                                <div className="bg-light p-3 border-bottom">Score</div>
                                <div className="card-body d-flex justify-content-center text-light">
                                    <div className="score card-text border rounded-circle bg-success">10</div>

                                </div>
                            </div>
                        </div>
                    </div>


                </CardText>

            </Card>


        </div>
    );
};

function mapStateToProps({ users, questions }) {
    console.log('from maappping', users);

    return {
        users,
        questions
        //.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(LeaderBoard);