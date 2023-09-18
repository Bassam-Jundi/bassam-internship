import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-multi-carousel'

function HotCollectionSkeleton() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 767 },
          items: 3,
        },
        smallTablets: {
          breakpoint: { max: 767, min: 550 },
          items: 2,
        },
        phone: {
          breakpoint: { max: 550, min: 0 },
          items: 1,
        },
      };
      
  return (
            <Carousel infinite={true} responsive={responsive}>
              {new Array(6).fill(0).map((elem, index) => (
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  key={index}
                >
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Skeleton height="100%" width="100%" />
                    </div>
                    <div className="nft_coll_pp">
                      <Skeleton circle={true} height={50} width={50} />
                    </div>
                    <div className="nft_coll_info">
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={60} />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
  )
}

export default HotCollectionSkeleton