import React from 'react'
import LibrarySong from './LibrarySong';


const Library = ({songs, setCurrentSong, audioRef, isPlaying,setSongs, libraryStatus,}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : " "}`}>
            <h3>Library</h3>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong 
                    setCurrentSong={setCurrentSong}
                    song={song} 
                    key={song.id}
                    id={song.id}
                    songs={songs}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;