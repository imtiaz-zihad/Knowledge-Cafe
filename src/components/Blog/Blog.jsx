import PropTypes from "prop-types"; // ES6
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog ,handleAddToBookmark,handleMarkAsRead }) => {
  console.log(blog);
  const {
    title,
    cover,
    author,
    reading_time,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full h-96 rounded-md"
        src={cover}
        alt={`cover picture of ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-2xl text-blue-500">
          <span>{reading_time} min read</span>
          <button onClick={()=> handleAddToBookmark(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="text-blue-400 ">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
      onClick={() =>handleMarkAsRead(reading_time)}
       className="text-purple-800 font-bold underline">mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;
