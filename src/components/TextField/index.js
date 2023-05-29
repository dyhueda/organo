import './TextField.css'

function TextField (props){
    return(
        <div className='text-field'>
            <label>{props.label}</label>
            <input 
                onChange={event =>props.WhenChange(event.target.value)} 
                required={props.needed} 
                placeholder={props.placeholder}
                value={props.value} />
        </div>
        
    );

}
export default TextField