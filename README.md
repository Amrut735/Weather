# Weather - Modern React Weather App

A clean, fast weather application built with React + Vite. Search any city to see current conditions with friendly validation, helpful errors, and a responsive UI styled with Tailwind CSS.

- React 19 + Vite 7 for a great DX
- Tailwind CSS 4 for styling
- Axios for HTTP requests
- Zod for input validation
- ESLint configured for React + hooks

## Project Structure

```
we/
  public/
    vite.svg
  src/
    components/
      SearchBar.jsx
      WeatherCard.jsx
    pages/
      Home.jsx
      About.jsx
    assets/
      react.svg
    App.jsx
    App.css
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.js
  eslint.config.js
  README.md
```

## Features

- City search with Enter or button submit
- Robust city name validation with helpful messages
- Current conditions: temperature, feels-like, humidity, wind, description
- Clear loading and error states (e.g., city not found)
- Responsive, minimal UI with Tailwind
- Environment-based API configuration

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Install & Run

```bash
# install
npm install

# start dev server
npm run dev

# production build
npm run build

# preview production build
npm run preview
```

### Environment Variables
Create a `.env` file in the project root:

```
VITE_WEATHER_API_KEY=your_openweather_api_key
# Optional override (defaults to https://api.openweathermap.org/data/2.5)
VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

These are accessed via `import.meta.env` in code. Example usage in `src/App.jsx`:

```js
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
// axios.get("https://api.openweathermap.org/data/2.5/weather", {
//   params: { q: query, appid: apiKey, units: "metric" },
// })
```

## Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Lint the codebase

## API

Data is fetched from OpenWeather's Current Weather Data API using Axios. Units default to metric (°C). Configure the API key via environment variables as shown above.

## Tech Notes

- UI is composed of `SearchBar` and `WeatherCard` components.
- Input validation is implemented with Zod to ensure clean city input.
- Tailwind CSS utilities are referenced in `src/index.css` and configured via `tailwind.config.js` and `postcss.config.js`.
- ESLint is set up for recommended React rules and React hooks best practices.

## Screenshots
Add images to `public/` (e.g., `public/screenshots/home.png`) and reference them here.

| Home | Result |
| ---- | ------ |
| (add) | (add) |

## Deployment

Any static host that serves the Vite build output will work:

- Vercel: Import repo, set env vars, build `npm run build`, output `dist/`
- Netlify: New site from Git, env vars, build `npm run build`, publish `dist/`
- Render: Static site or web service, build `npm install && npm run build`, serve `dist/`

### Firebase Hosting

This repo includes Firebase config for SPA hosting.

1) Install CLI (one-time):
```bash
npm install -g firebase-tools
```

2) Login (one-time):
```bash
firebase login --no-localhost
```

3) Set your Firebase project ID:
- `.firebaserc` is preconfigured with `weather735-2d34e`
- Update it if you use a different Firebase project

4) Build the app:
```bash
npm run build
```

5) Deploy:
```bash
firebase deploy --only hosting
```

Config files used:
- `firebase.json` → serves `dist/` and rewrites all routes to `/index.html`
- `.firebaserc` → sets your default project

## License

MIT

## Links

- Live: https://weather735-2d34e.web.app
- Repository: https://github.com/Amrut735/Weather


