import './OurServices.css'
import code from '../../assets/images/OurServices/code.png'
import data from '../../assets/images/OurServices/database.png'
import flash from '../../assets/images/OurServices/lightning.png'

const OurServices = () => {
  return (
    <>
      <div className="os_content_title pd2" id='services'>
        <h3>Services</h3>
        <h4>How can we help?</h4>
      </div>
      <div className="os_content_container">
        <div className="os_content">
          <img src={data} alt="" />
          <h3>Data <br /> Engineering</h3>
          <p>Reliable support in leveraging data for safe & efficent digital transformation.</p>
        </div>
        <div className="os_content">
          <img src={code} alt="" />
          <h3>Platform Enablement</h3>
          <p>Tailor made digital platform
            solutions compliant with highest security & governance standards.</p>
        </div>
        <div className="os_content">
          <img src={flash} alt="" />
          <h3>Process Automation</h3>
          <p>Providing proven automation solutions with trackable process and acceptance-retrieval features.</p>
        </div>
      </div>
    </>
  )
}

export default OurServices