import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaSearch, FaHome, FaSuitcaseRolling } from "react-icons/fa";
import { BsPeopleFill, BsPeopleCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";

import Icon from "./Icon";
import "./Header.css";

const Header = ({ username, photo }) => {
  const user = useSelector((state) => state.posts.creds);
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__left">
          <Link to="/">
            <img src="/images/logo.jpg" alt="linkedin logo" />
          </Link>
          <form className="header__form">
            <input type="text" />
            <FaSearch className="header__search" />
          </form>
        </div>
        <div className="header__right">
          <Icon title="Home" DefaultIcon={FaHome} />
          <Icon title="My Network" DefaultIcon={BsPeopleFill} />
          <Icon title="Jobs" DefaultIcon={FaSuitcaseRolling} />
          <Icon title="Notifications" DefaultIcon={IoMdNotifications} />
          <Icon
            title={user.fullName || username}
            DefaultIcon={BsPeopleCircle}
            profileImage={photo}
          />
          <Icon title="Work" DefaultIcon={CgMenuGridR} />
        </div>
      </div>
    </div>
  );
};

export default Header;
