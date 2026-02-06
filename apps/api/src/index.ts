import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/videos', async (req, res) => {
  res.json({ message: 'Videos endpoint - coming soon' })
})

app.get('/api/topics/trending', async (req, res) => {
  res.json({ message: 'Trending topics - coming soon' })
})

app.listen(PORT, () => {
  console.log('API running on port ' + PORT)
})

