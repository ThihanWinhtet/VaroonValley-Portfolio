import './OurTeam.css'
import home from '../../assets/images/OurTeam/home.png'
import head from '../../assets/images/OurTeam/head.png'
import git from '../../assets/images/OurTeam/code.png'
import mail from '../../assets/images/OurTeam/gmail.png'

const OurTeam = () => {
    let team = [1,2,3,4,5,6];
  return (
    <>
        <div className="story_container pd2">
            <div className="story_content_info">
                <small>Warmly</small>
                <h1>Welcome to Varoon Valley</h1>
                <br />
                <p> We are a dynamic and innovative team of technology enthusiasts committed to creating exceptional software solutions that empower businesses and individuals alike. At our core, we believe in the transformative power of technology to simplify processes, enhance productivity, and drive growth.

                Our company was founded with a clear vision in mind—to revolutionize the digital landscape by developing cutting-edge software that addresses real-world challenges. With a diverse team of talented individuals, including software engineers, designers, and business strategists, we bring together a wealth of knowledge and expertise to deliver impactful solutions.</p>
            </div>
            <div className="story_content">
                <img src={home} alt="" />
            </div>
        </div>



        <div className="team_title">
                <small>let's</small>
                <h1>Meet Our Team</h1>
                <small>Lorem ipsum dolor sit.</small>
        </div>
        <div className="team_container pd2">
            {team.map((i)=> 
            <div key={i} className="team_card">
                <div className="team_content">
                    <img src={head} alt="" />
                    <div className="team_social">
                        <img src={git} alt="" />
                        <img src={mail} alt="" />
                    </div>
                </div>
                <div className="team_content_info">
                    <h3>Gangardar Wagle</h3>
                    <small>Founder at Varoon Valley</small>
                    <p>Hello, i'm founder at varoon valley. I am also a project md, ceo, team lead, HR, janitor</p>
                </div>
            </div>
            )}

        </div>
    </>
  )
}

export default OurTeam