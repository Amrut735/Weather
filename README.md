## Weather â˜€ï¸ðŸŒ§ï¸ â€” React + Vite

A fast, modern weather app built with React and Vite. Search any city to get current weather conditions with a clean UI and instant feedback.

[![Vite](https://img.shields.io/badge/Vite-9466FF?logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-34D058.svg)](#license)

Repository: https://github.com/Amrut735/Weather

---

### âœ¨ Features
- ðŸ”Ž City search with instant results
- ðŸŒ¡ï¸ Current temperature, feels-like, humidity, wind
- ðŸ–¼ï¸ Weather icons and condition descriptions
- ðŸ“ Graceful errors for invalid cities or network issues
- âš¡ Super-fast dev experience with Vite

---

### ðŸ“¸ Screenshots

<!-- Replace with your images -->
| Home | Result |
| --- | --- |
| ![Home](public/screenshots/home.png) | ![Result](public/screenshots/result.png) |

---

### ðŸš€ Live Demo

<!-- Add your deployed URL -->
- Live: https://your-demo-url.com

---

### ðŸ§© Tech Stack
- React (Vite)
- Tailwind CSS
- Axios / Fetch
- OpenWeatherMap (or any weather API)

---

### ðŸ”‘ Environment Variables

Create a `.env` file in the project root:

```
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

In code, access with `import.meta.env.VITE_WEATHER_API_KEY`.

---

### ðŸ› ï¸ Setup

```bash
# 1) Install
npm install

# 2) Run dev
npm run dev

# 3) Build
npm run build

# 4) Preview production build
npm run preview
```

---

### ðŸ“‚ Project Structure

`
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
`
API Usage (example with Axios)

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

---

### ðŸ§ª Quality

```bash
# Lint
npm run lint
```

---

### ðŸ”’ Notes
- Never commit real API keys. Use `.env` and add `.env` to `.gitignore`.
- Validate user input; show helpful error messages for bad responses.

---

### ðŸ“¦ Deployment

- Vercel: Import repo â†’ set env vars â†’ build command `npm run build` â†’ output `dist/`.
- Netlify: New site from Git â†’ env vars â†’ build `npm run build` â†’ publish `dist/`.

---

### ðŸ—ºï¸ Roadmap
- 5-day forecast
- Geolocation (current city)
- Theme toggle (light/dark)
- Offline fallback / skeleton loading

---

### ðŸ¤ Contributing
Contributions are welcome! Please open an issue or PR.

---

### ðŸ“„ License
MIT License. See `LICENSE` for details.

