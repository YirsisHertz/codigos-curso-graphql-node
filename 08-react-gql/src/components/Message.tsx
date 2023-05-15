import React from "react";

const Message = ({ message }: any) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title"> {message?.text} </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {message?.to}
        </h6>
        <span className="card-link">{message?.from}</span>
        <span className="card-link">{message?.createdAt}</span>
      </div>
    </div>
  );
};

export default Message;
