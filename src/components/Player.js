import {useRef} from 'react'

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
  const audioRef = useRef(null)

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

  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range"/>
        <p>End time</p>
      </div>
      <div className="play-control">
        <i 
          className="fas fa-caret-square-left fa-2x"
        />
        <i 
          className="fas fa-play fa-2x" 
          onClick={playSongHandler}
        />
        <i 
          className="fas fa-caret-square-right fa-2x"
        />
      </div>
      <audio 
        ref={audioRef} 
        src={currentSong.audio}
      >
      </audio>
    </div>
  )
}

export default Player