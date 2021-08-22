import React from "react";
import "./instrumentals-page.scss";

import InstrumentalDataService from "../../services/instrumental.service";

import { Link } from "react-router-dom";
import ItemListSidebar from "../abstract/item-list-sidebar";
import InstrumentalPanel from "./instrumental-panel";



export default class InstrumentalsPage extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
            items: [],
            hasMore: true,
            offset: 0,
            limit: 20,
            clickedItem: []
        };
        this.clickItem = this.clickItem.bind(this)
        this.loadItems()
        window.onscroll = () => {
            const {
                state: {error, loading, hasMore}
            } = this;

            if (error || loading || !hasMore) return;
            if (
                document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight

            ){
                this.loadItems()
            }
        }
    }
    componentDidMount(){
        this.loadItems();
        
        
        
        
    }
    
    loadItems = () => {
        this.setState(
            {
                loading: true
            },
            () => {
                const {
                    offset,
                    limit
                } = this.state;
                InstrumentalDataService.getByLimitOffset(limit,offset)
                .then(
                    res => {
                        const newInstrumentals = res.data;
                        const hasMore = res.data.has_more;
                        this.setState(
                            {
                                hasMore,
                                loading: false,
                                items: [...this.state.items, ...newInstrumentals],
                                offset: offset + limit,
                                
                            
                            }
                        )
                    }
                )
            }
        );
        
    }
    clickItem = (e) => {
        const id = e.target.getA("data-id");
        this.setState(
            {
                clickedItem: id
            }
        );
    };



    render(){
        const {
            error,
            hasMore,
            loading,
            items, 
            clickedItem
        } = this.state;
        return(
            <div className = "instrumentalsPageWrapper">
                <div className = "instrumentalPageDiv">
                    <div className = "itemListSidebarWrapper">
                
                        <div className = "itemListSidebarDiv">
                            <div
                            
                                // below props only if you need pull down functionality
                                
                            
                            >
                            
                                
                                {items.map(
                                    item => (
                                        
                                        <button data-id = {item.title} onClick = {() => this.setState({clickedItem: item})} className = "itemListSidebarItemWrapper">
                                            
                                            <div className = "itemListSidebarItemDiv">
                                                
                                                <div className = "itemListSidebarItemImg" style = {{backgroundImage: item.img_file}} >
                                                </div>
                                                <img src = {'${BASE_URL}$' + (item.img_file)}></img>
                                                <div className = "itemListSidebarItemDetailsWrapper">
                                                    <div className = "itemListSidebarItemDetailDiv">
                                                        <h1 className ="itemListSidebarItemTitle">{item.title}</h1>
                                                        <h1 className = "itemListSidebarItemProducer">{item.producer.alias}</h1>
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                            </div>
                                        </button>
                                    )
                                )}
                                {
                                    loading && <div>loading...</div>
                                }
                                {
                                    !hasMore && <div>No more results</div>
                                }
                            </div>
                        </div>
                    </div>
                    <InstrumentalPanel item = {clickedItem}></InstrumentalPanel>
                </div>
            </div>
        )
    }
}