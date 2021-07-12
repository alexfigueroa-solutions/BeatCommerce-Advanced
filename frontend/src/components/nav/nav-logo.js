import React from "react";
import "./nav-logo.scss";
export default class NavTextLogo extends React.Component{
    render(){
        const {
            text_prompt,
            font_size
        } = this.props;
        return(
            <div className = "navTextLogoWrapper">
                <div className = "navTextLogoDiv">
                    <h1 className = "navLogoText" style = {{fontSize: font_size}}>
                        {text_prompt}
                    </h1>
                </div>
            </div>
        )
    }
    
}