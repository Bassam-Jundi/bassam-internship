import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function ExploreItemsSkeleton() {
  const noBorder = {
    border: "none",
  };

  return (
    <>
      {new Array(8).fill(0).map((_, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <Skeleton circle={true} height={50} width={50} />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <div className="de_countdown" style={noBorder}>
              <Skeleton height={20} width={50} />
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
              <Link to="/item-details">
                <Skeleton height={210} width="100%" />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4>
                  <Skeleton height={20} width={150} />
                </h4>
              </Link>
              <div className="nft__item_price">
                <Skeleton height={10} width={100} />
              </div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>
                  <Skeleton height={10} width={10} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExploreItemsSkeleton;
