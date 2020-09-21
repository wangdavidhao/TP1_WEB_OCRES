import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
    return (
        <div>  
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'video.mp4'
            width='100%'
            height='100%'
            controls = {true}

            />
            
        </div>
    )
}

export default Video;
