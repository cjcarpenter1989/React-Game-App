import AddSandboxElement from './AddSandboxElement'
import Button from './Button'

const SandboxNav = ({ onCreate, addSandboxElement }) => {

    return (
        <div className="Sandbox-Nav">
            <Button text='Create Random Element' onClick={onCreate} btnClass='Sandbox-Nav-Btn' />
            <AddSandboxElement addSandboxElement={addSandboxElement} />
        </div>
    )
}

export default SandboxNav
