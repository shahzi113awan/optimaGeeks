import express ,{urlencoded} from "express";
import listRoutes from './routes/listRoutes.js'

import todoRoutes from './routes/todoRoutes.js'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/list', listRoutes)
app.use('/api/todo', todoRoutes)


export default app