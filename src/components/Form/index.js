import Dropdown from '../Dropdown'
import TextField from '../TextField'
import Button from '../Button'
import './Form.css'

function Form() {
    const items = ['Programing','Front-End','Data Science', 'DevOps', 'UX e Design', 'Mobile']
    return (
        <section className='form'>
            <form>
                <h2>Enter your data to create a profile</h2>
                <TextField label='Name' placeholder='Enter your name' />
                <TextField label='Role' placeholder='Enter your role' />
                <TextField label='Image' placeholder='Enter the adress of your image' />
                <Dropdown items={items} label='Team'/>
                <Button name='Create Profile' />
            </form>
        </section>

    )
}
export default Form