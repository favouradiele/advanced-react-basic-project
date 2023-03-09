import React  from "react";

function  Ue(){
    const[toggle, setToggle] = React.useState(false);


    const clickHandler = () => {
        setToggle(!toggle);
    }

    React.useEffect(() => {
        document.title = toggle ? "Welcome to little Lemon" : "Using the useEffect hook"
    }, [toggle]);

return(
    <div>
    <h1>using the use effect hook</h1>
    <button onClick={clickHandler}>
        Toggle Message
    </button>
    {toggle && <h2>Welcome to little lemon</h2>}
    </div>
)


}
export default Ue;