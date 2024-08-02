
const heading = React.createElement("h1",{},"CDN React element");    // react Element => javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("console to check 2")
root.render(heading);   // it will take react element and it will convert into h1 tag which browser will understand