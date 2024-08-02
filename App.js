
import React from "react";  //import react means it is coming from node module 
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"CDN React element for intiate two");    // react Element => javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("console to check 2")
root.render(heading);   // it will take react element and it will convert into h1 tag which browser will understand