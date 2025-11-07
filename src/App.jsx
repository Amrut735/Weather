import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import BackgroundBeams from "./components/ui/BackgroundBeams.jsx";
import BackgroundLines from "./components/ui/BackgroundLines.jsx";
import LayoutTextFlip from "./components/ui/LayoutTextFlip.jsx";
import AuroraGradient from "./components/ui/AuroraGradient.jsx";
import Stars from "./components/ui/Stars.jsx";
import Vignette from "./components/ui/Vignette.jsx";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const citySchema = z
    .string()
    .min(2, "City name must be at least 2 characters long")
    .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, "City name should contain only letters");

  const fetchWeather = async (query) => {
    if (!query) return;
    setError("");
    setWeather(null);
    setLoading(true);

    try {
      citySchema.parse(query);

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: { q: query, appid: apiKey, units: "metric" },
        }
      );

      const data = response.data;
      setWeather({
        name: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        description: data.weather[0].description,
      });
    } catch (err) {
      if (err.name === "ZodError") {
        setError(err.errors[0].message);
      } else if (err.response?.status === 404) {
        setError("City not found.");
      } else {
        setError("Error fetching weather data.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setCity(query);
    fetchWeather(query);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 flex justify-center items-start p-6">
      <Stars />
      <AuroraGradient />
      <BackgroundLines />
      <BackgroundBeams />
      <Vignette />
      <div className="relative z-10 bg-white/80 backdrop-blur-md shadow-lg border border-white/40 rounded-2xl w-full max-w-md p-6">
        <h1 className="text-3xl font-semibold text-center mb-4 tracking-tight">
          <LayoutTextFlip>WeatherNow 🌦️</LayoutTextFlip>
        </h1>

        <SearchBar
          value={city}
          onChange={(v) => setCity(v)}
          onSearch={() => handleSearch(city)}
          onSearchEnter={(v) => handleSearch(v)}
          loading={loading}
        />

        {loading && <p className="text-slate-600 text-center mt-3 animate-pulse">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        {weather && <WeatherCard data={weather} />}
        {!loading && !weather && !error && (
          <p className="text-gray-500 text-center mt-3">
            Enter a city name to see weather.
          </p>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          Powered by OpenWeather API
        </p>
      </div>
    </section>
  );
}
