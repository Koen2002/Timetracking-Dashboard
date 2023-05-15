import "./App.css";
import image from "./image-jeremy.png"
import icon from "./icon-ellipsis.svg"

function BackGround(props) {
  return <div className="background">{props.children}</div>
}

function ProfileTemp() {
  return <div className="profile-temp">
    <img src={image} className="profile-img" alt="" />
    <div className="profile-text">
      <p className="regular-text">Report for</p>
      <h1 className="header-profile">Jermey Robson</h1>
    </div>
  </div>
}

function ProfileSelect() {
  return <div className="profile-select">
    <p className="regular-text">Daily</p>
    <p className="regular-text">Weekly</p>
    <p className="regular-text">Monthly</p>
  </div>
}

function IconTemplate(props) {
  return <div className={`icon-template ${props.className}`}>{props.children}</div>
}

function MainTemplate(props) {
  return <div className="main-template">{props.children}</div>
}

function App() {
  return <BackGround>
    <ProfileTemp></ProfileTemp>
    <ProfileSelect></ProfileSelect>
    <IconTemplate className="color-template-work"></IconTemplate>
    <MainTemplate>
      <div className="content-top">
        <p className="medium-text">Work</p>
        <img src={icon} className="icon" alt="" />
      </div>
      <div className="content-bottom">
        <p className="hours-text">32hrs</p>
        <p className="regular-text">Last Week - 36hrs</p>
      </div>
    </MainTemplate>
    <IconTemplate className="color-template-play"></IconTemplate>
    <MainTemplate>
      <div className="content-top">
        <p className="medium-text">Play</p>
        <img src={icon} className="icon" alt="" />
      </div>
      <div className="content-bottom">
        <p className="hours-text">10hrs</p>
        <p className="regular-text">Last Week - 36hrs</p>
      </div>
    </MainTemplate>
    <IconTemplate className="color-template-study"></IconTemplate>
    <MainTemplate>
      <div className="content-top">
        <p className="medium-text">Study</p>
        <img src={icon} className="icon" alt="" />
      </div>
      <div className="content-bottom">
        <p className="hours-text">4hrs</p>
        <p className="regular-text">Last Week - 7hrs</p>
      </div>
    </MainTemplate>
  </BackGround>;
}

export default App;
