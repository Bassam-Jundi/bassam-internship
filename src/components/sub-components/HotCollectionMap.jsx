import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom'
import AOS from 'aos';

function HotCollectionMap({ data }) {
  
  useEffect(() => {
    AOS.init()
  }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 767 },
          items: 3,
        },
        smallTablets: {
          breakpoint: { max: 767, min: 550 },
          items: 2,
        },
        phone: {
          breakpoint: { max: 550, min: 0 },
          items: 1,
        },
      };

  return (
    <div data-aos="fade-zoom-in" data-aos-delay="300" data-aos-easing="ease-in">
    <Carousel infinite={true} responsive={responsive}>
              {data.map((data, index) => (
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  key={index}
                >
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to={`/item-details/${data.nftId}`}>
                        <img
                          src={data.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to={`/author/${data.authorId}`}>
                        <img
                          className="lazy pp-coll"
                          src={data.authorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{data.title}</h4>
                      </Link>
                      <span>ERC-{data.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
    </div>
  )
}

export default HotCollectionMap