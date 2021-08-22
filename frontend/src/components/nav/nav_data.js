import Homepage from "../homepage/homepage";
import InstrumentalsPage from "../instrumentals/instrumentals-page";
import ProducerToolsPage from "../producer-tools-page/producer-tools-page";
import MusicPage from "../music-page/music-page";

export const nav_dict_array = [
    
    {
        title: "Instrumentals",
        path_ext: "/instrumentals",
        component: [InstrumentalsPage]
    },
    {
        title: "Music",
        path_ext: "/music",
        component: [MusicPage]
    },
    {
        title: "Producer Tools",
        path_ext: "/producer-tools",
        component: [ProducerToolsPage]
    }
];