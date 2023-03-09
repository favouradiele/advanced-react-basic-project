import { useState } from "react";

function Feedback({onSubmit}){
    const [score,setScore] = useState("10");
    const [ comment, setComment] = useState("");

    const  isDisabled = Number(score) <= 5 && comment.length <= 10;

const textAreaPlaceholder = isDisabled
? "please provide a comment explaining why the experience was poor."
 : "Optional feedback";

const handleSubmit = (e) => {
    e.preventDefault();
 onSubmit({score, comment});
    
    console.log("form submitted!");
  
}

 return(
    <div>
    <form onSubmit = {handleSubmit}>
       <fieldset>
        <h2>Feedback Form</h2>
        <div className="Field">
<label htmlFor="score">Score:{score}</label>
<input
id="Score"
 value={score} 
 onChange={(e) => {
    setScore(e.target.value)
    }}
type="range"
 min="0" 
 max="10" 
 
 />
<div>
    <div className="Field">
        <label>
            Comment: 
        </label>
        <textarea 
        name="comment"
         placeholder={textAreaPlaceholder} 
         value={comment} 
         onChange={(e) => {setComment(e.target.value)}}/>
    </div>
    <button  disabled={isDisabled} type="submit">submit</button>
</div>

        </div>
       </fieldset>
    </form>
    </div>
)
 
 }

 export default Feedback;
