import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExploreItemsSkeleton from "../sub-components/ExploreItemsSkeleton";
import ExploreItemsMap from "../sub-components/ExploreItemsMap";
import axios from "axios";

const ExploreItems = () => {
  const [exploreItemsData, setExploreItemsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [renderLoadMore, setRenderLoadMore] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    async function fetchExploreItems() {
      try {
        let apiUrl = `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore`;
        if (selectedFilter) {
          apiUrl += `?filter=${selectedFilter}`;
        }

        const { data } = await axios.get(apiUrl);
        setExploreItemsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchExploreItems();
  }, [selectedFilter]);

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(event) => setSelectedFilter(event.target.value)}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? <ExploreItemsSkeleton /> : <ExploreItemsMap exploreItemsData={exploreItemsData} renderLoadMore={renderLoadMore} />}
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" onClick={() => setRenderLoadMore((prevRenderLoadMore) => prevRenderLoadMore + 4)}>
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
