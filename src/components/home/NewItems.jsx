import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";

const NewItems = () => {
  const [data, setData] = useState([]);

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

  async function fetchData() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
    );
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function ExpiryCountdown({ expiryDate }) {
    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(() => {
      if (expiryDate !== null) {
        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const timeDifference = expiryDate - currentTime;

          if (timeDifference <= 0) {
            clearInterval(interval);
            setRemainingTime("Expired");
          } else {
            const hours = Math.floor(
              (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
          }
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [expiryDate]);

    return remainingTime !== null ? remainingTime : "No expiry";
  }

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
            {data.map((elem, index) => (
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                key={index}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link
                      to="/author"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Monica Lucas"
                    >
                      <img className="lazy" src={elem.authorImage} alt="" />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="de_countdown">
                    <ExpiryCountdown expiryDate={elem.expiryDate} />
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
                    <Link to={`/item-details/${elem.nftId}`}>
                      <img
                        src={elem.nftImage}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft__item_info">
                    <Link to={`/item-details/${elem.nftId}`}>
                      <h4>{elem.title}</h4>
                    </Link>
                    <div className="nft__item_price">{elem.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{elem.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
