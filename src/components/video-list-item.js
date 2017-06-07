import React from 'react';

// ES6 syntax to automatically create a variable named video using 
// the value of the argument named video (brackets indicate the argument exists in an object)
const VideoListItem = ({video, onVideoSelect}) => {  
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={ imageUrl } className="media-object"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        { video.snippet.title }
                    </div>
                </div>
            </div>
        </li>
    );    
}

export default VideoListItem;