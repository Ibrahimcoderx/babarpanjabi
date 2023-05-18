import React from 'react';
import dynamic from 'next/dynamic'
// Youtube Player
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
// Css
import style from './video.module.css';

const Video = () => {

    

    return (


        <div className='VideoPlay'>

            <div className={style.VideoPlayers}>

                <ReactPlayer url='https://www.youtube.com/watch?v=uFjU5zFJx3E&ab_channel=FunnelLiner' />

            </div>
        
        </div>
        
    )

}

export default Video
