<div align="center">

# 🌦️ WeatherNow

### ✨ A stunning, modern weather application with beautiful animated backgrounds

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[🌐 Live Demo](https://weather735-2d34e.web.app) • [📦 Repository](https://github.com/Amrut735/Weather)

</div>

---

## 🎨 Features

- 🔍 **Smart City Search** - Search any city with Enter key or button submit
- ✅ **Input Validation** - Robust validation with helpful error messages using Zod
- 🌡️ **Real-time Weather Data** - Current conditions including:
  - Temperature & Feels-like
  - Humidity & Wind Speed
  - Weather Description
- 🎭 **Beautiful UI** - Stunning animated backgrounds:
  - ✨ Aurora Gradient effects
  - ⭐ Animated stars
  - 🌊 Background beams with collision
  - 📐 Dynamic background lines
  - 🎨 Noise texture & vignette effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🎯 **Error Handling** - Clear loading and error states

---

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| **⚛️ Framework** | React 19 |
| **⚡ Build Tool** | Vite 7 |
| **🎨 Styling** | Tailwind CSS 4 |
| **🌐 HTTP Client** | Axios |
| **✅ Validation** | Zod |
| **🎬 Animations** | Motion |
| **☁️ Deployment** | Firebase Hosting |

---

## 📦 Installation & Setup

### Prerequisites

- 📌 Node.js >= 18
- 📌 npm >= 9

### Quick Start

```bash
# 📥 Install dependencies
npm install

# 🚀 Start development server
npm run dev

# 🏗️ Build for production
npm run build

# 👀 Preview production build
npm run preview
```

### 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

> 💡 Get your free API key from [OpenWeather](https://openweathermap.org/api)

---

## 📁 Project Structure

```
we/
├── 📂 public/              # Static assets
├── 📂 src/
│   ├── 📂 components/      # React components
│   │   ├── SearchBar.jsx   # 🔍 Search input component
│   │   ├── WeatherCard.jsx # 🌡️ Weather display card
│   │   └── 📂 ui/          # 🎨 UI components
│   │       ├── AuroraGradient.jsx
│   │       ├── BackgroundBeams.jsx
│   │       ├── Stars.jsx
│   │       └── ...
│   ├── 📂 pages/           # Page components
│   ├── App.jsx             # 🎯 Main app component
│   └── main.jsx            # 🚀 Entry point
├── 📄 package.json
├── ⚙️ vite.config.js
└── 🎨 tailwind.config.js
```

---

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start Vite dev server |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👀 Preview production build |
| `npm run lint` | 🔍 Lint the codebase |

---

## 🌐 API Integration

This app uses the **OpenWeather Current Weather Data API** to fetch real-time weather information.

- 📡 **API Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- 🌡️ **Units**: Metric (°C)
- 🔑 **Authentication**: API key via environment variables

---

## 🚀 Deployment

### Firebase Hosting (Current)

This project is configured for Firebase Hosting:

```bash
# 1️⃣ Install Firebase CLI (one-time)
npm install -g firebase-tools

# 2️⃣ Login to Firebase
firebase login --no-localhost

# 3️⃣ Build the app
npm run build

# 4️⃣ Deploy
firebase deploy --only hosting
```

### Other Platforms

This app can be deployed to any static hosting service:

- ☁️ **Vercel** - Import repo, set env vars, build `npm run build`, output `dist/`
- 🌐 **Netlify** - New site from Git, env vars, build `npm run build`, publish `dist/`
- 🚀 **Render** - Static site, build `npm install && npm run build`, serve `dist/`

---

## 🎨 UI Components

The app features custom animated UI components:

- 🌈 **AuroraGradient** - Beautiful gradient effects
- ⭐ **Stars** - Animated starfield background
- 🌊 **BackgroundBeams** - Interactive beam animations
- 📐 **BackgroundLines** - Dynamic line patterns
- 🎭 **LayoutTextFlip** - Text animation effects
- 🎨 **NoiseTexture** & **Vignette** - Visual enhancements

---

## 📸 Screenshots

> 💡 Add your screenshots here to showcase the beautiful UI!

| Home View | Weather Results |
|-----------|----------------|
| (add screenshot) | (add screenshot) |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔀 Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🔗 Links

- 🌐 **Live Demo**: [weather735-2d34e.web.app](https://weather735-2d34e.web.app)
- 📦 **Repository**: [github.com/Amrut735/Weather](https://github.com/Amrut735/Weather)

---

<div align="center">

### ⭐ Star this repo if you find it helpful! ⭐

Made with ❤️ and ☕ by [Amrut735](https://github.com/Amrut735)

</div>
