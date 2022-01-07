import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Main.css';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Calendar({show, range, setRange, setShow}){

    const handleChange = ({selection})=>{
        setRange(selection)
    }

    return(
        <div className="calender" style={{"display": show ? "flex":"none"}}>
            <OutsideClickHandler onOutsideClick={()=>setShow(false)}>
                <DateRangePicker  ranges={[range]} onChange={handleChange} />
            </OutsideClickHandler>
        </div>
    )
}