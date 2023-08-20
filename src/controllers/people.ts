// src/controllers/people.ts
import { Request, Response } from 'express';
import axios from 'axios';

export const listPeople = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    const people = response.data.results;
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
