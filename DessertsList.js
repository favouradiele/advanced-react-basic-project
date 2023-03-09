function DessertsList(props) {
  const lowCaloriesDesserts = props.data.filter((dessert) => { return(dessert.calories< 500)
  }).sort((a, b) => {
    return a.calories - b.calories 
  }).map((dessert) => {
  return(
    <ul>
      <li>
        {dessert.name} - {dessert.calories} cal
      </li>
    </ul>
  );
});
return <ul>{lowCaloriesDesserts}</ul>;
}
export default DessertsList;
