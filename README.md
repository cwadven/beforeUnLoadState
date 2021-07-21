How To Use **beforeUnLoadState**!

### Structure

It checks with array[0] and array[1] is same or different.
If it's different, events `beforeunload`.

`beforeUnLoadState([[value, value], [value, value], ...]);`

### Example

Link : [https://n54nv.csb.app/](https://n54nv.csb.app/ "https://n54nv.csb.app/")

```Javascript
import React, { useState, useRef, useEffect } from "react";
import { beforeUnLoadState } from "react-beforeunload-state";

const prev_content = {
  til: "I Study React Hooks",
  msg: "Star Me!"
};

export default function App() {
  const [til, setTil] = useState("");
  const [msg, setMsg] = useState("");

  const prev_til = useRef("");
  const prev_msg = useRef("");

  // Structure : [[value, value], [value, value], [value, value], ....]
  beforeUnLoadState([
    [prev_til.current, til],
    [prev_msg.current, msg]
  ]);

  // ComponentDidMount
  useEffect(() => {
    const { til: init_til, msg: init_msg } = prev_content;

    // initialize value from some responses
    setTil(init_til);
    setMsg(init_msg);
    prev_til.current = init_til;
    prev_msg.current = init_msg;
  }, []);

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
