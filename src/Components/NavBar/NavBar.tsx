import './NavBar.css'
import menu from '../../assets/icons/menu.png'

const NavBar = () => {
  return (
    <>
        <nav className='navbar pd2'>
            <ul>
                <li className='navLogo'><a href="/home">Varoon Valley</a></li>
            </ul>
            <ul>
                <li className='navItem'> <a href="/home"> Home </a></li>
                <li className='navItem'> <a href="#services"> Services </a></li>
                <li className='navItem'> <a href="#aboutus"> About Us </a></li>
                <li className='navItem'> <a href="#contact"> Contact Us </a></li>
            </ul>
            <li className='navToggle'> <img src={menu} alt="" /> </li>
        </nav>
    </>
  )
}

export default NavBar