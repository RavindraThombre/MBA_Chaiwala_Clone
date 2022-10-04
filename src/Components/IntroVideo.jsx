import React from 'react'
import Video from "../Assets/MBA Chai Wala.mp4";
const IntroVideo = () => {
    return (
        <div className="intro">
            <video src={Video} muted autoPlay loop controlsList="nodownload"></video>
            <div></div>
        </div>
    )
}

export default IntroVideo