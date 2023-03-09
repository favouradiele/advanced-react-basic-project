import { useEffect, useState } from "react";

export default function Fetch(){
    const [btcData, setBtcData] = useState({});

    const fetchData = () => {
        fetch('https://api.coinesk.com/v1/bpi/currentprice.json')
        .then((response) => response.json())
        .then((jsonData) => setBtcData(jsonData.bpi.USD))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return btcData.length > 0 ?(
        <>
        <h1>Current BTC/USD data</h1>
        <p>Code: {btcData.code}</p>
        <p>symbol: {btcData.symbol}</p>
        <p>Rate: {btcData.rate}</p>
        <p>Description: {btcData.description}</p>
        <p>Rate Float: {btcData.rate_float}</p>
        </>
    ) :
    (
     <h1>Data pending...</h1>
    );

}