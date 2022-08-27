import React, { useState } from "react";
import Header from "../components/header";
import Question from "../components/question";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const Home = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  const handleSubmit = () => {
    fetch("/api/runcode", {
      method: "POST",
      body: JSON.stringify({
        code: code,
      }),
    })
      .then((x) => x.json())
      .then((res) => console.log(res));
  };

  return (
    <main>
      <Header />
      <div className="flex flex-col h-full md:flex-row">
        <div className="md:w-1/2">
          <Question
            input="1"
            output="1"
            title="Title of problem."
            imageUrl="/Logo.svg"
            problem="Given pointers to the head nodes of  linked lists that merge together at some point, find the node where the two lists merge. The merge point is where both lists point to the same node, i.e. they reference the same memory location. It is guaranteed that the two head nodes will be different, and neither will be NULL. If the lists share a common node, return that node's  value."
          />
        </div>
        <div className="mx-6 mt-8 h-64 border-4 rounded md:w-1/2 md:h-auto">
          <Editor
            className="h-full"
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
            }}
          />
          <button onClick={handleSubmit}>Run</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
