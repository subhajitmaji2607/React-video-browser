import React from 'react';
import Videoitem from './videoitem';


const VideoList = ({videos,OnVideoSelect})=>{

    const RenderVideoList = videos.map((video)=>{
        return(
            <Videoitem OnVideoSelect = {OnVideoSelect} video = {video}/>
        );
    })


    return(
        <div className="ui relaxed divided list">
           {RenderVideoList}
        </div>
    );
}

export default VideoList;