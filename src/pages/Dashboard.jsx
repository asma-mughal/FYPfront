import React,{useState} from 'react'
import {Navbar, Hero,AboutUs, Projects, ContactUs, Footer } from '../components/index';
import styles from '../style';
import { useAuth } from '../contexts/AuthContext';
import Bot from '../components/Bot';
import { GoogleLogout } from 'react-google-login';
const Dashboard = () => {
  const {logout} = useAuth()
  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false);
  const handleLogout2 = (res) =>{
    console.log(res)
      }
  async function handleLogout() {
  try{ 
  }catch(eror)
  {
   
  }
  }
  
  return (
    <div className="">
    <Navbar color={color} setColor={setColor} click={click} setClick={setClick} />

    <Hero click={click}  />
    
    <Bot />
        <Projects />
      
    <div className={`bg-primary `}>
      <div className={``}>
       <AboutUs />
       <ContactUs />
      </div>
    </div>
    <div className={`bg-primary `}>
      <div className={`${styles.boxWidth}`}>
      <GoogleLogout
  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
  buttonText="Logout"
  onLogoutSuccess={handleLogout2}
>
</GoogleLogout>
        <Footer />
        </div>
        <button className='bg-white' onClick={handleLogout}>Logout</button>
        </div>
  </div>
  )
}

export default Dashboard
