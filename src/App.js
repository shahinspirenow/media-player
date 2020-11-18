import React, {useState, useRef} from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Nav from './components/Nav';
import Library from './components/Library'
import './styles/app.scss';
import data from "./data"

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({currentTime: 0, duration: 0});
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
    setSongInfo({
        ...songInfo,
        currentTime: current,
        duration
    })
}
const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if (isPlaying) audioRef.current.play();
}
  return (
    <div className="App">
      <Nav 
      libraryStatus={libraryStatus} 
      setLibraryStatus={setLibraryStatus}/>
      <Song 
      currentSong={currentSong}
      />
      <Player 
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      setSongs={setSongs}
      setIsPlaying={setIsPlaying} 
      currentSong={currentSong}
      songs={songs}
      setCurrentSong={setCurrentSong}
      />
      <audio 
      onTimeUpdate={timeUpdateHandler} 
      onLoadedMetadata={timeUpdateHandler}
      ref={audioRef}
      src={currentSong.audio}>
      </audio>
      <Library 
      audioRef={audioRef} 
      songs={songs} 
      setSongs={setSongs}
      isPlaying={isPlaying}
      setCurrentSong={setCurrentSong} 
      libraryStatus={libraryStatus}
      onEnded={songEndHandler}
      />
    </div>
  );
}

export default App;
