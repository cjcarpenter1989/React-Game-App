import { FaTimes } from 'react-icons/fa'

const SandboxElement = ({ sandboxElement }) => {

    const elementStyle = {
        backgroundColor: sandboxElement.style.color
    };

    return (
        <div className="Sandbox-Element" style={elementStyle}>
            <h4>
                <span>
                    {sandboxElement.key}
                    <FaTimes style ={{ color: 'red', cursor: 'pointer' }}/>
                </span>
            </h4>
            <span>{JSON.stringify(sandboxElement.style)}</span>
        </div>
    )
}

export default SandboxElement
