import Webcam from "react-webcam";
import ThemePicker from "./ThemePicker";
import '../App.css';
import { useEffect, useRef, useState } from "react";
import Countdown from "./Countdown";
import PhotoPreview from "./PhotoPreview";

function Camera() {
    const webcamRef = useRef(null);
    const [photos, setPhotos] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState("Coral Sunset");
    const [countdown, setCountdown] = useState(null);
    const [flashActive, setFlashActive] = useState(false);

//Flash effect on capture
    
    

//Capture function 
    const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setPhotos((prev) => [...prev, image]);
    };

//Countdown logic
    const startCountdown = () => {
    setPhotos([]);
    setCountdown(3);
    };

    useEffect(() => {
      if (countdown === null) return;
      if (countdown === 0) {
        setFlashActive(true);
        setTimeout(() => setFlashActive(false), 500);
        const image = webcamRef.current.getScreenshot();
        setPhotos((prev) => {
          const updatedPhotos = [...prev, image];
          if (updatedPhotos.length < 3) {
            setTimeout(() => {
              setCountdown(3);
            }, 1000);
          } else {
            setCountdown(null);
          }
          return updatedPhotos;
        });
        return;
      }

      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }, [countdown]);

  return (
  <div className="flex flex-col items-center gap-6">
    {flashActive && <div className="flash-overlay" />}
    
    {countdown !== null && (
          <Countdown count={countdown} />
    )}

    <div className="coral-card">
      <div className="viewfinder">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/png"
      />
      </div>
    </div>

    <ThemePicker selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />

    <button
    onClick={startCountdown}
    className="coral-button"
    >
         Capture
    </button>

    <p style={{ color: 'var(--color-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Theme: {selectedTheme}
    </p>

    {
      photos.length > 0 && (
    <PhotoPreview
      photos={photos}
      selectedTheme={selectedTheme}
    />
  )
    }

  </div>
);
}

export default Camera;