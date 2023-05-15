import React from "react";
import { useMessage } from "../hooks/useMessage";

const ChatForm = () => {
  const { handleSubmit, handleInputChange, messageInput, client, isValid } =
    useMessage();

  return (
    <>
      <h2>Chat GraphQL</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label"> Client: {client} </label>
        </div>

        <div>
          <label className="form-label"> Message </label>
          <input
            value={messageInput}
            onChange={handleInputChange}
            className="form-control w-50"
            type="text"
          />
        </div>

        <button
          disabled={!isValid}
          className="btn btn-success my-3 fw-bold w-50"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ChatForm;
