import './NavBar.css'
import menu from '../../assets/icons/menu.png'
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <>
        <nav className='navbar pd2'>
            <ul>
                <li className='navLogo'><a href="/">Varoon Valley</a></li>
            </ul>
            <ul>
                <li className='navItem'> <HashLink to={'home'}> Home </HashLink></li>
                <li className='navItem'> <HashLink to={'home#services'}> Services </HashLink>  </li>
                <li className='navItem'> <HashLink to={'home#aboutus'}> About Us </HashLink>  </li>
                <li className='navItem'> <HashLink to={'home#contact'}> Contact Us </HashLink></li>
            </ul>
            <li className='navToggle'> <img src={menu} alt="" /> </li>
        </nav>
    </>
  )
}

export default NavBar