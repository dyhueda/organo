import TextField from '../TextField'
import './Form.css'

function Form() {
    return (
        <section className='form'>
            <form>
                <h2>Enter your data to create a profile</h2>
                <TextField label='Name' placeholder='Enter your name' />
                <TextField label='Role' placeholder='Enter your role' />
                <TextField label='Image' placeholder='Enter the adress of your image' />
            </form>
        </section>

    )
}
export default Form