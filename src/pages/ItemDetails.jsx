import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDetailMap from "../components/sub-components/ItemDetailMap";
import ItemDetailSkeleton from "../components/sub-components/ItemDetailSkeleton";

const ItemDetails = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItemDetail() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`
        );
        setItemDetail(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchItemDetail();
  }, [id]);

  return (
    <>
      {loading ? (
        <ItemDetailSkeleton itemDetail={itemDetail} ethImage={EthImage} />
      ) : (
        <ItemDetailMap data={itemDetail} ethImage={EthImage} />
      )}
    </>
  );
};

export default ItemDetails;
