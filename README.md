# 📸 Zozu — Photobooth App

> **Zoom in. Zoom out. Capture the moment.**

Zozu is a fun, browser-based photobooth app that lets you snap polaroid-style photo strips right from your webcam, choose a vibe with themed filters, and download your shots — or scan a QR code to grab them straight on your phone.

---

## ✨ Features (v1.0)

- 📷 **Webcam capture** — auto-countdown snaps 3 photos in a row with a flash effect
- 🎨 **Theme filters** — choose from Coral Sunset, Ocean Dream, or Retro Beach
- 🖼️ **Polaroid card** — photos are laid out in a styled strip with your theme name and date
- ⬇️ **Direct download** — save your photo strip as a PNG instantly
- 📱 **QR code sharing** — upload your strip to Cloudinary and get a scannable QR code, perfect when you're on a laptop and want the photo on your phone

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React + Vite |
| Styling | CSS with custom properties |
| Camera | `react-webcam` |
| Image export | `html-to-image` |
| QR code | `qrcode` |
| Backend | Python + Flask |
| Image hosting | Cloudinary |

---

## 🗂️ Project Structure

```
Photobooth/
├── backend/
│   ├── app.py              # Flask server — handles Cloudinary upload + returns URL
│   ├── .env                # Cloudinary credentials (not committed)
│   └── requirements.txt
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Camera.jsx          # Webcam, countdown, flash, capture logic
│       │   ├── PhotoPreview.jsx    # Polaroid card, download, QR code
│       │   ├── ThemePicker.jsx     # Theme selection UI
│       │   ├── FilterPicker.jsx    # Filter options
│       │   └── Countdown.jsx       # Countdown overlay
│       ├── data/
│       │   └── filters.js          # Filter name → CSS class mapping
│       ├── App.jsx
│       └── App.css
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Python 3.x
- A [Cloudinary](https://cloudinary.com) account (free tier works fine)

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` folder:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the Flask server:

```bash
python app.py
```

The backend runs on `http://localhost:5000`.

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev
```

---

## 🔄 How It Works

1. User picks a theme and hits **Capture**
2. A 3-second countdown fires and auto-snaps 3 photos with a flash
3. Photos are composed into a polaroid-style card in the browser
4. **Download** — `html-to-image` converts the card to a PNG, downloaded directly
5. **Save (QR)** — the PNG is sent as base64 to the Flask backend, uploaded to Cloudinary, and the returned URL is converted to a QR code shown on screen

---

## 🌐 Deployment

Zozu v1.0 is live! You can try it here: **https://zozu-photobooth.vercel.app/**

---

## 🗺️ Roadmap

### v2.0 (Coming Soon)
- 🔐 User login & accounts
- 🖼️ Personal gallery to view past strips
- 🔍 Search and filter your saved photos
- ✂️ Edit strip size — choose how many photos in a strip
- 📐 Adjust individual photo sizing
- 🎭 More filters and effects

---

## 📄 License & Copyright

© 2026 DivyasreeM. All rights reserved.

This project and its source code are the intellectual property of the author. Unauthorized copying, distribution, or use of this codebase, in whole or in part, without explicit written permission is prohibited.

---

*Made with 💛 and a lot of `console.log`s*
