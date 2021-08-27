import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import NavBar from '../../navBar/NavBar';
import './questionDetails.scss'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../../../Actions/Questions'


class QuestionDetails extends Component {

    render() {

        console.log('xbbbbbbbb', this.props.users.loginUser);


        const questionProps_Data = this.props.location.state.questionProps
        console.log('xsaadfsf', questionProps_Data.id);

        const submitVote = (e) => {
            e.preventDefault()
            console.log('submitVote');
            const { dispatch } = this.props
            //const { FirstOption, SecondOption } = this.state



            dispatch(handleAnswerQuestion(this.props.users.loginUser, questionProps_Data.id, "yes"))



            // this.setState(() => ({
            //     FirstOption: '',
            //     SecondOption: ''
            // }))
        }
        return (
            <>
                <NavBar />
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
                                    </div>

                                    <div>
                                        <input class="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios1" value="" checked />
                                        <label class="form-check-label" for="exampleRadios1">
                                            {this.props.location.state.questionProps.optionOne.text}
                                        </label>
                                    </div>
                                    <div>
                                        <input class="form-check-input mx-2" type="radio" name="exampleRadios" id="exampleRadios2" value="" />
                                        <label class="form-check-label" for="exampleRadios2">
                                            {this.props.location.state.questionProps.optionTwo.text}
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