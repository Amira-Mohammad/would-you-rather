import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import NavBar from '../../navBar/NavBar';
import './questionDetails.scss'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../../../Actions/Questions'


class QuestionDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };


    render() {


        const questionProps_Data = this.props.location.state.questionProps
        const submitVote = (e) => {
            e.preventDefault()
            const { dispatch } = this.props

            dispatch(handleAnswerQuestion(this.props.users.loginUser, questionProps_Data.id, this.state.exampleRadios))
            //this.props.history.push('/questionPoll')



        }
        return (
            <>
                <NavBar />
                <div className="container col-6 col-center">

                    <Card className="p-0 m-2" >
                        <CardTitle className="bg_colors_2 text-white fw-bold text-start p-2 ">
                            {/* {props.Q.author}  */}
                            {questionProps_Data.author} Asks </CardTitle>
                        <CardText className="p-2">
                            <div className="d-flex">
                                <div className="w-25 border-end border-success d-flex flex-column justify-content-center">{questionProps_Data.author}</div>
                                <div className="w-75">
                                    <div className="fw-bold bgLightColor">Would You Rather</div>
                                    <div className="QuestionTitle my-2">
                                    </div>

                                    <div>
                                        <input className="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios1"
                                            value='optionOne'
                                            onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            {this.props.location.state.questionProps.optionOne?.text}
                                        </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios2"
                                            value='optionTwo'
                                            onChange={this.handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            {this.props.location.state.questionProps.optionTwo?.text}
                                        </label>
                                    </div>


                                    <button onClick={submitVote} className="btn px-5">Submit vote</button>
                                </div>
                            </div>

                        </CardText>

                    </Card>
                </div>
            </>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(QuestionDetails);