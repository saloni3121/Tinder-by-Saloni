import React from 'react'
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipebuttons">
            <IconButton style={{color: "#f5b748"}} className="size">
                <ReplayIcon/>
            </IconButton>
            <IconButton style={{color: "#ec5e6f"}}  className="size">
                <CloseIcon/>
            </IconButton>
            <IconButton style={{color: "#62b4f9"}}  className="size">
                <StarRateIcon/>
            </IconButton>
            <IconButton style={{color: "#76e2b3"}}  className="size">
                <FavoriteIcon/>
            </IconButton>
            <IconButton style={{color: "#915dd1"}} className="size">
                <FlashOnIcon/>
            </IconButton>

        </div>
    )
}

export default SwipeButtons
