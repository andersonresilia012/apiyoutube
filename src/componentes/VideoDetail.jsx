import React from 'react';
import '../style/videodetail.css'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div className='loading'>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='segment'>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;