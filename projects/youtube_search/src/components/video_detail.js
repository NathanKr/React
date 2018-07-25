import React from 'react';

function VideoDetail(props){
    const {video} =  props;

    if(!video){
        return <p>Loading ...</p>;
    }

    //console.log('VideoDetail2',video);

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log(url);
    return  <div className="video_detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item"></iframe>
                </div>
                <div className='details'>    
                    <p>{video.snippet.title}</p>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
}

export default VideoDetail;