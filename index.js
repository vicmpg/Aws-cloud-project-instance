const express = require('express');
const app = express();

const PORT = 3000;  // Set the port number

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
