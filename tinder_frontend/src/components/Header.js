import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <IconButton>
                <WhatshotIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
        </div>
    )
}

export default Header
