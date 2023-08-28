import { FC, useState, Fragment } from 'react'
import useProduct from '../hooks/useProduct.ts'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'
import axiosInstance from '../services/axiosInstance.ts'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

const ItemDetail: FC = () => {
  const navigate = useNavigate()
  const { product, loading, error } = useProduct()
  const [quantity, setQuantity] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const handleAddToCart = async () => {
    try {
      const response = await axiosInstance.post('/cart', {
        // TODO: fix this after login feature is implemented
        userId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
        productId: product!.id,
        quantity,
      })
      console.log('Product added successfully!', response.data)
      setIsOpen(true)
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    navigate('/shop')
  }

  if (loading)
    return (
      <>
        <Header />
        <p>Loading...</p>
        <Footer />
      </>
    )
  if (error)
    return (
      <>
        <Header />
        <p>Error loading product.</p>
        <Footer />
      </>
    )
  if (!product)
    return (
      <>
        <Header />
        <p>Product not found.</p>
        <Footer />
      </>
    )

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="flex justify-center items-center h-[120px] mb-20">
          <h1 className="text-4xl font-ldr-kaet">SHOP</h1>
        </div>
        <div className="flex justify-center gap-14">
          <div className="flex flex-col justify-center items-center bg-[#F8F8E4] border border-tvsm-orange w-[300px] h-[300px] p-6 rounded-2xl hover:cursor-pointer">
            <img
              src={`${import.meta.env.VITE_API_ENDPOINT as string}/${product.filePath}`}
              alt={product.name}
              className="w-[200px] h-[200px] block object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-bold">Product Name:</span> {product.name}
            </div>
            <div>
              <span className="font-bold">Description:</span> {product.description}
            </div>
            {product.size && (
              <div>
                <span className="font-bold">Size:</span> {product.size}
              </div>
            )}
            <label>
              QTY:
              <input
                type="number"
                className="border border-tvsm-orange rounded-md w-[60px] h-[40px] ml-2 text-center p-3"
                value={quantity}
                onChange={e => setQuantity(parseInt(e.target.value))}
              />
            </label>
            <button className="w-[200px] h-[40px] bg-tvsm-orange text-tvsm-white rounded-md" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center h-[120px] mt-28">
          <h1 className="text-4xl font-ldr-kaet">YOU ALSO MAY LIKE</h1>
        </div>
      </div>
      <Footer />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Item added to cart!
                  </Dialog.Title>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ItemDetail
