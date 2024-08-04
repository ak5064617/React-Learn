import React from "react"; //import react means it is coming from node module
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";

/*
    *header
       -logo
       -nav items
    *Body
        -search
        -Returant Card
             - logo
             - name
             - rating
             -
 */
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

















/*
//ReactElement
const headingElement = React.createElement("h1",{id: "heading"},"React Element => object");    // createElement => javascript object
console.log(headingElement)


//component
const JSXheading = <h1 id="heading">JSX heading - this is easier way to write react elements </h1>; // this i also a react Element 


const root = ReactDOM.createRoot(document.getElementById("root"));

const elem= <span>React Element</span>
const staticData = 1000;

//component
    
  const Title = () =>(
     <p> JSX Component</p>
  )  // no need to write retrun beacsue here we are using small bracket
//Functional Component 


 const FunctionalCompoent = () =>{
   return ( <div id="container">
        {elem}
        <Title />
        {staticData}
       <h1> functional component</h1>
    </div>)
 }


console.log("console to check")
root.render(JSXheading);   // it will take react element and it will convert into HTML h1 tag which browser will understand
root.render(<FunctionalCompoent />); 
// root.render(<FunctionalCompoent></FunctionalCompoent>)
// root.render(FunctionalCompoent()); // all above are same 

*/
