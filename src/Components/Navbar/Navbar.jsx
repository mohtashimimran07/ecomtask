import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
//import dropdown_icon from '../Assets/dropdown_icon.png'

const Navbar = () => {

    const [meun,setMeun] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
   
   /* const dropdown_toggle = (e) =>{
      menuRef.current.classlist.toggle('nav-menu-visible');
      e.target.classlist.toggle('open');
    }*/

  return (
    <div className='navbar'>
      <div className="nav-logo">
        
            <img src={logo} alt="" />
            <p>MOStore</p>
        </div>
        
        <ul ref={menuRef} className="nav-meun">
            <li onClick={()=>{setMeun("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{meun==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMeun("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{meun==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMeun("womens")}}><Link style={{textDecoration:'none'}} to="womens">Women</Link>{meun==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMeun("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{meun==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
  )
}

export default Navbar
