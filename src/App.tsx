import { useEffect } from "react";
const connect = () => console.log("Connecting to server");
const disconnect = () => console.log("Disconnecting from server");

function App() {
  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  });

  return <></>;
}

export default App;
