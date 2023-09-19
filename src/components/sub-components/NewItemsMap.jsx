import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ExpiryCountdown from './ExpiryCountdown'
import Carousel from 'react-multi-carousel'
import AOS from 'aos';

function NewItemsMap( { data, responsive}) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div data-aos="fade-zoom-in" data-aos-delay="400" data-aos-easing="ease-in"> 
          <Carousel infinite={true} responsive={responsive}>
            {data.map((data, index) => (
              <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              key={index}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to={`/author/${data.authorId}`}>
                      <img className="lazy" src={data.authorImage} alt="" />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="de_countdown">
                    <ExpiryCountdown expiryDate={data.expiryDate} />
                  </div>

                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-facebook fa-lg"></i>
                          </a>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter fa-lg"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-envelope fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <Link to={`/item-details/${data.nftId}`}>
                      <img
                        src={data.nftImage}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft__item_info">
                    <Link to={`/item-details/${data.nftId}`}>
                      <h4>{data.title}</h4>
                    </Link>
                    <div className="nft__item_price">{data.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{data.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default NewItemsMap