import valley from "../assets/valley.jpeg";

import { useIsMobile } from "../hooks/isMobile";

const ChatWrapper = (props) => {
  const isMobile = useIsMobile();

  const backgroundImage = {
    backgroundImage: `url(${valley})`, // Here due to variable
  };
  const container = {
    position: "relative",
    top: isMobile ? "0px" : "10vh",
    left: isMobile ? "0px" : "calc(50vw - 3vw - 1.5vw - 35vw)",
    height: isMobile ? "100vh" : "80vh",
    width: isMobile ? "100vw" : "calc(100vw - 10.5vw - 10.5vw)",
    backgroundColor: "grey",
  };

  return (
    <div className="background-image" style={backgroundImage}>
      <div className="background-gradient-light">
        <div style={container}>{props.children}</div>
      </div>
    </div>
  );
};

export default ChatWrapper;
