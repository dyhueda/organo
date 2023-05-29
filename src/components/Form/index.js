import Dropdown from '../Dropdown'
import TextField from '../TextField'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

function Form(props) {
    const items = ['Programing','Front-End','Data Science', 'DevOps', 'UX e Design', 'Mobile']

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
    }
    return (

        <section className='form'>
            <form onSubmit={save}>
                <h2>Enter your data to create a profile</h2>
                <TextField 
                    needed={true} 
                    label='Name' 
                    placeholder='Enter your name'
                    WhenChange={value => setName(value)} 
                />
                    
                <TextField 
                    needed={true} 
                    label='Role' 
                    placeholder='Enter your role'
                    WhenChange={value => setRole(value)} 
                />
                <TextField 
                    label='Image' 
                    placeholder='Enter the adress of your image' 
                    WhenChange={value => setImage(value)}
                />
                <Dropdown 
                    nedded={true} 
                    items={items} 
                    label='Team'
                    WhenChange={value => setTeam(value)}
                />
                <Button>
                    Create Profile
                </Button>
            </form>
        </section>

    )
}
export default Form