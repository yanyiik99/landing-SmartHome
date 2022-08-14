import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import imageBanner from '../../image/header-image.png'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentBanner = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return(
    <div>
      <Container>
        <div  className="row d-flex flex-md-row flex-column-reverse  justify-content-between my-5 overflow-hidden">
          <div className='col-12 col-md-6 text-center text-md-start'>
            <h1 className='py-3'>Rancang SmartHome Dengan Mewah nan Elegant</h1>
            <p className='pb-3 text-secondary'>hanya dengan satu platform yang memberikan akses darimana saja</p>
            <Button className='shadow px-4 fw-bold' variant="primary">Login</Button>{' '}
            <div className='d-flex my-5 fw-bold justify-content-center justify-content-md-start'>
              <div className='mx-3'>
                <h2>72 %</h2>
                <p>Kelembaban</p>
              </div>
              <div className='mx-3'>
                <h2>20&#8451;</h2>
                <p>Temperature</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <img className='img-fluid' data-aos="fade-left" data-aos-duration="2000" src={imageBanner} />
          </div>
        </div>

      </Container>
    </div>
  )

}


export default ContentBanner;