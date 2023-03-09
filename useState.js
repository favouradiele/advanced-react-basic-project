import React from "react"

function GoalForm(props){
    const[formData, setFormData] =React.useState({goal:"", by:""});

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
     
    function submitHandler(e){
       e.preventDefault();
       props.onAdd(formData);
       setFormData({goal: " ", by: " "});

    };

    return(
        <>
        <h1>My little Lemon Goals</h1>
        <form onSubmit={ submitHandler} >
            <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
            <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>submit</button>
        </form>
        </>
    );


};

function ListOfGoals(props) {
return(
    <ul>
      {props.allGoals.map((g) => (
        <li>
            <span>My Goal is to {g.goal}, by{g.by}</span>
        </li>
      ))}  ;
    </ul>
);

};
   

export default function Fit() {
    const[allGoals, updateAllGoals ] = React.useState([]);

function addGoal(goal){updateAllGoals([...allGoals, goal])};
return(
    <div>
        <GoalForm onAdd={addGoal}/>
        <ListOfGoals allGoals={allGoals}/>
    </div>
    )
}


//import { useState } from "react";


// export default function Us(){
//     const [resturantName, setResturantName] = useState("Lemon");
//     console.log(resturantName);
// function updateResturantName() { setResturantName('Little Lemon')};
//     return (
//         <div>
//             <h1>{resturantName}</h1>
//             <button onClick = {updateResturantName}>
//                 update Resturant Name
//             </button>

          
//         </div>
        
//     );
// }


//it is better to use the spread opreator to update state 

// state changes occur usually because of user events 

//example of spread to update

// export default function  Bap (){
//     const[greeting, setGreeting] = useState({greet: "Hello, World"});


// function updateGreeting() {
//     const newGreeting = {...greeting};
//     newGreeting.greet = "Hello, World-Wide Web"
//  setGreeting(newGreeting);
// }
// return(
//     <div>
//         <h1>{greeting.greet}</h1>
//         <button onClick={updateGreeting}>update Greeting</button>
//     </div>
// )

// }


