import React from "react";

export default class TextInputField extends React.Component{
   
    render(){
        const {
            label_text 
        } = this.props;
        return(
            <div className = "loginPageFormLabelWrapper">
                <label className = "loginPageFormLabelDiv">
                    {label_text + ":"}
                    <input className = "loginPageFormInputField" type = "text" name = {label_text}></input>
                </label>
            </div>
        )
    }
}