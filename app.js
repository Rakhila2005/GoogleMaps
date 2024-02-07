const express = require('express');
const { Client } = require('@googlemaps/google-maps-services-js');
require('dotenv').config();
const path = require('path');

const app = express();
const port = 3000;

const client = new Client({});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/elevation', async (req, res) => {
    try {
        const response = await client.elevation({
            params: {
                locations: [{ lat: 51.13964452706329, lng: 71.41295548831049 }],
                key: process.env.AIzaSyCpwILutSyJWL0EaRTATh1Pr2eXgLfBhF0,
            },
            timeout: 1000,
        });
        const elevation = response.data.results[0].elevation;
        res.json({ elevation });
    } catch (error) {
        res.status(500).json({ error: error.response.data.error_message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
