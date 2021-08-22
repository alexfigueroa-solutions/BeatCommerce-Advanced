import React from "react";
import "./item-list-sidebar.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import InstrumentalDataService from "../../services/instrumental.service";
import ReactAudioPlayer from 'react-audio-player';
import ReactJkMusicPlayer from "react-jinke-music-player";
import { Link } from "react-router-dom";
export default class ItemListSidebar extends React.Component{
    
    render(){
        
        const{
            items,
            loading,
            hasMore, 
            error
        } = this.props;
        return(
            <div className = "itemListSidebarWrapper">
                
                <div className = "itemListSidebarDiv">
                    <div
                      
                        // below props only if you need pull down functionality
                        
                       
                    >
                       
                        
                        {items.map(
                            item => (
                                
                                <Link to = {"/" + item.title.replace(/ /g, '')} className = "itemListSidebarItemWrapper">
                                    
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
                                </Link>
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