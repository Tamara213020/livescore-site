const express = require('express');
const axios = require('axios');  // Користете axios
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const apiKey = 'bc50bcb37349423791b511e4a90e5a76';

app.get('/proxy/*', async (req, res) => {
  const apiUrl = req.params[0];

  if (!apiUrl.startsWith('https://')) {
    return res.status(400).json({ error: 'Invalid API request' });
  }

  const fullUrl = apiUrl;
  console.log(`Fetching data from: ${fullUrl}`);

  try {
    const response = await axios.get(fullUrl, {
      headers: {
        'X-Auth-Token': apiKey,
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error during fetch:', error);
    res.status(500).json({ error: 'Error fetching data from the API' });
  }
});

app.listen(port, () => {
  console.log(`Proxy Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Proxy server is running. Use the /proxy endpoint to fetch data.');
});
