import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function AuthorInfoSkeleton() {
  return (
    <>
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex">
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <Skeleton circle={true} height={150} width={150} />

                    <div className="profile_name">
                      <h4>
                        <Skeleton height={20} width={60} />
                        <span className="profile_username">
                          <Skeleton height={20} width={130} />
                        </span>
                        <span id="wallet" className="profile_wallet">
                          <Skeleton height={30} width={200} />
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                    <div className="profile_follower">
                      <Skeleton height={20} width={60} />
                      followers
                    </div>
                    <Link to="#" >
                      {<Skeleton className="btn-main"height={42} width={132} />}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthorInfoSkeleton;
