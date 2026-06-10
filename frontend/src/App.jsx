import Camera from "./components/Camera";
import './App.css';

function App() {
  return (
    <div className="coral-page">
      <div className="coral-container">

        <header className="text-center mb-10">

          <h1 className="display-font text-5xl">
            PhotoBooth
          </h1>

          <p style={{ color: 'var(--color-muted)', marginTop: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Capture memories
          </p>

        </header>

        <Camera />

      </div>
    </div>
  );
}

export default App;