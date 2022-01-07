import { useState, useEffect } from 'react';


export default function Main() {

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async ()=>{

        fetch("https://cors-anywhere.herokuapp.com/http://gov.uk/bank-holidays.json")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        .catch(err =>{
            console.log("Error=>", err);
        })

    }

    return (
        <div>
            ....
        </div>
    )
}