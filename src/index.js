import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  < BrowserRouter>
    <Suspense fallback={<div />}>
      <App/>
    </Suspense>   
  </BrowserRouter>,
  document.getElementById("root")
); 
reportWebVitals();
