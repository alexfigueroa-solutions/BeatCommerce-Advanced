import React from "react";
import TextInputField from "../abstract/text-input-field";
import AuthenticateSubmitBtn from "./authenticate-submit-btn";
import {Link} from "react-router-dom";
export default class SignUpPage extends React.Component{
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
                                        Sign Up
                                    </h1>
                                </div>
                                <div className = "leftContainerLoginPageFormWrapper">
                                    <form className = "leftContainerLoginPageFormDiv">
                                        <TextInputField label_text = "email"></TextInputField>
                                        <TextInputField label_text = "password"></TextInputField>
                                        <TextInputField label_text = "retype password"></TextInputField>
                                        <div className = "signUpLinkDiv">
                                            <Link className = "signUpLink" to = "/login">
                                                <a className = "aSignUpLink">Already have an account?</a>
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