import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3" >
            <div className="ml-4 rounded-xl bg-[#c3c0e1] mt-10 mb-8 h-20  flex items-center justify-center">
                <h3 className="text-[#6047EC] text-3xl text-center">Spent time on read : {readingTime}</h3>
            </div>
            <div className=" bg-gray-300 ml-4 rounded-xl ">
            <h2 className="text-3xl text-center pt-10 font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            <div className="pb-10">
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
bookmarks: PropTypes.array,
readingTime: PropTypes.number
}
export default Bookmarks;