import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";
import TopSellersMap from "../sub-components/TopSellersMap";
import TopSellersSkeleton from "../sub-components/TopSellersSkeleton";

const TopSellers = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItemDetail() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers`
        );
        setTopSeller(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchItemDetail();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {loading ? (
                <TopSellersSkeleton />
              ) : (
                <TopSellersMap data={topSeller} />
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
