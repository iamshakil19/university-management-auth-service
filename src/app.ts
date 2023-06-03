import cors from 'cors'
import express, { Application } from 'express'
import userRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes

app.use('/api/v1/users', userRouter)

// // Testing
// app.get('/', (req: Request, res: Response) => {
//   res.send('Working Successfully')
// })

// global error handler
app.use(globalErrorHandler)

export default app
