import React from "react";
import instrumentalService from "../../services/instrumental.service";
import ItemListSidebar from "../abstract/item-list-sidebar";
import InstrumentalPanel from "./instrumental-panel";
import "./instrumentals-page.scss";


export default class InstrumentalsPage extends React.Component{
  


    render(){
        return(
            <div className = "instrumentalsPageWrapper">
                <ItemListSidebar 
                    >

                </ItemListSidebar>
                <InstrumentalPanel></InstrumentalPanel>
            </div>
        )
    }
}