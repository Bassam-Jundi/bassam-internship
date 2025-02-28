import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function AuthorItemsMap() {
  const [authorPosts, setAuthorPosts] = useState([])
  const [authorPostsProfile, setAuthorPostsProfile] = useState([])
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchAuthorPosts() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
        );
        setAuthorPosts(data);
        setAuthorPostsProfile(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchAuthorPosts();
}, []);


  return (
    <div className="container">
    <div className="de_tab_content">
    <div className="tab-1">
      <div className="row">
        {authorPosts.nftCollection?.map((data, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
            <div className="nft__item">
              <div className="author_list_pp">
                <Link to={`/author/${authorPostsProfile.authorId}`}>
                  <img className="lazy" src={authorPosts.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
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
                <Link to={`/item-details/${data.nftId}`}>
                  <img
                    src={data.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${data.nftId}`}>
                  <h4>{data.title}</h4>
                </Link>
                <div className="nft__item_price">{data.price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{data.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
  )
}

export default AuthorItemsMap