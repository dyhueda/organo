
import Employee from '../Employee'
import './Teams.css'

function Teams (props){
    
    return(
        (props.profiles.length > 0) ?
        <section className='team' style={{ backgroundColor : props.SecondaryColor, }} >
           <h3 style={{ borderColor : props.PrimaryColor }} >{props.name}</h3 >
           <div className='employees'>
                {props.profiles.map( profile => <Employee
                                                        name={profile.name}
                                                        role={profile.role}
                                                        image={profile.image}
                                                        key={profile.name}
                                                        primaryColor={props.PrimaryColor}
                /> )}
            </div>
        </section>
        : ''

    )
/*     
        you can use "?" or &&

        return(
        (props.profiles.length > 0) &&
        <section className='team' style={{ backgroundColor : props.SecondaryColor, }} >
           <h3 style={{ borderColor : props.PrimaryColor }} >{props.name}</h3 >
           <div className='employees'>
                {props.profiles.map( profile => <Employee
                                                        name={profile.name}
                                                        role={profile.role}
                                                        image={profile.image}
                                                        key={profile.name}
                /> )}
            </div>
        </section>

    ) */
}
export default Teams