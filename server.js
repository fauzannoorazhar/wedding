const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});