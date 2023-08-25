import express from 'express'
import multer from 'multer'
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/', upload.single('file'), createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router
