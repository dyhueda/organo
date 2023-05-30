import './Dropdown.css'

function Dropdown (props) {
    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select 
                onChange={event =>props.WhenChange(event.target.value)} 
                required={props.needed} 
                value={props.value}
            >
                <option value={''} ></option>

                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>

    )

}
export default Dropdown