import styles from './Table.module.css';

export default function Table({data}){
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Date</th>
                    <th>Holiday</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0?<tr>
                    <td colspan="3">Select country first</td>
                </tr>:
                data.map((e,i)=><tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.date}</td>
                    <td>{e.title}</td>
                </tr>)}
            </tbody>
        </table>
    )
};