import { useSelector } from "react-redux";

import "./SideProfile.css";

const SideProfile = ({ username, photo }) => {
  const user = useSelector((state) => state.posts.creds);
  return (
    <div className="sideprofile">
      <div className="sideprofile__top">
        <div className="sideprofile__bg">
          <img src={photo || "/images/avatar.jpeg"} alt="profile" />
        </div>
        <div className="sideprofile__title">
          <h2>{user.fullName || username}</h2>
          <h4 className="sideprofile__text">{user.email}</h4>
        </div>
        <div className="sideprofile__stats">
          <div>
            <p className="sideprofile__text">Who viewed you</p>
            <span>1000</span>
          </div>
          <div>
            <p className="sideprofile__text">Views on post</p>
            <span>10000</span>
          </div>
        </div>
      </div>
      <div className="sideprofile__bottom">
        <h3>Recent</h3>
        <div className="sideprofile__highlights">
          <p>
            <span>#</span> ReactJS
          </p>
          <p>
            <span>#</span> NodeJS
          </p>
          <p>
            <span>#</span> Vanilla JS
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
