import React from "react";

interface Props {
  username: string;
}

const App: React.FC<Props> = (props: Props): JSX.Element => {
  return <div>Hello {props.username}</div>;
};

export default App;
