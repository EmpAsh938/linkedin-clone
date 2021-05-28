import { useSelector } from "react-redux";
import SideProfile from "./SideProfile";
import Feed from "./Feed";
const AppBody = () => {
  const { fullName, profilePic, email } = useSelector(
    (state) => state.posts.creds
  );
  return (
    <div className="appbody">
      <SideProfile username={fullName} photo={profilePic} email={email} />
      <Feed username={fullName} photo={profilePic} />
    </div>
  );
};

export default AppBody;
