import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import HotCollectionMap from "../sub-components/HotCollectionMap";
import HotCollectionSkeleton from "../sub-components/HotCollectionSkeleton";

const HotCollections = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            <HotCollectionSkeleton/>
          ):(
            <HotCollectionMap data={data}/>
          ) }
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
