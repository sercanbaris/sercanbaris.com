import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Ayrı ayrı güncellenen butonlar</h1>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>{count} defa tıklandı</button>;
}
