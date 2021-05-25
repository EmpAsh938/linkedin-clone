import Search from "@material-ui/icons/Search";

import Icon from "./Icon";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__left">
          <img src="/images/logo.jpg" alt="linkedin logo" />
          <form className="header__form">
            <input type="text" />
            <Search className="header__search" />
          </form>
        </div>
        <div className="header__right">
          {/* Icons  */}
          <Icon title="Home" />
          <Icon title="MyNetwork" />
          <Icon title="Jobs" />
          <Icon title="Messaging" />
          <Icon title="Notifications" />
          <Icon title="Me" />
          <Icon title="Work" />
        </div>
      </div>
    </div>
  );
};

export default Header;
