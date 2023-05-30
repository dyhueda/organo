import Dropdown from '../Dropdown'
import TextField from '../TextField'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

function Form(props) {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const save = (event) =>{
        event.preventDefault()
        props.AddNewProfile({
            name,
            role,
            image,
            team
        })
        setName('')
        setImage('')
        setRole('')
        setTeam('')
    }
    return (

        <section className='form'>
            <form onSubmit={save}>
                <h2>Enter your data to create a profile</h2>
                <TextField 
                    needed={true} 
                    label='Name' 
                    placeholder='Enter your name'
                    value={name}
                    WhenChange={value => setName(value)} 
                />
                    
                <TextField 
                    needed={true} 
                    label='Role' 
                    placeholder='Enter your role'
                    value={role}
                    WhenChange={value => setRole(value)} 
                />
                <TextField 
                    label='Image' 
                    placeholder='Enter the adress of your image' 
                    WhenChange={value => setImage(value)}
                    value={image}
                />
                <Dropdown 
                    nedded={true} 
                    items={props.teams} 
                    label='Team'
                    WhenChange={value => setTeam(value)}
                    value={team}
                />
                <Button>
                    Create Profile
                </Button>
            </form>
        </section>

    )
}
export default Form