import { Avatar } from '@material-ui/core'
import React from 'react'
import "./ChannelRow.css"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


function ChannelRow({image, verified, channel, subs, noOfVideos, description}) {
    return (
        <div className = "channelrow">

            <Avatar className = "channelrow-logo" src = {image} alt = {channel} />

            <div className="channelrow-text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>

            </div>


        </div>
    )
}

export default ChannelRow
