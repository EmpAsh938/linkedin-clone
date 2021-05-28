import { useDispatch } from "react-redux";
import { auth } from "../firebase";

import { signOut } from "../redux/postSlice";
import "./Icon.css";

const Icon = ({ title, DefaultIcon, profileImage }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(signOut());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="icon">
      {!profileImage ? (
        <DefaultIcon className="icon__list" />
      ) : (
        <div className="icon__profile">
          <img src={profileImage} alt="profile" className="icon__image" />
          <div className="icon__signout">
            <button onClick={handleSignOut}>SignOut</button>
          </div>
        </div>
      )}
      <h3 className="icon__title">{title}</h3>
    </div>
  );
};

export default Icon;
