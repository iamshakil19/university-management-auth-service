import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes

app.use('/api/v1/users', UserRoutes);

// // Testing
// app.get('/', (req: Request, res: Response) => {
//   res.send('Working Successfully')
// })

// global error handler
app.use(globalErrorHandler);

export default app;
