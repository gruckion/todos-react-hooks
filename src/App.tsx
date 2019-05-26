import React from "react";

interface Props {
  username: string;
}

const App: React.FC<Props> = ({ username }: Props): JSX.Element => {
  return <div>Hello {username}</div>;
};

export default App;
