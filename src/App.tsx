import React from "react";
import { UserContext } from ".";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <UserContext.Consumer>{(value): JSX.Element => <div>Hello {value}</div>}</UserContext.Consumer>
    </div>
  );
};

export default App;
