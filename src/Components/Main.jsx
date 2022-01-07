import { useState, useEffect } from 'react';
import Table from "./Table";

export default function Main() {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("")

    useEffect(() =>{
        fetchData();
    }, [country]);

    const fetchData = async ()=>{
        fetch("https://cors-anywhere.herokuapp.com/http://gov.uk/bank-holidays.json")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if( country === "england-and-wales"){
                setData(data["england-and-wales"].events);
            } else if( country === "northern-ireland"){
                setData(data["northern-ireland"].events);
            } else if( country === "scotland"){
                setData(data["scotland"].events);
            } else {
                setData([])
            }
        })
        .catch(err =>{
            console.log("Error=>", err);
        })
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
            </label>
            <Table data={data} />
        </div>
    )
}