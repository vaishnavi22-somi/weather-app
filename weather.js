const express = require("express");
const fetch = require("node-fetch"); // if using node <18; remove if using built-in fetch
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Use port from environment (Render provides PORT)
const PORT = process.env.PORT || 3000;

// Use OpenWeather API key from env
const OPENWEATHER_KEY = process.env.OPENWEATHER_API_KEY || "4db8340018e7ba6a543a83c399cbd240";

// Example /weather route using env key
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.json({ error: "City is required" });

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OPENWEATHER_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod && data.cod === "404") return res.json({ error: "City not found" });
    res.json({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description
    });
  } catch (e) {
    res.json({ error: "Weather API error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
