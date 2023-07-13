import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer pd2">
            <div className="ft_copy">
                <h4>Varoon Valley</h4>
                <a href="mailto:"> @ varoon valley</a>
            </div>
            <div className="ft_contact">
                <h4>Contact</h4>
                <a>Kandaw, Mogoke.</a>
                <a href="tel:+">+888 888 8888</a>
                <a href="mailto:job@varoonvalley.com">job@varoonvalley.com</a>
            </div>
            <div className="ft_Quick">
                <h4>Quick Links</h4>
                <a href="#home">HOME</a>
                <a href="#services">Services</a>
                <a href="#aboutus">ABOUT US</a>
                <a href="#contact">CONTACT US</a>
            </div>
            <div className="ft_Social">
                <h4>Social Links</h4>
                <a href="">Facebook</a>
                <a href="">LinkedIn</a>
                <a href="mailto:job@varoonvalley.com">Gmail</a>
                <a href="https://github.com/Varoon-Valley">git</a>
            </div>
        </div>
    </>
  )
}

export default Footer