import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import NavBar from '../navBar/NavBar';
import { connect } from 'react-redux';
//import { handleInitialData } from '../../Actions/index';
import './LeaderBoard.css'

const LeaderBoard = (props) => {
    const [usersData, setUsersData] = useState([]);
    // console.log('xuuu___props', props.users.users);
    // console.log('xxxxxxx', Object.entries(props.users.users));
    useEffect(() => {
        let user_data = []
        Object.entries(props.users.users).forEach((userDataItem) => {
            //  console.log('userDataItem_x', userDataItem[1]);

            // if (userFormLoop[0] === props.users.loginUser) {
            user_data.push(userDataItem)

            // }

        }
        )
        setUsersData(user_data)
        // setCurrentLoginUser(currentLogin)



    }, [])

    return (
        <div>
            <NavBar />
            {
                usersData.map((user) => {

                    const answersCount = Object.keys(user[1].answers).length
                    const questionCount = Object.keys(user[1].questions).length
                    return (


                        <Card key={user[1].id} className=" Card p-0 container col-6 col-center my-2" >
                            <div className="p-2">
                                <div className="d-flex ">
                                    <img className="border border-success rounded-circle p-1"
                                        style={{ width: 100, height: 100 }} alt="avatar"
                                        src={user[1].avatarURL}
                                    />
                                    <div className="px-3 border-end"> <span className="visually-hidden">ssssssss</span></div>
                                    <div className="w-75 border-end  px-3">
                                        <div className="fw-bold bgLightColor">{user[1].name}</div>
                                        <div className="d-flex justify-content-around">
                                            <div>Answered Questions</div>
                                            <div>{answersCount}</div>
                                        </div>

                                        <div className="d-flex justify-content-around">
                                            <div>Created Questions</div>
                                            <div>{questionCount}</div>
                                        </div>

                                    </div>
                                    <div className="px-3">
                                        <div className="card" >
                                            <div className="bg-light p-3 border-bottom">Score</div>
                                            <div className="card-body d-flex justify-content-center text-light">
                                                <div className="score card-text border rounded-circle bg-success">
                                                    {answersCount + questionCount}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )


                })



            }


        </div>
    );
};

function mapStateToProps({ users, questions }) {

    return {
        users,
        questions
        //.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(LeaderBoard);