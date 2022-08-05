import { useContext } from "react";

import { Context } from "../functions/context";

import ChatWrapper from "./ChatWrapper";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = () => {
  const { user } = useContext(Context);

  return (
    <ChatWrapper>
      <PrettyChatWindow
        projectId="5d498a31-cd23-42b7-b367-4fcc9463bd2f"
        username={user.username} // "admin"
        secret={user.secret} // "pbkdf2_sha256$320000$nzEFUmjPOroNRTbdHHoFlp$82AkZZd1ZepvhMSIf4UOqoKv+mrYXtL+9PFfEXxLOhw="
        style={{ height: "100%" }}
      />
    </ChatWrapper>
  );
};

export default ChatsPage;
