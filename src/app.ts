import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/', routes);

// // Testing
// app.get('/', (req: Request, res: Response) => {
//   res.send('Working Successfully')
// })

// Global Error Handler
app.use(globalErrorHandler);

export default app;
