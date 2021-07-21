import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Video.css"

function Video({image, title, channel, views, timestamp, thumbnail}) {
    return (
        <div className = "video">
            <img className = "video-thumbnail" src={thumbnail} alt="" />
            <div className="video-info">
                <Avatar src = {image} className = "video-avatar" alt = {channel} />
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
