import express, { Express, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = 8080

const app: Express = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from DALL-E!')
})

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
  })
}

startServer()
