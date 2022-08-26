import React, { useState } from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css"; //Example style, you can use another

const Home = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <>
      {/* <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js, "javascript")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      /> */}
      <h1 className="text-lg text-blue-100">working?</h1>
    </>
  );
};

export default Home;
