import React from 'react';

const LibrarySong = ({songs, song, setCurrentSong, audioRef, isPlaying, id, setSongs}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //Set Active in library
    const newSongs = songs.map((song) => {
        if (song.id === id) {
          return {
            ...song,
            active: true,
          };
        } else {
          return {
            ...song,
            active: false,
          };
        }
      });
      setSongs(newSongs);
      if (isPlaying) audioRef.current.play();
        }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : " "}`}>
            <img alt='' src={song.cover}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;