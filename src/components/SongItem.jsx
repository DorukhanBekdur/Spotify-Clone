import React, { useContext } from 'react'
import { MusicPlayerContext } from '../context/MusicPlayerContext'

const SongItem = ({name, image, desc, id}) => {

  const {playWithId} = useContext(MusicPlayerContext);

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className="rounded" src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem