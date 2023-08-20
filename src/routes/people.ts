// src/routes/people.ts
import express from 'express';
import { listPeople } from '../controllers/people';

const router = express.Router();

router.get('/', listPeople);

export default router;
