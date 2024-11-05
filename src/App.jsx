import videoFile from '../src/assets/1.mp4';
import './App.css';

function App() {
  return (
    <div className="video-container">
      <video src={videoFile} autoPlay loop muted playsInline />
    </div>
  );
}

export default App;
