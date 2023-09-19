import React, { useEffect } from "react";
import AOS from 'aos';

const LandingIntro = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_wallet"></i>
              <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out" className="text">
                <h4 className="">Set up your wallet</h4>
                <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
                </div>
              </div>
              <i data-aos="fade-up-left" data-aos-delay="800" data-aos-easing="ease-in-out" className="wm icon_wallet"></i>
                
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt"></i>
              <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out" className="text">
                <h4 className="">Add your NFT's</h4>
                <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
                </div>
              </div>
              <i data-aos="fade-up-left" data-aos-delay="1100" data-aos-easing="ease-in-out" className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_tags_alt"></i>
              <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out" className="text">
                <h4 className="">Sell your NFT's</h4>
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
                </div>
              </div>
              <i data-aos="fade-up" data-aos-delay="1200" data-aos-easing="ease-in-out" className="wm icon_tags_alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
