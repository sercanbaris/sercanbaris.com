import { useState } from "react";

export default function Olay() {
  const [count, setCount] = useState(0);
  function handleClick2() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick2}>{count} defa tıklandı</button>
    </>
  );
}
