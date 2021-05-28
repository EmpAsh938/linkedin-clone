import SideProfile from "./SideProfile";
import Feed from "./Feed";
const AppBody = ({ username, photo }) => {
  return (
    <div className="appbody">
      <SideProfile username={username} photo={photo} />
      <Feed username={username} photo={photo} />
    </div>
  );
};

export default AppBody;
