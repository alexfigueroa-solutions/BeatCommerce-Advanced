import React from "react";
import "./login-page.scss";
import NavTextLogo from "../nav/nav-logo";
import AuthenticateSubmitBtn from "./authenticate-submit-btn";
import TextInputField from "../abstract/text-input-field";
import { Link } from "react-router-dom";
export default class LoginPage extends React.Component{
    render(){
        return(
            <div className = "mainLoginPageWrapper">
                <div className = "mainLoginPageDiv">
                    
                    
                    <div className = "leftContainerLoginPageWrapper">
                        <div className = "leftContainerLoginPageDiv">
                            <div className = "leftContainerLoginPageHeaderWrapper">
                                <div className = "leftContainerLoginPageHeaderDiv">
                                    <h1 className = "leftContainerLoginPageHeaderText">BeatCommerce</h1>
                                </div>
                                <div className = "leftContainerLoginPageMainHeaderDiv">
                                    <h1 className = "leftContainerLoginPageMainHeaderText">
                                        Login
                                    </h1>
                                </div>
                                <div className = "leftContainerLoginPageFormWrapper">
                                
                                    <form className = "leftContainerLoginPageFormDiv">
                                        
                                        <TextInputField label_text = "email"></TextInputField>
                                        <TextInputField label_text = "password"></TextInputField>
                                        <div className = "signUpLinkDiv">
                                            <Link className = "signUpLink" to = "/sign-up">
                                                <a className = "aSignUpLink">Don't have an account?</a>
                                            </Link>
                                            <Link className = "signUpLink" to = "/change-password">
                                                <a className = "aSignUpLink">Forgot password?</a>
                                            </Link>
                                        </div>
                                        
                                        <AuthenticateSubmitBtn></AuthenticateSubmitBtn>
                                        
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}