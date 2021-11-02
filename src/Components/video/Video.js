import React from 'react'
import './_video.scss';

import { AiFillEye } from 'react-icons/ai'

const video = () => {
    return (
        <div className='video'>
         <div className='video__top'>
            <img
               src='https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ'
               alt=''
            />
            <span>05:43</span>
         </div>
         <div className='video__title'>
            Create app in 5 minutes #made by Chintu
         </div>
         <div className='video__details'>
            <span>
               <AiFillEye /> 5m Views •
            </span>
            <span>5 days ago</span>
         </div>
         <div className='video__channel'>
            <img
               src='https://yt3.ggpht.com/ytc/AKedOLT9XORVoWun03bQR2l4zH5aBz1PpD8jMF3ZFp5htg=s68-c-k-c0x00ffffff-no-rj'
               alt=''
            />
            <p>Rainbow Hat Jr</p>
         </div>
      </div>
    )
}

export default video
