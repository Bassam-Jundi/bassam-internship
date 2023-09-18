import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function ItemDetailSkeleton({ ethImage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                {<Skeleton height={624} width={456} />}
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{<Skeleton height={50} width={350} />}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {<Skeleton height={10} width={20} />}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {<Skeleton height={10} width={20} />}
                    </div>
                  </div>
                  <p>{<Skeleton height={100} width={450} />}</p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            {<Skeleton circle={true} height={50} width={50} />}
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">
                            {<Skeleton height={50} width={250} />}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            {<Skeleton circle={true} height={50} width={50} />}
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">
                            {<Skeleton height={50} width={250} />}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={ethImage} alt="" />
                      <span>{<Skeleton height={50} width={70} />}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ItemDetailSkeleton;
