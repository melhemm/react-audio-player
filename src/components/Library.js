import react from 'react'
import LibrarySongs from './LibrarySongs'

const Library = ({songs, setCurrentSong, audioRef, isPlaying}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs 
          songs={songs}
          setCurrentSong={setCurrentSong}
          song={song} 
          id={song.id}   
          key={song.id}
          audioRef={audioRef} 
          isPlaying={isPlaying}      
        />
        ))}
      </div>
    </div>
  )
}

export default Library