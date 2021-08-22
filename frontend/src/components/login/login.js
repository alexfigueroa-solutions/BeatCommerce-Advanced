import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LoginPage from "./login-page";
import SignUpPage from "./sign-up-page";
import "./login.scss";
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }
    render(){
        return(
            <div>
                {this.state.isAuthenticated?(
                    <div>
                        <a className = "navbarExtraMenuIcon" >
                            <FontAwesomeIcon icon = {faUserAlt}></FontAwesomeIcon>
                        </a>
                        
                        <a className = "navbarLogoutBtn">Logout</a>
                    </div>
                ):(
                    <div className = "navbarAuthenticationNavDiv">
                        <Link 
                            className = "navbarLoginBtn"
                            to = "/login"

                        >
                            Login
                        </Link>
                        <Link 
                            className = "navbarSignupBtn"
                            to = "/sign-up"

                        >
                            Sign Up
                        </Link>
                    </div>
                )}
               
            </div>
        )
    }
}