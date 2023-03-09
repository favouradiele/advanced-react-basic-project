import { useEffect, useState } from "react"

const DataFetcher = ({render, url} ) => {
    const [data, setData] = useState([]);



useEffect(() => {
    if (url.includes("desserts")){
        setData(["cake", "ice cream", "Pie", "brownie"]);
    }else {
        setData(["water", "soda", "juice"]);
    }
}, []);

return render(data);
};

const DessertsCount = () => {
    return (
        <DataFetcher
        url="https://littlelemon/desserts"
        render={(data) => <p>{data.length} desserts</p>}
    />
        )
};

const DrinksCount = () => {
    return(
        <DataFetcher
        url="https://littlelemon/drinks"
        render={(data) => <h3>{data.length} drinks</h3>}
/>
   );
};

function Render (){
    return(
        <div>
            <header>
                Little Lemon Resturant
                <DessertsCount/>
                <DrinksCount/>
            </header>
        </div>
    )
}

export default Render;