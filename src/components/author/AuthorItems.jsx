import React, { useEffect, useState } from "react";
import AuthorItemsMap from "../sub-components/AuthorItemsMap";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthorInfoSkeleton from "../sub-components/AuthorInfoSkeleton";
import AuthorInfoMap from "../sub-components/AuthorInfoMap";
import AuthorItemsSkeleton from "../sub-components/AuthorItemsSkeleton";

const AuthorItems = () => {
  const [authorPosts, setFetchAuthorPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchAuthorPosts() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
        );

        setFetchAuthorPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchAuthorPosts();
  }, []);

  return (
    <>
      {loading ? <AuthorInfoSkeleton /> : <AuthorInfoMap />}

      {loading ? <AuthorItemsSkeleton /> : <AuthorItemsMap />}
    </>
  );
};

export default AuthorItems;
