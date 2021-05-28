import "./DummyButton.css";
const DummyButton = ({ title, Icon }) => {
  return (
    <div className="dummybutton">
      <Icon className="dummybutton__icon" />
      {title && <p className="dummybutton__title">{title}</p>}
    </div>
  );
};

export default DummyButton;
