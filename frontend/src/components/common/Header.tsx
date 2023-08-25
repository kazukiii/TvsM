import { FC } from 'react'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'
import cartIcon from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import useCart from '../../hooks/useCart.ts'

const Header: FC = () => {
  const { cartItems, fetchCart } = useCart()

  return (
    <header className="flex justify-between items-center h-28 bg-tvsm-black p-6">
      <div className="flex justify-between items-center gap-12">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/games" className="text-tvsm-white text-2xl font-mulish">
          GAMES
        </Link>
        <Link to="/universe" className="text-tvsm-white text-2xl font-mulish">
          TvsM UNIVERSE
        </Link>
        <Link to="/events" className="text-tvsm-white text-2xl font-mulish">
          EVENTS
        </Link>
        <Link to="/shop" className="text-tvsm-white text-2xl font-mulish">
          SHOP
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/profile">
          <img src={avatar} alt="avatar" className="w-28 h-28" />
        </Link>
        <Popover className="relative">
          <Popover.Button onClick={fetchCart}>
            <img src={cartIcon} alt="cart" className="w-12 h-12" />
          </Popover.Button>

          <Popover.Panel className="absolute -right-6 z-10 bg-[#F8F8E4] border border-tvsm-orange h-[1000px] w-[400px] rounded-2xl flex flex-col justify-between py-3">
            {cartItems.map(item => (
              <div className="flex justify-center gap-10">
                <img
                  src={`${import.meta.env.VITE_API_ENDPOINT as string}/${item.product.filePath}`}
                  alt={item.product.name}
                  className="w-[120px] h-[120px] block object-cover"
                />
                <div>
                  <div className="text-2xl">{item.product.name}</div>
                  <div className="text-gray-500">{item.product.description}</div>
                  {item.product.size && <div className="text-gray-500">Size: {item.product.size}</div>}
                  <div className="text-gray-500">Quantity: {item.quantity}</div>
                  <div className="text-gray-500">${item.product.price}</div>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="text-tvsm-white bg-tvsm-orange font-mulish text-2xl rounded-2xl p-6 w-3/5">
                CHECK OUT
              </button>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </header>
  )
}

export default Header
