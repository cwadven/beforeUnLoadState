How To Use **beforeUnLoadState**!

### Structure

`beforeUnLoadState([[curValue, prevValue], [curValue, prevValue], ...]);`

### Example

Link : [https://n54nv.csb.app/](https://n54nv.csb.app/ "https://n54nv.csb.app/")

```Javascript
import React, { useState } from "react";
import { beforeUnLoadState } from "react-beforeunload-state";

export default function App(props) {
  const [til, setTil] = useState("");
  const [msg, setMsg] = useState("");

  // Structure : [[curValue, prevValue], [curValue, prevValue], [curValue, prevValue], ....]
  beforeUnLoadState([
    [til, til],
    [msg, msg]
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
