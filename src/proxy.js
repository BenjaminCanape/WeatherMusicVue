//proxy server to avoid cors on deezer api 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const DEEZER_BASE_URL = "https://api.deezer.com/";

app.get('/getPlaylist', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  axios( DEEZER_BASE_URL + "search/playlist?limit=10&q=" + req.query.weatherName )
    .then(response => {
      res.json(response.data)
    })
});

app.listen( port, () => console.log(`Server running on http://localhost:${port}`));