import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
    <div className="contact pd2" id='contact'>
        <div className="cu_content_title">
          <small>CONTACT</small>
          <h1>Any questions? <br /> Write or call us.</h1>
          <small> <a href="tel:+959257902790">(+95) 9222222222</a> </small> <br />
          <small> <a href="mailto:thihanwinhtet1999@gmail.com"> varoonvalley@office.com </a></small>
        </div>
        <div className="cu_main">
            <form action="">
                <input type="text" placeholder="E-mail address"/>
                <input type="text" placeholder="Your name"/>
                <input type="text" style={{paddingBottom : '100px'}} placeholder="Message"/>
                <button>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactUs