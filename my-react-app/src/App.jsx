import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Video from './Video.jsx'
import {VIDEOS} from './videos'

function App() {

  return (
    <>
      <div className='video-container'>
      {/* <Video title='Video 1' channelName="Kumbel Lab" img={reactLogo}/> */}
      { VIDEOS.map( (video) => (
        <Video key={video.id} title={video.title} channelName={video.channelName} img={video.img}/>
      )) }
      </div>
    </>
  )
}

export default App