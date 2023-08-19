import { FC } from 'react'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'
import cartIcon from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'

const Header: FC = () => {
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
        <Link to="/profile"><img src={avatar} alt="avatar" className="w-28 h-28" /></Link>
        <img src={cartIcon} alt="cart" className="w-12 h-12" />
      </div>
    </header>
  )
}

export default Header
