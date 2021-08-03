import React from "react";
import "./instrumental-panel.scss";
export default class InstrumentalPanel extends React.Component{
    render(){
        const {
            instrumental = {}
        } = this.props;
        return(
            <div className = "instrumentalPanelWrapper">
                <h1>Instrumental Panel</h1>
            </div>
        )
    }
}