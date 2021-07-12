import React from "react";
import SocialButtonOne from "../buttons/social-button-one";
import HomepageIntroBio from "./homepage-intro-bio";
import "./homepage-intro.scss";
export default class ArtistHomepageIntro extends React.Component{
    render(){
        const {
            bio_details = {},
            social_objs = []
        } = this.props;
        return(
            <div className = "homepageIntroWrapper">
                <div className = "homepageIntroDiv">
                    <div className = "homepageIntroBioWrapper">
                        <div className = "homepageIntroBioDiv">
                            <HomepageIntroBio bio_details = {bio_details}>
                                
                            </HomepageIntroBio>
                            <h1>
                            </h1>
                        </div>
                    </div>
                    <div className = "homepageIntroSocialWrapper">
                        <div className = "homepageIntroSocialDiv">
                            {
                                social_objs.map(
                                    social_link => (
                                        <div>
                                            <SocialButtonOne social_link = {social_link}>

                                            </SocialButtonOne>
                                        </div>
                                        
                                    )
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}