import React from "react";
import "./authenticate-submit-btn.scss";
export default class AuthenticateSubmitBtn extends React.Component{
    render(){
        return(
            <div className = "loginPageFormLabelWrapper">
                <input className = "loginPageFormSubmitBtn" type="submit" value="submit" />
            </div>
        )
    }
}