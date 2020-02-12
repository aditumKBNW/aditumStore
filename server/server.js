const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use('/build', (req, res) => res.sendFile((path.resolve(__dirname, '../build/bundle.js'))));

app.use((req, res) => res.sendFile(path.resolve(__dirname, "../index.html")));


app.listen(PORT, () => console.log(`SERVER LISTENING ON ${PORT}`));