#  Weather - Modern React Weather App

A comprehensive, professional weather application that delivers realtime conditions, clean UI/UX, and a productionready setup using React + Vite. Includes city search, metric/imperial units, graceful errors, and fast performance.

 Live Application

- Main Website: https://your-live-url.com/  
  (Add your deployed URL once live)

##  Features

###  Core Functionalities
- City Search: Find weather by city name with instant feedback
- Current Conditions: Temperature, feels-like, humidity, wind, and description
- Icons & Status: Clear condition icons and readable labels
- Input Validation: Robust form validation (e.g., via Zod) and helpful errors
- Responsive UI: Works smoothly on mobile, tablet, and desktop

###  Helpful Details
- Unit Toggle (optional): Metric (C) and Imperial (F)
- Error Handling: Friendly messages for invalid input/network errors
- Fast Dev Experience: Lightning-fast hot reload via Vite

##  Architecture

A simple, extensible structure designed for clarity and growth:

```
Weather/
  public/
    screenshots/           # images for README
  src/
    components/            # UI components
    hooks/                 # custom hooks (optional)
    styles/                # styles (Tailwind or CSS)
    utils/                 # helpers (formatting, api)
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
  README.md
```

##  Quick Start

### 1) Local Development

```bash
# Clone
git clone https://github.com/Amrut735/Weather.git
cd Weather

# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 2) Environment Variables
Create a `.env` file in the project root:

```
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

Access in code with `import.meta.env.VITE_WEATHER_API_KEY`.

##  API Integration

Example (Axios) to fetch current weather by city:

```js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_URL,
});

export async function getWeatherByCity(city) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const params = { q: city, appid: apiKey, units: "metric" };
  const { data } = await api.get("/weather", { params });
  return data;
}
```

##  Screenshots

(Add images to `public/screenshots/` and update paths below)

| Home | Result |
| --- | --- |
| ![Home](public/screenshots/home.png) | ![Result](public/screenshots/result.png) |

##  Deployment Options

### Vercel (Recommended)
- Import repo  Set env vars  Build `npm run build`  Output `dist/`

### Netlify
- New site from Git  Env vars  Build `npm run build`  Publish `dist/`

### Render
- Web Service  Build: `npm install && npm run build`  Start: `npm run preview` (or custom server)

##  Customization
- Theming: Tailwind config for colors/spacing/typography
- Units & Locale: Add toggles for C/F, language, date/time formatting
- Components: Extract `SearchBar`, `WeatherCard`, `ErrorBanner`, etc.
- Validation: Strengthen Zod schemas for cleaner UX

##  Notes
- Never commit real API keys. Use `.env` and ensure its in `.gitignore`.
- Handle rate limits and error states from the weather API gracefully.

##  Contributing
Contributions are welcome! Please open an issue or PR on GitHub.

##  License
MIT License. See `LICENSE` for details.

## Links
- Live: https://your-live-url.com/
- GitHub Repo: https://github.com/Amrut735/Weather

References / Inspiration:
- CareerGuideAI (structure inspiration): https://career-guide-ai-2.onrender.com/
- CareerGuideAI GitHub: https://github.com/Amrut735/Career-Guide-AI

