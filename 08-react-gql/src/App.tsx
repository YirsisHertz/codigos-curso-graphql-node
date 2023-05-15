import React from "react";
import Header from "./components/Header";
import CounterQM from "./components/CounteQM";
import CounterIncrementWS from "./components/CounterIncrementWS";
import Chat from "./components/Chat";

const App = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <Chat />

        {/* <CounterQM />
        <hr />
        <CounterIncrementWS /> */}
      </div>
    </>
  );
};

export default App;
