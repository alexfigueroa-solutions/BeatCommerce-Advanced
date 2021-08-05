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
                                offset: offset + limit
                            }
                        )
                    }
                )
            }
        );
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
                        
                        {
                            error && <div>{error}</div>
                        }
                        
                        {items.map(
                            item => (
                                <div className = "itemListSidebarItemWrapper">
                                    <div className = "itemListSidebarItemDiv">
                                        <h1 className ="itemListSidebarItemTitle">{item.title}</h1>
                                        
                                    </div>
                                </div>
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
        );
    }
}