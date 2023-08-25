import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes'
import path from 'path'

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../uploads')))
app.use('/products', productRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
