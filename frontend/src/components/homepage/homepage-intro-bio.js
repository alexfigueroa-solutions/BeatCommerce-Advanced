import React from "react";
import "./homepage-intro-bio.scss";
import NavTextLogo from "../nav/nav-logo";

export default class HomepageIntroBio extends React.Component{
    render(){
        const {
            bio_details = {}
        } = this.props;
        return(
            <div className = "homepageIntroBioWrapper">
                <div className = "homepageIntroBioDiv">
                    <div className = "homepageIntroBioIntroductionWrapper">
                        <div className = "homepageIntroBioIntroductionDiv">
                            <h2 className = "homepageIntroBioIntroduction">{bio_details.introduction}</h2>
                        </div>
                    </div>
                    <div className = "homepageIntroBioNameWrapper">
                        <div className = "homepageIntroBioNameDiv">
                            <NavTextLogo text_prompt = {bio_details.alias} font_size = "5rem" text_transform = "uppercase" font_family = "bebasNeue" className = "homepageIntroBioAlias"></NavTextLogo>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}