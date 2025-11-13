async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const res = await fetch(`/weather?city=${city}`);
        const data = await res.json();

        if (data.error) {
            document.getElementById("result").innerHTML = `<p>${data.error}</p>`;
            document.getElementById("icon").innerHTML = "";
            return;
        }

        // --- WEATHER ICON MATCHING LOGIC ---
        let iconHTML = "";
        const condition = data.condition.toLowerCase();

        if (condition.includes("cloud")) {
            iconHTML = "☁️";
        } else if (condition.includes("rain")) {
            iconHTML = "🌧️";
        } else if (condition.includes("clear")) {
            iconHTML = "☀️";
        } else if (condition.includes("mist") || condition.includes("fog") || condition.includes("haze")) {
            iconHTML = "🌫️";
        } else if (condition.includes("snow")) {
            iconHTML = "❄️";
        } else if (condition.includes("thunder")) {
            iconHTML = "🌩️";
        } else {
            iconHTML = "🌡️";
        }

        document.getElementById("icon").innerHTML = iconHTML;

        // --- WEATHER DETAILS ---
        document.getElementById("result").innerHTML = `
            <p><b>📍 City:</b> ${data.city}</p>
            <p><b>🌡 Temperature:</b> ${data.temperature}°C</p>
            <p><b>💧 Humidity:</b> ${data.humidity}%</p>
            <p><b>☁️ Condition:</b> ${data.condition}</p>
        `;

    } catch (err) {
        document.getElementById("result").innerHTML = "<p>Error fetching weather data</p>";
        document.getElementById("icon").innerHTML = "";
    }
}
