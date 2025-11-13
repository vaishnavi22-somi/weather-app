const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public"));

// 🔑 ENTER YOUR OPENWEATHER API KEY HERE
const API_KEY = "YOUR_API_KEY_HERE";

// Weather Route
app.get("/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.json({ error: "City is required" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            return res.json({ error: "City not found" });
        }

        res.json({
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            condition: data.weather[0].description
        });

    } catch (error) {
        res.json({ error: "Weather API error" });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
