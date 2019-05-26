import React, { useContext } from "react";
import { UserContext } from ".";

const App: React.FC = (): JSX.Element => {
  const username = useContext(UserContext);

  return <div>Hello {username}</div>;
};

export default App;
