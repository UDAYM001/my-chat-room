import { useContext } from "react";

import { Context } from "../functions/context";

import ChatWrapper from "./ChatWrapper";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = () => {
  const { user } = useContext(Context);

  return (
    <ChatWrapper>
      <PrettyChatWindow
        projectId= {process.env.REACT_APP_SECRET_KEY}
        username={process.env.REACT_APP_SECRET_KEY} // "admin"
        secret={process.env.REACT_APP_ACCOUNT_SECRET} // "pbkdf2_sha256$320000$nzEFUmjPOroNRTbdHHoFlp$82AkZZd1ZepvhMSIf4UOqoKv+mrYXtL+9PFfEXxLOhw="
        style={{ height: "100%" }}
      />
    </ChatWrapper>
  );
};

export default ChatsPage;
