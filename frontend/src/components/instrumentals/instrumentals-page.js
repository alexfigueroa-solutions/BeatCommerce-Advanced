import React from "react";
import instrumentalService from "../../services/instrumental.service";
import ItemListSidebar from "../abstract/item-list-sidebar";
import InstrumentalPanel from "./instrumental-panel";
import "./instrumentals-page.scss";


export default class InstrumentalsPage extends React.Component{
    constructor(props){
        super(props);
        this.getAll = instrumentalService.getAll.bind(this);
        this.getInstrumentals = this.getInstrumentals.bind(this);
        this.getInstrumentalCollections = this.getInstrumentalCollections.bind(this)
        this.state = {
            instrumentals: [],
            collections: []
        }
    }
    componentDidMount(){
        this.getInstrumentals();
        this.getInstrumentalCollections();
    }
    getInstrumentals(){
        this.getAll()
            .then((response) => {
                this.setState(
                    {
                        instrumentals: response.data
                    }
                )
                console.log(response.data)
            }
            )
            .catch(e => {
                console.log(e)
            });
    }
    getInstrumentalCollections(){
        this.getAll()
            .then(
                (response) => {
                    this.setState(
                        {
                            collections: response.data
                        }
                    );
                    console.log(response.data);
                }
            )
            .catch(e =>{
                console.log(e);
            });
    }

    render(){
        return(
            <div className = "instrumentalsPageWrapper">
                <ItemListSidebar 
                    item_tab_title = "Instrumentals" 
                    collections_tab_title = "Collections"
                    load_items = {this.state.instrumentals}
                    collections = {this.state.collections}
                >

                </ItemListSidebar>
                <InstrumentalPanel></InstrumentalPanel>
            </div>
        )
    }
}