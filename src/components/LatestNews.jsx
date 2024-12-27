import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const LatestNews = () => {
return (
    <NavLink to="/latest-news">
        <div className="flex justify-around text-center items-center border-solid border-2 border-gray-300 p-5 mx-5">
            <p className="bg-red-700 text-white px-3 py-2">Latest</p>
                <Marquee>
                    I can be a React component, multiple React components, or just some
                    text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolores accusantium quisquam quod quaerat quam dolorem vero soluta provident qui.
                </Marquee>
        </div>
    </NavLink>
);
};

export default LatestNews;
