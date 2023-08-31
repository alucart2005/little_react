import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Card } from "./components/Card";
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card />
    <Card estate={true}/>
    <Card estate={false}/>
    <Card estate={true}/>
    <Card estate={false}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
