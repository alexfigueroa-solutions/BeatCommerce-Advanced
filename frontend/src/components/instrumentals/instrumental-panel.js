import React from "react";
import "./instrumental-panel.scss";
export default class InstrumentalPanel extends React.Component{
    render(){
        const {
            item 
        } = this.props;
        return(
            <div className = "instrumentalPanelWrapper">
                <h1>Instrumental panel</h1>
                <h1>{item.title}</h1>
                
            </div>
        )
    }
}