// import { useState } from "react";

// //uncontrolled inputs/forms
// const Form1 = () => {
//     return (
//         <div>
//             <input type = "text" />
//         </div>
//     );
// };

// //how ref is used to access the value of the input whenever the form is submitted 

// const Form = () => {
//     const inputRef = useRef(null);

//     const handleSubmit = () => {
//         const inputValue = inputRef.current.value;
//         // Do something with the value
//         // refer to for creation of  react calculator
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input  ref={inputRef} type='text'/>
//         </form>
//     )
// }

// //contolled inputs

// const Form = () => {
//     const [value, setValue] = useState("");

//     const handleChange = (e) => {
//         setValue(e.target.value)
//     };

//     return (
//         <form>
//             <input type="text" onChange={handleChange} value={value}/>
//         </form>
//     )
// };