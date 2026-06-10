import { filters } from "../data/filters";
import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import QRCode from "qrcode"

function PhotoPreview({
  photos,
  selectedTheme,
}) 

{
const cardRef = useRef();
const [qrUrl, setQrUrl] = useState("");
//DOWNLOAD
const handleDownload = async () => {
  if (!cardRef.current) return;
  const dataUrl = await toPng(cardRef.current, {
    cacheBust: true,
  });
  const link = document.createElement("a");
  link.download = "Photobooth.png";
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
//QR CODE
const handleSave = async () => {
  if (!cardRef.current) return;

  const dataUrl = await toPng(cardRef.current, {
    cacheBust: true,
  });
  try {
    const res = await fetch("http://192.168.31.102:5000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: dataUrl }),
    });
    const { url } = await res.json();
    const qr = await QRCode.toDataURL(url);
    setQrUrl(qr);
  } catch (err) {
    console.error("Upload/QR failed:", err);
  }
};
const themeFilterMap = {
  "Coral Sunset": "Coral",
  "Ocean Dream": "Ocean",
  "Retro Beach": "Retro",
};

const filterClass =
  filters.find(
    (f) => f.name === themeFilterMap[selectedTheme]
  )?.className || "";

console.log(selectedTheme);
console.log(filterClass);
return (
<>
    <div ref={cardRef} className="polaroid-card">
        {photos.map((photo, index) => (
        <div className={`image-wrapper ${filterClass}`}>
            <img
                key={index}
                src={photo}
                alt={`Captured ${index + 1}`}
                className="polaroid-image photo-developing"
            />
        </div>
        ))
        }

      <div className="polaroid-info">
        <h3>{selectedTheme}</h3>
        <p> {new Date().toLocaleDateString()} </p>
      </div>
    
    </div>
        <div className="download-row">
            <button onClick={handleDownload} className="coral-button">
                Download
            </button>
            <button onClick={handleSave} className="coral-button">
                Save
            </button>
        </div>
        {qrUrl && (
          <div className="qr-code">
            <p>Scan to download</p>
            <img src={qrUrl} alt="QR Code" />
          </div>
        )}
</>
   
  );
}

export default PhotoPreview;