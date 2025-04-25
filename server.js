const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.static("public"));

// Traffic API (Example using OpenWeather API for traffic data)
app.get("/traffic", async (req, res) => {
    let trafficData = "Traffic is moderate near your area.";
    res.json({ message: trafficData });
});

// Diagnostics API (Placeholder)
app.get("/diagnostics", (req, res) => {
    let status = "Engine: OK, Battery: 80%, Tires: Good";
    res.json({ message: status });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
