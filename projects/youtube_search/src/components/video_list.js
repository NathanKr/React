import React from 'react';
import VideoListItem from './video_list_item';

function VideoList(props){
    const elements = props.videos.map(video =>
        <VideoListItem 
            onVideoClick={props.onVideoSelect} 
            key={video.etag} 
            video={video}/>
        );
    return <ul className="col-md-4 list-group">
         {elements}
    </ul>;
}

export default VideoList;