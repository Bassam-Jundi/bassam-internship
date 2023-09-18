import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function TopSellersSkeleton() {
  return (
    <>
      {new Array(12).fill(0).map((_, index) => (
        <li key={index}>
          <div className="author_list_pp">
            <Link to="/author">
              {<Skeleton circle={true} height={50} width={50} />}
            </Link>
          </div>
          <div className="author_list_info">
            <Link to="/author"><Skeleton height={20} width={100}/></Link>
            <span><Skeleton height={15} width={50}/></span>
          </div>
        </li>
      ))}
    </>
  );
}

export default TopSellersSkeleton;
