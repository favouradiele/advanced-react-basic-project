
import { useEffect, useState } from "react";


const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
    x : e.clientX,
    y:  e.clientY,
  })
    

    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({mousePosition});
};

// This component should not receive any props
const PanelMouseLogger = () => {
  
  return (
    <div>

   
  <p>Mouse position:</p>
  <MousePosition
    
  render={({mousePosition}) => (
  <div>
    

  <p>
    <span>x: {mousePosition.x}</span>, 
    <br></br>
      <span>y: {mousePosition.y}</span>
   
      
    </p> 
     </div>)}/>
 
    
      
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
return( <MousePosition
 render ={({mousePosition}) => (<p>X: {mousePosition.x},  Y:  {mousePosition.y}</p>)}
 
 />)
};

function Rpp() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger/>
    </div>
  );
}

export default Rpp;
