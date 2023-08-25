import { useState, useEffect } from 'react'
import axiosInstance from '../services/axiosInstance.ts'
import { useParams } from 'react-router-dom'
import { Product } from '../../../types/product'

const useProduct = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get<Product>(`/products/${id!}`)
        setProduct(response.data)
      } catch (err) {
        setError(err.message || 'An error occurred.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}

export default useProduct
