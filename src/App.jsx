import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import MusicPlayer from './components/MusicPlayer'
import Display from './components/Display'
import { MusicPlayerContext } from './context/MusicPlayerContext';

function App() {

  const {audioRef, track} = useContext(MusicPlayerContext);

  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <MusicPlayer />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </>
  )
}

export default App
