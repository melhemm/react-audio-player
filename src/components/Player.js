import { useState } from 'react/cjs/react.development';

const Player = ({
  currentSong, 
  isPlaying, 
  setIsPlaying, 
  audioRef, 
  setSongInfo, 
  songInfo}) => {
  // Play song event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play() 
      setIsPlaying(!isPlaying)
    }
  }

  // format song time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

  // input slider handler
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
          min={0} 
          max={songInfo.duration} 
          value={songInfo.currentTime} 
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <i 
          className="fas fa-caret-square-left fa-2x"
        />
        <i 
          className={isPlaying ? "fas fa-pause fa-2x" : "fas fa-play fa-2x"} 
          onClick={playSongHandler}
        />
        <i 
          className="fas fa-caret-square-right fa-2x"
        />
      </div>
    </div>
  )
}

export default Player