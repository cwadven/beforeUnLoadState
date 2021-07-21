How To Use **beforeUnLoadState**!

### Structure

`beforeUnLoadState([[val, setState], [val, setState], ...]);`

### Example

Link : [https://n54nv.csb.app/](https://n54nv.csb.app/ "https://n54nv.csb.app/")

```Javascript
import React, { useState } from "react";
import { beforeUnLoadState } from "react-beforeunload-state";

export default function App(props) {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  // Structure : [[curValue, prevValue], [curValue, prevValue], [curValue, prevValue], ....]
  usePreventLeave([
    [email, email],
    // why I used email becasuse it doesnt change it has previous value
    [email2, email2]
  ]);

  return (
    <div className="App">
      <div>
        <p>TIL(Today I Learned)</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <p>Message Send</p>
        <input value={email2} onChange={(e) => setEmail2(e.target.value)} />
      </div>
    </div>
  );
}


```
