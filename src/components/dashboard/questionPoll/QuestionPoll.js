import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const QuestionPoll = (props) => {
    const questionProps_Data = props.location.state.questionProps_Data
    console.log('questionProps_Dataaaaaaaaaass', questionProps_Data);

    const { author, optionOne, optionTwo } = questionProps_Data
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
                                <div>
                                    {optionOne.text}
                                </div>
                                <div>
                                    {optionTwo.text}
                                </div>
                            </div>
                        </div>
                    </div>

                </CardText>

            </Card>
        </div>
    );
};

export default QuestionPoll;