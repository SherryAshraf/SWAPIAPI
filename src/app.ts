import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import peopleRouter from './routes/people';
import moviesRouter from './routes/movies';
//import actorsRouter from './routes/actors';

const app = express();

app.use(express.json());

app.use('/people', peopleRouter);
app.use('/movies', moviesRouter);
//pp.use('/actors', actorsRouter);

app.use(errorHandler);

const port = 3000; // Or the port you're using
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
