import './Main.css';

export default function Table({data}){

    const reverse = (str) =>{
        str = str.split("-");
        str.reverse();
        return str.join("-");
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Date</th>
                    <th>Holiday</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0?<tr>
                    <td colSpan="3">No data found || Select country</td>
                </tr>:
                data.map((e,i)=><tr key={i}>
                    <td>{i+1}</td>
                    <td>{reverse(e.date)}</td>
                    <td>{e.title}</td>
                </tr>)}
            </tbody>
        </table>
    )
};