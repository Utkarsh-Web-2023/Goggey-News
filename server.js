// server.js (Express server)
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/news", async (req, res) => {
    try {
        letapiKey = "76d35117273144168361a54d6e2b1bdd";
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
