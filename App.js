


import Ue from './LessonOnHooks/useEffect'
import logo from './logo.svg';
import Rpp from './week3/Mouseprac';
import FeedbackForm from './week3/FeedbackForm';
import Render from './week3/RenderProps';
import Radio from './week3/radioComponentLab';
import Hoc from './week3/HOC';
import keys from './files/keys';
import LiveOrders from './week3/children';
//import Fetch from './LessonOnHooks/fetchData';
import Ur from './LessonOnHooks/useRef';
import DessertsList from './DessertsList';
import Form from './files/controlled form';
import CustomHook2 from './LessonOnHooks/customHooks2';
import './App.css';
import Root from './files/contextApi1'
import Compostion from './week3/compositonComponent';
//import Bap from './LessonOnHooks/useState';
import Fit from './LessonOnHooks/useState'
import Dapp from './files/stateLab';
import { useState } from 'react';
import FetchLab from './files/App(1)';
import Feedback from './files/feedback';
import Two from './LessonOnHooks/fetchData2';
import Spread from './week3/spreadOperator';
//import Us from './LessonOnHooks/useState';



const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const ToDo = props => (

  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);




function App() {
const [todos, setTodos] = useState([{

  id: 'todo1',
  createdAt: '15:00',
}, {

 id: 'todo2',
  createdAt: '19:00',
}]);

const handleSubmit = () => {
  console.log("Form submitted!");
};



const reverseOrder = () => {
  //Reverse is a mutative operation, so we need to create a new array first.
  setTodos([...todos].reverse());
   
}

//first example with keys, show browser  console to see the warning
return (
  <div>
    <button onClick={reverseOrder}>Reverse</button> 
    <table>
      <tbody>
        {todos.map((todo) => (
          <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
        ))}
      </tbody>
    </table>
     <div>
      
     </div>
     <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
    <div>
<Form/>
<Feedback/>
<Root/>
<Spread/>
<Fit/>
<LiveOrders/>
<Dapp/>
<CustomHook2/>
<Ue/>
<FeedbackForm onSubmit={handleSubmit} />
<Ur/>
<Compostion/>
<Two/>
<Radio/>
<Rpp/>
<FetchLab/>
<Hoc/>
<Render/>

    </div>
  </div>

)  

};

export default App;
