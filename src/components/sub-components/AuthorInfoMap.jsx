import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


function AuthorInfoMap() {
    const [authorInfo, setAuthorInfo] = useState([])
    const [clicked, setClicked] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchAuthorInfo() {
          try {
            const { data } = await axios.get(
              `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
            );
  
            setAuthorInfo(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchAuthorInfo();
    }, []);

    function followed() {
        const updatedFollowers = clicked ? authorInfo.followers - 1 : authorInfo.followers + 1;
        setAuthorInfo((prevInfo) => ({
          ...prevInfo,
          followers: updatedFollowers,
        }));
    
        setClicked(!clicked);
      }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${`https://nft-marketplacee.web.app/static/media/author_banner.3461d4a43582732aed21.jpg`}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorInfo.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorInfo.authorName}
                          <span className="profile_username">@{authorInfo.tag}</span>
                          <span id="wallet" className="profile_wallet">
                          {authorInfo.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{authorInfo.followers} followers</div>
                      <Link to="#" className="btn-main" onClick={followed}>
                        {clicked ? 'Unfollow' : 'Follow'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AuthorInfoMap