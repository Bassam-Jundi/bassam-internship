import { Link } from 'react-router-dom'

function TopSellersMap({ data }) {

  return (
    <>
    {data.map((data, index) => (
        <li key={index}>
          <div className="author_list_pp">
            <Link to="/author">
              <img
                className="lazy pp-author"
                src={data.authorImage}
                alt=""
                />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          <div className="author_list_info">
            <Link to="/author">{data.authorName}</Link>
            <span>{data.price} ETH</span>
          </div>
        </li>
      ))}
      </>
  )
}

export default TopSellersMap