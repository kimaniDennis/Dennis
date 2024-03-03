import { useEffect } from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='about bg-dark w-100 vh-100'>
      <div className='row'>
      <div className='about_text col-12 col-md-6 col-lg-6' data-aos='fade-right'>
        <h3><span>01.</span>About me</h3>
        <p>
          Hello! My name is Dennis and I enjoy creating things that live on the internet.
          My interest in web development started back in 2023 when I tried creating a website using Notepad++. It turns out I ended up learning more about HTML & CSS!
        </p>
        <p>
          Here are a few technologies I've been working with recently:
        </p>
        <div className='row'>
          <div className='col-6'>
            <p><span> .</span>Javascript</p>
            <p><span> .</span>React JS</p>
            <p><span> .</span>Node.JS</p>
          </div>
          <div className='col-6'>
            <p><span> . </span>TypeScript</p>
            <p><span> . </span>Bootstrap</p>
            <p><span> . </span>WordPress</p>
          </div>
        </div>
      </div>
      <div className='about_image col-12 col-md-6 col-lg-6' data-aos='fade-left'>
        <img src='/Images/Dennis.jpg' alt='' />
      </div>
      </div>
    </div>
  );
}

export default About;
