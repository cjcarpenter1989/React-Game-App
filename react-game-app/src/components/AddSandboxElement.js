import {useState} from 'react'

const AddSandboxElement = ({addSandboxElement}) => {    
    const [id, setID] = useState('');
    const [color, setColor] = useState('');

    const onAddSandboxElement = (e) => {
        e.preventDefault();

        addSandboxElement({id, color});
    }

    return (
        <form className='Add-Sandbox-Element-Form' onSubmit={onAddSandboxElement}>
            <div className='form-control'>
                <label>ID</label>
                <input type='text' placeholder='Add ID' value={id} onChange={(e) => setID(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Color</label>
                <input type='text' placeholder='Add Color' value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            
            <input type='submit' value='Create Element' className='Sandbox-Nav-Btn' />
        </form>
    )
}

export default AddSandboxElement
