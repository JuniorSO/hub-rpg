import { useState } from "react";

const HomePage = () => {
  const [title, setTitle] = useState("Escreva algo na caixa");
  return (
    <div>
      <h1>{title}</h1>
      <input onChange={(event) => setTitle(event.target.value)}></input>
    </div>
  );
};

export default HomePage;
