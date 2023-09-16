import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const HotCollections = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  async function fetchCollection() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {isLoading ? (
            <Carousel infinite={true} responsive={responsive}>
              {new Array(6).fill(0).map((elem, index) => (
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  key={index}
                >
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Skeleton height="100%" width="100%" />
                    </div>
                    <div className="nft_coll_pp">
                      <Skeleton circle={true} height={50} width={50} />
                    </div>
                    <div className="nft_coll_info">
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={60} />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          ):(
            <Carousel infinite={true} responsive={responsive}>
              {data.map((elem, index) => (
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  key={index}
                >
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={elem.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={elem.authorImage}
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{elem.title}</h4>
                      </Link>
                      <span>ERC-{elem.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          ) }
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
