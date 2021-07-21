import React from 'react'
import "./VideoRow.css"

function VideoRow({views, subs, description, timestamp, channel, title, thumbnail}) {
    return (
        <div className = "videorow">
            <img src={thumbnail} alt="" />
            <div className="videorow-text">
                <h3>{title}</h3>
                <p className = "videorow-headline">
                {channel} • <span className = "videorow-subs">
                    <span className = "videorow-subnum">{subs}</span> 
                        {" "} Subscribers</span>{" "} 
                        {views} views • {timestamp}
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
