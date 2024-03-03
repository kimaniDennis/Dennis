import React, { useEffect } from 'react';
import 'bootstrap/js/dist/tab';
import './Experience.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className=" d-flex flex-columnalign-items-center justify-content-center w-100 vh-100 bg-dark">
      <div className='w-50 text-white'>
      <h2><span>02.</span>Where I've Worked</h2>
      <div className="d-flex mt-5 text-white">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active btn-sm" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              Microsoft
            </button>
            <button className="nav-link btn-sm" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              Upwork
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <h3>Engineer @ <a href="#">Microsoft</a></h3>
              <span>May 2023 - September 2024</span>
              <p>
                <span>.</span> Write modern, performant, maintainable code for a diverse array of client and internal projects
              </p>
              
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <h3>Engineer @ <a href="#">Upwork</a></h3>
              <span>November 2023 - Till Today</span>
              <p>
                <span>.</span> Write modern, performant, maintainable code for a diverse array of client and internal projects
              </p>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Experience;
