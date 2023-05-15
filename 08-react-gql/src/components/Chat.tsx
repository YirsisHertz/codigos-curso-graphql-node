import React from "react";

import { useMessage } from "../hooks/useMessage";
import ChatForm from "./ChatForm";
import Loading from "./Loading";
import MessageList from "./MessageList";

const Chat = () => {
  const { error, loading } = useMessage();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="row">
        <div className="col-6">
          <ChatForm />
        </div>
        <div className="col-6">
          <MessageList />

          {loading && <Loading />}
        </div>
      </div>
    </>
  );
};

export default Chat;
