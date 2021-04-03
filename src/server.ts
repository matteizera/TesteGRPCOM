import express from 'express';
import cors from 'cors'
import 'express-async-errors'
import routes from './routes'
const path = require('path' ) ;
const app = express()

const port = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));
app.listen(port)