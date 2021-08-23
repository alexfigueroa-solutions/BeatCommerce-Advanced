import React from "react";
import "./audio-player.scss";

export default class AudioPlayer extends React.Component{
    render(){
        const {
            item 
        } = this.props;

        return(
            <div className = "audioPlayerWrapper">
                <div className = "audioPlayerDiv">
                    <h1>{item.title}</h1>
                </div>
            </div>
        )
    }
}