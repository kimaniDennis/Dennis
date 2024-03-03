import React, { useEffect } from 'react';
import './Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className='bg-dark w-100 project'>
      <div className='container'>
        <h3 className='px-5 pt-5 text-white'><span>03.</span>My Projects</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5 text-center">
          <div className="col" data-aos="fade-right">
            <div className="card">
              <img src="/Images/Event Management System.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Event Management System</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <button className='bg-transparent'>Load More!</button>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in">
            <div className="card">
              <img src="/Images/ISP.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ISP Billing Management System</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                <button className='bg-transparent'>Load More!</button>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-left">
            <div className="card">
              <img src="/Images/West Coast Airlines.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">West Coast Airlines</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <button className='bg-transparent'>Load More!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
