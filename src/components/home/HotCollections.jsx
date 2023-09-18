import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import HotCollectionMap from "../sub-components/HotCollectionMap";
import HotCollectionSkeleton from "../sub-components/HotCollectionSkeleton";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
        );
        setCollections(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); // Store the error message
        setIsLoading(false);
      }
    }
    fetchCollections();
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
            <HotCollectionSkeleton />
          ) : error ? (
            <div className="error-message">Error: {error}</div>
          ) : (
            <HotCollectionMap data={collections} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
