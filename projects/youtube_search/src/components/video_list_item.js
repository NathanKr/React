import React from 'react';

// --- use es6 destructuring to get video,onVideoClick from props

function VideoListItem({video,onVideoClick}){
    //console.log(video.snippet);
    return <li onClick = { () => onVideoClick(video) }
     className="list-group-item">
                <div className="video-list video-item media">
                    <div className="media-left">
                        <img src={video.snippet.thumbnails.default.url} className="media-object"/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
}

export default VideoListItem;