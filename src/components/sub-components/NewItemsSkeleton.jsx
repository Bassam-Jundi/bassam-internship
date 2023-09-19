import React from 'react'
import Carousel from 'react-multi-carousel';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

function NewItemsSkeleton() {
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
    <section id="section-items" className="no-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>New Items</h2>
            <div className="small-border bg-color-2"></div>
          </div>
        </div>
        <Carousel infinite={true} responsive={responsive}>
          {new Array(6).fill(0).map((data, index) => (
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              key={index}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to={`/author/${data.authorId}`}>
                  <Skeleton circle={true}height={50} width={50} />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="de_countdown">
                <Skeleton height={20} width={60} />
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
                  <Skeleton height={230} width={210} />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${data.nftId}`}>
                    <h4>{data.title}</h4>
                  </Link>
                  <div className="nft__item_price"><Skeleton height={20} width={60} /></div>
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
  </section>
  )
}

export default NewItemsSkeleton