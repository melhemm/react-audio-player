import {useState, useRef} from 'react'
import './styles/app.scss'
import {songsData}  from './data'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'

function App () {
  // audio ref
  const audioRef = useRef(null)
  
  // State
  const [songs, setSongs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration
    setSongInfo({
      ...songInfo, 
      currentTime: current, 
      duration
    })
  }

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        audioRef= {audioRef}
        currentSong = {currentSong} 
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef= {audioRef}
        songs = {songs}
        setCurrentSong = {setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
        <audio 
        ref={audioRef} 
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      >
      </audio>
    </div> 
  )
}

export default App;