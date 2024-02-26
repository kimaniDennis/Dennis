import React from 'react'
import Navbar from '../Navbar/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'
import Typewriter from 'typewriter-effect'


function Home() {
  return (
    <div className='home bg-dark w-100 vh-100'>
        <Navbar />
        <div className='icons-container'>
            <ul className='icons'>
                <li><a href="#"><i className='bi bi-github text-secondary' style={{fontSize: "25px"}}></i>
                </a></li>
                <li><a href="#"><i className='bi bi-envelop text-secondary' style={{fontSize: "25px"}}></i>
                </a></li>
                <li><a href="#"><i className='bi bi-instagram text-secondary' style={{fontSize: "25px"}}></i>
                </a></li>
                
            </ul>
        <div className='email-container'>
            <p>denniskungu254@gmail.com</p>
        </div>
        </div>
        <main>
            <p className='hi_name'>Hi, my name is</p>
            <h1 className='text-white'>Dennis Kimani</h1>
            <h2>
                <Typewriter 
                    options={{
                        autoStart:true,
                        loop: true,
                        delay: 180,
                        strings: ["I build full-stack applications.", "I am a web developer."]
                    }}
                /></h2>
                <p className='detail'>
                    I'm a software engineering specializing in building (and occasionly designing) <br />
                    exceptional digital experiences. Currently, I'm focused on building accessible, <br />
                    human-centered products
                </p>
                <button className='bg-transparent'>Check out More</button>
        </main>
    </div>
 
  )
}

export default Home