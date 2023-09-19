import React, { useEffect, useState } from "react";
import axios from "axios";
import NewItemsMap from "../sub-components/NewItemsMap";
import NewItemsSkeleton from "../sub-components/NewItemsSkeleton";

const NewItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    window.scrollTo(0, 0);window.scrollTo(0, 0);
    async function fetchAuthorInfo() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`
        );

        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchAuthorInfo();
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

  return <>{loading ? <NewItemsSkeleton/> : <NewItemsMap data={data} responsive={responsive} />}</>;
};

export default NewItems;
