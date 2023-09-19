import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

function AuthorItemsSkeleton() {
  return (
    <>
    <div className="container">
    <div className="de_tab_content">
    <div className="tab-1">
      <div className="row">
        {new Array(8).fill(0).map((data, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
            <div className="nft__item">
              <div className="author_list_pp">
                <Link to={`/author`}>
                  <Skeleton circle={true} height={50} width={50} />
                  <i className="fa fa-check"></i>
                </Link>
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
                <Skeleton height={210} width="100%" />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to="/item-details">
                  <h4>{data.title}</h4>
                </Link>
                <div className="nft__item_price"><Skeleton height={20} width={50} /> </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{data.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default AuthorItemsSkeleton