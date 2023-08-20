import express from 'express';
import axios from 'axios'; // You'll need Axios or a similar library for making HTTP requests

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    const movies = response.data.results;
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;
