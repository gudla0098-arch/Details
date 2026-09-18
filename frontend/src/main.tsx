import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const columns = [
  [167, 0.2, 0.55, 2.5], [334, 0.3, 0.70, 2],
  [501, 0.4, 0.70, 2], [668, 0.6, 0.70, 3],
  [835, 0.4, 0.70, 2], [1002, 0.3, 0.70, 2],
  [1169, 0.2, 0.55, 2.5]
];

function Desktop4() {
  return <main className="desktop" data-node-id="2:108">
    <div className="figma-frame" data-node-id="2:109">
      <p className="figma-label">portfilo</p>
      <div className="edge left-bottom" />
      <div className="edge left-top" />
      {columns.map(([left, tint, opacity, blur]) => <React.Fragment key={left}>
        <div className="panel bottom" style={{left, opacity, background:`linear-gradient(to bottom,rgba(228,228,228,${tint}),rgba(126,126,126,${tint}))`}} />
        <div className="panel top" style={{left, opacity, filter:`blur(${blur}px)`, background:`linear-gradient(to bottom,rgba(228,228,228,${tint}),rgba(126,126,126,${tint}))`}} />
      </React.Fragment>)}
      <div className="edge right-bottom" />
      <div className="edge right-top" />
    </div>
  </main>;
}

createRoot(document.getElementById("root")!).render(<Desktop4 />);