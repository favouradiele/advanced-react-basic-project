import { useState } from "react";

function Form(){
    const [name, setName] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("form submitted");
   };

   return(
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="Field">
                    <label htmlFor="name">Name:</label>
                    <input id="name" placeholder="Name"  type="text" name="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <button disabled ={!name} type="submit">
                    submit
                </button>
            </fieldset>
        </form>
    </div>
   );

}

export default Form;