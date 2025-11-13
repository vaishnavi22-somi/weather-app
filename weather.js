const express = require("express");
const fetch = (...args)=>
    import('node-fetch').then(({default:fetch})=>fetch(...args)); // if using node <18; remove if using built-in fetch
const app = express();
app.use(express.static("public"));
app.use(express.json());
const PORT = process.env.PORT || 3000;
const OPENWEATHER_KEY = process.env.OPENWEATHER_API_KEY;
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.json({ error: "City is required" });
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OPENWEATHER_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod == "404"){
         return res.json({ error: "City not found" });
    }
    res.json({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description
    });
  } catch (err) {
    console.log("ERROR:",err);
    res.json({ error: "Weather API error" });
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
