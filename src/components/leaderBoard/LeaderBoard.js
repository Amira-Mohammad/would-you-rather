import React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';
import NavBar from '../navBar/NavBar';
import { connect } from 'react-redux';
import { handleInitialData } from '../../Actions/index';
import './LeaderBoard.css'
class LeaderBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {},
            questions: {}
        };

    }
    componentDidMount() {
        this.props.dispatch(handleInitialData())

    }
    componentDidUpdate(prevProps) {
        if (prevProps.users != this.props.users) {
            this.setState({
                users: this.props.users
            })

        }


        if (prevProps.questions != this.props.questions) {
            this.setState({
                questions: this.props.questions
            })

        }

    }

    render() {

        return (
            <div>
                <NavBar />

                {Object.keys(this.state.users).map((user) => {
                    return (

                        <Card className="p-0 container col-6 col-center " body>
                            <CardText className="p-2">
                                <div className="d-flex ">
                                    <div className="imgAvatar d-flex flex-column justify-content-center rounded-circle border">
                                        props.Q.author
                                    </div>
                                    <div className="px-3 border-end  "> <span className="visually-hidden">ssssssss</span></div>
                                    <div className="w-75 border-end  px-3">
                                        <div className="fw-bold bgLightColor">{this.state.users[user].name}</div>
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
                                                <div className="score card-text border rounded-circle bg-success">
                                                    {this.props.users.johndoe.questions.length}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </CardText>

                        </Card>




                    )
                })}




            </div>
        );
    }
}

function mapStateToProps({ users, questions }) {


    return {
        users,
        questions
        //.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(LeaderBoard);