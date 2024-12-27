import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
    return (
        <div>
           <div className="logo w-96  mx-auto mt-5">
            <img src={logo} alt="" />
           </div>
           <div className="w-96  mx-auto mt-5 text-center">
            <p className="text-gray-600">The art of letting go</p>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
           </div>
        </div>
    );
};

export default Header;