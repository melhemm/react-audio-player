import {useState} from 'react'
import './styles/app.scss'
import {songsData}  from './data'
import Player from './components/Player'
import Song from './components/Song'

function App () {
  const [songs, setSongs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(songs[0])
  
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div> 
  )
}

export default App;