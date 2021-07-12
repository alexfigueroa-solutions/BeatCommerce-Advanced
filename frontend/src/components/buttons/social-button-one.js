import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faSoundcloud
  } from "@fortawesome/free-brands-svg-icons";

import "./social-button-one.scss";
export default class SocialButtonOne extends React.Component{
    render(){
        const {
            social_link = {}
        } = this.props;
        return(
            <div className = "socialButtonOneWrapper">
                <div className = "socialButtonOneDiv">
                    <a href = {social_link.link} className = "socialButtonOne">
                        {social_link.medium === "youtube"?
                        
                            <FontAwesomeIcon icon = {faYoutube} className = "socialButtonOneIcon">

                            </FontAwesomeIcon>:
                                social_link.medium === "soundcloud"?
                                    <FontAwesomeIcon icon = {faSoundcloud} className = "socialButtonOneIcon">

                                    </FontAwesomeIcon>:
                                        social_link.medium === "twitter"?
                                            <FontAwesomeIcon icon = {faTwitter} className = "socialButtonOneIcon">

                                            </FontAwesomeIcon>:
                                                social_link.medium === "instagram"?
                                                    <FontAwesomeIcon icon = {faInstagram} className = "socialButtonOneIcon">

                                                    </FontAwesomeIcon>:
                                                        <h1>hello</h1>}
                    </a>
                </div>
            </div>
        )
    }
}