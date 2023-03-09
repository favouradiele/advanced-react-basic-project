import React from "react";

function Ur(){
    const formInputRef = React.useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();

    }
return(
    <>
    <h1>Using useRef to access underlying Dom</h1>
    <input ref={formInputRef} type="text"/>
    <button onClick={focusInput}>
        focus Input
    </button>
    </>
)

};

export default Ur;