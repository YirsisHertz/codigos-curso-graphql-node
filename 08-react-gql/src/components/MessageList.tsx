import React from "react";

import { v4 as uuid } from "uuid";

import { useMessage } from "../hooks/useMessage";
import Message from "./Message";

const MessageList = () => {
  const { messages } = useMessage();

  return (
    <>
      <h3>Message List</h3>
      {messages.length > 0 &&
        messages.map((message) => (
          <div key={uuid()}>
            <Message message={message} />
          </div>
        ))}
    </>
  );
};

export default MessageList;
