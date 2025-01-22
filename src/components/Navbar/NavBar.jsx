import { Link } from "react-scroll";
import { logo } from "../../assets/images/index";
import { navLinksdata } from "../../constants/index";

const NavBar = () => {
  return (
    <div className="w-full h-14 mx-auto flex justify-between items-center font-titleFont">
      {/* Logo and Title Section */}
      <div className="flex items-center">
        <div>
          <img src={logo} alt="logo" className="w-auto" />
        </div>
        <div className="ml-4 text-xl font-bold">
          <h1>Jabin Tasmin Anny</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-10">
          {navLinksdata.map((navlink) => (
            <li key={navlink._id} className="text-lightText font-semibold hover:text-colorfulText duration-500">
              <Link 
              activeClass="active"
              to={navlink.link}
              spy = {true}
              smooth = {true}
              offset={-70}
              duration={500}
              >{navlink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
