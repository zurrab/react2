import React from "react";
import Header from "./Header"; 
import ReactDOM from "react-dom/client";

class App extends React.Component {
    render() {
        return (
            <Header></Header>
        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
