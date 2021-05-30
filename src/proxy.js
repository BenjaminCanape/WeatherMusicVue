//proxy server to avoid cors on deezer api 

const express = require('express');
const app = express();
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');
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

// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!
app.use(history({
  // OPTIONAL: Includes more verbose logging
  verbose: true
}))

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/../dist')))

app.get('/', function(req, res, next) {  
  res.status(200).send("This is the proxy server to avoid cors")  
});  

app.listen( port, () => console.log(`Server running on http://localhost:${port}`));