import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import video from './video.mp4';
import './Video.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Video() {

    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
      }, []);
    return (
        <div className="cvVideo" data-aos="flip-up" >  
            <ReactPlayer
            className='react-player fixed-bottom cvPlayer'
            url= {video}
            width='100%'
            height='100%'
            controls = {true}

            />
            
        </div>
    )
}

export default Video;
