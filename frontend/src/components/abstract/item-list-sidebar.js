import React from "react";
import "./item-list-sidebar.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import InstrumentalDataService from "../../services/instrumental.service";
export default class ItemListSidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
            items: [],
            hasMore: true,
            offset: 0,
            limit: 20
        };
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
                InstrumentalDataService.getByLimitOffset(this.state.limit, this.state.offset)
                .then(
                    res => {
                        const newInstrumentals = res.data.instrumentals;
                        const hasMore = res.data.has_more;
                        this.setState(
                            {
                                hasMore,
                                loading: false,
                                items: [...this.state.items, ...newInstrumentals],
                                offset: offset + limit
                            }
                        )
                    }
                )
            }
        )
    }
    render(){
        const {
            error,
            hasMore,
            loading,
            items
        } = this.state
        return(
            <div className = "itemListSidebarWrapper">
                <div className = "itemListSidebarDiv">
                    <div
                      
                        // below props only if you need pull down functionality
                        
                       
                    >
                        {items.map(
                            item => (
                                <div className = "itemListSidebarItemWrapper">
                                    <div className = "itemListSidebarItemDiv">
                                        <h1>{item.title}</h1>
                                        <h2>title</h2>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}