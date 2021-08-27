import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const QuestionPoll = (props) => {
    //const Q_forPoll = props.location.state.Q_forPoll
    console.log('xprops', props.location.state.Q_forPoll);
    const { author, optionOne, optionTwo } = props.location.state.Q_forPoll
    console.log('authorxxxxxxxxxx', author);
    return (
        <div className="col-6  col-center">
            <Card className="p-0" >
                <CardTitle className="bg-light fw-bold text-start p-2 ">{author} Asks</CardTitle>
                <CardText className="p-2">
                    <div className="d-flex">
                        <div className="imgAvatar border-success d-flex flex-column justify-content-center rounded-circle border">

                        </div>
                        <div className="w-75">
                            <div className="fw-bold bgLightColor">Would You Rather</div>
                            <div className="QuestionTitle my-2">
                                <div>{optionOne.text}</div>
                                <div>{optionTwo.text}</div>
                            </div>
                        </div>
                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default QuestionPoll;