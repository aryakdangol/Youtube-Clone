import React, { useState } from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const[inputSearch, setInputSearch] = useState('');

    return (
        <div className = "header">
            <div className="header-left">
                <MenuIcon />
                <Link to = "/">
                    <img className = "header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt="" />
                </Link>
            </div>

            <div className="header-input">
                <input value = {inputSearch} onChange = {e => setInputSearch(e.target.value)} placeholder = "Search" type="text" />
                <Link to = {`/search/${inputSearch}`}>
                    <SearchIcon className = "header-inputButton" />
                </Link>
            </div>

            <div className="header-right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar alt = "Aryak Dangol" src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />    
            </div>

        </div>
    )
}

export default Header
