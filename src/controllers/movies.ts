// src/controllers/movies.ts
import { Request, Response } from 'express';
import axios from 'axios';
import { getAsync, setAsync } from '../services/redis';

export const listMovies = async (req: Request, res: Response) => {
  try {
    const cachedMovies = await getAsync('movies');
    if (cachedMovies) {
      res.json(JSON.parse(cachedMovies));
      return;
    }

    const response = await axios.get('https://swapi.dev/api/films/');
    const movies = response.data.results;

    await setAsync('movies', JSON.stringify(movies), 'EX', 3600); // Cache for 1 hour

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
