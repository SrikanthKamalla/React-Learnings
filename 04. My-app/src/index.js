import React, { useState, Component } from "react";
import ReactDOM from "react-dom/client";
import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";
import UseRefHook from "./UseRefHook";
import UseCallbackHook from "./UseCallbackHook";
import UseContextHook from "./UseContextHook";

const root = ReactDOM.createRoot(document.getElementById("app"));

// class Component
//
// class Counter extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
//     increment = () => {
//       this.setState({ count: this.state.count + 1 });
//     };
//  ;
//     render() {
//       return (
//         <div>
//           <h2>Count: {this.state.count}</h2>
//           <button onClick={this.increment}>➕ Increment</button>
//         </div>
//       );
//     }
//   }

// useState
//
// root.render(<UseStateHook />);

//useEffect
//
// function unmount() {
//   root.render(<p>Component unmounted</p>);
// }
// root.render(
//   <div>
//     <App />
//     <button onClick={unmount}>Unmount App Component </button>
//   </div>
// );

//useRef
// root.render(<UseRefHook />);

//useCallback hook
// root.render(<UseCallbackHook />);

// useCallbackHook hook
root.render(<UseContextHook />);
