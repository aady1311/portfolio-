import React from 'react';
import googleImg from '../assets/img/Google.png';
import reactImg from '../assets/img/React.png';
import typescriptImg from '../assets/img/TypeScript.png';
import publicationImg from '../assets/img/Aditya Yadav-1(1).png';
import dataVizImg from '../assets/img/Certificate1.png';
import collegeImg from '../assets/img/1737382117290.jpg';
import solutionsImg from '../assets/img/certificate-2.png';
import dataAnalyticsImg from '../assets/img/Certificate_3-1.png';

const Certificates: React.FC = () => {
  return (
    <section className="certificate-section" id="Certificate" style={{scrollMarginTop: '80px', scrollBehavior: 'smooth'}}>
      <div className="certificate-container">
        <div className="certificate-card">
          <img src={googleImg} alt="Google AI Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">Google AI Essentials</h3>
            <p className="certificate-subtitle">Certificate of Completion</p>
            <span className="certificate-date">September 23, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={reactImg} alt="ReactJS Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">ReactJS Course with Infosys Springboard</h3>
            <p className="certificate-subtitle">Certificate of Completion</p>
            <span className="certificate-date">August 17, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={typescriptImg} alt="TypeScript Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">TypeScript Course with Infosys Springboard</h3>
            <p className="certificate-subtitle">Certificate of Completion</p>
            <span className="certificate-date">September 27, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={publicationImg} alt="Publication Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">IoT-Based Real-Time Tracking Systems: Enhancing Efficiency in Dynamic Supply Chains</h3>
            <p className="certificate-subtitle">Certificate Awarded to Aditya Yadav</p>
            <span className="certificate-date">March 19, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={dataVizImg} alt="Data Visualization Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">Data Visualization: Empowering Business</h3>
            <p className="certificate-subtitle">Certificate of Completion</p>
            <span className="certificate-date">January 3, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={collegeImg} alt="College Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">St. John College of Engineering</h3>
            <p className="certificate-subtitle">Certificate Awarded to Aditya Yadav</p>
            <span className="certificate-date">January 17, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={solutionsImg} alt="Solutions Architecture Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">Solutions Architecture Job Simulation</h3>
            <p className="certificate-subtitle">Certificate of Completion</p>
            <span className="certificate-date">January 21, 2025</span>
          </div>
        </div>

        <div className="certificate-card">
          <img src={dataAnalyticsImg} alt="Data Analytics Certificate" />
          <div className="certificate-info">
            <h3 className="certificate-title">Data Analytics Job Simulation</h3>
            <p className="certificate-subtitle">Certificate of Completion</p>
            <span className="certificate-date">March 22, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;