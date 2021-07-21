import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className = "searchpage">
           <div className="searchpage-filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
           </div>
           <hr />

           <ChannelRow
                image = "https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s176-c-k-c0x00ffffff-no-rj"
                channel = "Marques Brownlee"
                verified
                subs = "1M"
                noOfVideos = {47}
                description = "MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
            />
            <hr />
            <VideoRow views = "798K" title = "How Do YouTubers Make Money? (And Other Questions We Have to Answer)" 
            channel = "Aryak" 
            subs = "1M" 
            timestamp = "2 Days ago" 
            thumbnail = "http://i3.ytimg.com/vi/n3XrvrBVg2k/maxresdefault.jpg" 
            description = "Answering the top 10 questions YouTubers Can You Trust MKBHD? https://youtu.be/5nLWTVTwOhYMKBHD Merch: http://shop.MKBHD.com" />

            <VideoRow views = "798K" title = "How Do YouTubers Make Money? (And Other Questions We Have to Answer)" 
            channel = "Marques Brownlee" 
            subs = "1M" 
            timestamp = "2 Days ago"
            thumbnail = "http://i3.ytimg.com/vi/n3XrvrBVg2k/maxresdefault.jpg" 
            description = "Answering the top 10 questions YouTubers Can You Trust MKBHD? https://youtu.be/5nLWTVTwOhYMKBHD Merch: http://shop.MKBHD.com" />

            <VideoRow views = "798K" title = "How Do YouTubers Make Money? (And Other Questions We Have to Answer)" 
                channel = "Marques Brownlee" subs = "1M" timestamp = "2 Days ago" 
                thumbnail = "http://i3.ytimg.com/vi/n3XrvrBVg2k/maxresdefault.jpg" 
                description = "Answering the top 10 questions YouTubers Can You Trust MKBHD? https://youtu.be/5nLWTVTwOhYMKBHD Merch: http://shop.MKBHD.com" />
            
            <VideoRow views = "798K" title = "How Do YouTubers Make Money? (And Other Questions We Have to Answer)" 
                channel = "Marques Brownlee" subs = "1M" timestamp = "2 Days ago" 
                thumbnail = "http://i3.ytimg.com/vi/n3XrvrBVg2k/maxresdefault.jpg" 
                description = "Answering the top 10 questions YouTubers Can You Trust MKBHD? https://youtu.be/5nLWTVTwOhYMKBHD Merch: http://shop.MKBHD.com" />
        </div>
    )
}

export default SearchPage
