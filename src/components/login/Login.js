import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './login.scss'
import { connect } from 'react-redux';
import { handleInitialData } from '../../Actions/index';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: {},
            loginUser: ''
        };

        this.changeLoginUser = this.changeLoginUser.bind(this);
    }

    changeLoginUser(e) {
        this.setState({ loginUser: e.target.value });

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

    }


    render() {

        return (
            <div className="container mt-5">
                <div className="card col-6  col-center">
                    <div className="card-header">
                        <h5>Welcome to the (Would You Rathar) Game</h5>
                        <h6>Please Sign In or Sign Up to continue</h6>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title baseColor">Sign In</h5>
                        <p className="card-text fw-bold">Do already have an account?</p>
                        <select className="d-block form-control my-3" onChange={this.changeLoginUser} value={this.state.loginUser}>
                            <option defaultChecked>please Select</option>
                            {Object.keys(this.state.users).map((user) => {
                                return (
                                    <option>{this.state.users[user].name}</option>
                                )
                            })}
                        </select>


                        {
                            this.state.loginUser === ''
                                ? <Link to={{ pathname: "/dashboard", state: { loginUser: this.state.loginUser } }}
                                    className="btn px-5"
                                    onClick={(event) => event.preventDefault()}>
                                    Sign In
                                </Link>
                                : <Link className="btn px-5"
                                    to={{
                                        pathname: "/dashboard"
                                        , state: { loginUser: this.state.loginUser }
                                    }}
                                >Sign In</Link>
                        }
                    </div>
                </div>
            </div>
        );

    }
}


function mapStateToProps({ users }) {

    return {
        users
    }
}


export default connect(mapStateToProps)(Login);