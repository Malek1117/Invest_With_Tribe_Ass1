import { useState, useEffect } from 'react';
import Table from "./Table";
import Calendar from "./Calender";
import "./Main.css";

export default function Main() {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("");
    const [show, setShow] = useState(false);
    const [range, setRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key:"selection"
    }) ;

    useEffect(() =>{
        fetchData();
    }, [country, range]);

    const fetchData = async ()=>{
        fetch("https://cors-anywhere.herokuapp.com/http://gov.uk/bank-holidays.json")
        .then(res => res.json())
        .then(data =>{
            if( country === "england-and-wales"){
                setData(betweenRange(data["england-and-wales"].events, range));
            } else if( country === "northern-ireland"){
                setData(betweenRange(data["northern-ireland"].events, range));
            } else if( country === "scotland"){
                setData(betweenRange(data["scotland"].events, range));
            } else {
                setData([])
            }
        })
        .catch(err =>{
            console.log("Error=>", err);
        })
    }

    const betweenRange = (data, range) =>{
        if(show){
            const start = range.startDate;
            const end = range.endDate;

            let arr = data.filter((e)=>new Date(e.date) >= start &&  new Date(e.date) <= end);

            return arr;
        }
        return data;
    }

    return (
        <div>
            <label>
                Country : 
                <select onChange={(e)=>setCountry(e.target.value)}> 
                    <option value = ""> Select country name</option>
                    <option value = "england-and-wales">England and Wales</option>
                    <option value = "northern-ireland">Northern Ireland</option>
                    <option value = "scotland">Scotland</option>
                </select>
                Filter Date Wise :
                <button disabled={country===""} onClick={()=>setShow(!show)}>Custom</button>
                <Calendar show={show} range={range} setRange={setRange} setShow={setShow} />
            </label>
            <Table data={data} />
        </div>
    )
}