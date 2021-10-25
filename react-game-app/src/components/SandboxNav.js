import Button from './Button'

const SandboxNav = ({onCreate}) => {

    const DeleteElement = () => {
        console.log('test');
    }

    return (
        <div className="Sandbox-Nav">
            <Button text='Create Element' onClick={onCreate} btnClass='Sandbox-Nav-Btn' />

            <Button text='Delete Element' onClick={DeleteElement} btnClass='Sandbox-Nav-Btn' />
        </div>
    )
}

export default SandboxNav
