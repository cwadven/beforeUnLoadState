How To Use **beforeUnLoadState**!

### Structure

`beforeUnLoadState([[val, setState], [val, setState], ...]);`

### example

```Javascript
import React, { useEffect, useState } from "react";
import { beforeUnLoadState } from "react-beforeunload-state";

export default function App() {
  const [til, setTil] = useState("123");
  const [msg, setMsg] = useState("");

  // Structure : [[val, setState], [val, setState], [val, setState], ....]
  // each array items -> [value, stateValue -> need to send setting function]
  // More Detail
  // [to check if different with state, to check state value at setState]
  beforeUnLoadState([
    ["123", setTil],
    // why I used email becasuse it doesnt change it has previous value
    [msg, setMsg]
  ]);

  return (
    <div className="App">
      <div>
        <p>TIL(Today I Learned)</p>
        <input value={til} onChange={(e) => setTil(e.target.value)} />
      </div>
      <div>
        <p>Message Send</p>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      </div>
    </div>
  );
}

```
