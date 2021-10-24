import {useRef} from 'react'

const Player = ({currentSong}) => {
  const audioRef = useRef(null)
  // Play song event handler
  const playSongHandler = () => {
    document.getElementById("soundTrack").play()
    // let playCurrentSong = audioRef.current
    // console.log(playCurrentSong);
    // console.log(audioRef.current);
    // debugger
    // audioRef.current.play();
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
      <audio ref={audioRef} id={"soundTrack"}
      src={currentSong.audio}>
      </audio>
    </div>
  )
}

export default Player