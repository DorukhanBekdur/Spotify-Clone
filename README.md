# 🎵 Spotify Clone

This project is a **Spotify Clone** application developed using React and Tailwind CSS. Users can view albums and songs, listen to music, and navigate through different pages via the navigation bar.

## 🚀 Features
- 🎶 Album and song listings
- 📀 Play/Pause songs
- ⏭️ Skip to previous/next song
- ⏳ Display song duration
- 🔀 Shuffle mode
- 🔄 Loop mode
- 📂 Library and playlist management
- 🎨 Dynamic UI and theme adaptation
- 🎛️ User-friendly music player controls

## 📸 Screenshots
If you have any screenshots, you can add them here.

## 🛠 Technologies Used
- **React.js** - For building the user interface
- **React Router** - For page navigation
- **Tailwind CSS** - For fast and flexible styling
- **Context API** - For global state management
- **Vite.js** - For a faster development experience

## 🏗️ Technical Details
- **Music Player:**
  - Global state management is handled using React Context API.
  - `MusicPlayerContext` manages audio control, play/pause, and track switching.
  - The `audio` HTML element is used to play music and track duration.

- **Navigation:**
  - Page navigation is handled using the `react-router-dom` package.
  - Album and song detail pages are dynamically generated.

- **Dynamic Theme:**
  - Background colors adapt based on the selected album.
  - Responsive design is implemented using Tailwind CSS.

- **Data Management:**
  - Song and album data are stored in a static JSON file (`assets.js`).
  - When a user clicks on an album, they are directed to its details page.

## 📂 Project Structure
```
📦 spotify-clone
├── 📂 src
│   ├── 📂 assets       # Images and data files
│   ├── 📂 components   # UI components
│   ├── 📂 context      # Context API for state management
│   ├── 📂 pages        # Pages (Home, Album Details, etc.)
│   ├── 📜 App.js       # Main application component
│   ├── 📜 index.js     # React entry point
│   ├── 📜 MusicPlayerContext.js  # Context API for the music player
│   └── ...
├── 📜 package.json
└── 📜 README.md
```

## 🔧 Installation and Usage
Follow the steps below to run this project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DorukhanBekdur/spotify-clone.git
   cd spotify-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app.

## 🤝 Contributing
To contribute, follow these steps:
1. **Fork** the repository
2. Create a **new branch**: `git checkout -b feature-name`
3. **Commit** your changes: `git commit -m 'Added new feature'`
4. **Push** the branch: `git push origin feature-name`
5. Create a **pull request**

---
For more information about the project, feel free to contact the developer! 🚀
