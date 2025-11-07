import React from "react";

export default function WeatherCard({ data }) {
  return (
    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-gray-200">
      <div className="flex justify-between items-baseline">
        <div>
          <p className="text-lg font-medium">
            {data.name}, {data.country}
          </p>
          <p className="text-sm text-gray-500 capitalize">{data.description}</p>
        </div>
        <p className="text-3xl font-bold">{Math.round(data.temp)}°C</p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
        <p>Feels like: {Math.round(data.feels_like)}°C</p>
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind_speed} m/s</p>
      </div>
    </div>
  );
}
