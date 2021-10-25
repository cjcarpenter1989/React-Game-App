import SandboxElement from "./SandboxElement"

const SandboxArea = ({sandboxElements, onDelete}) => {
    return (
        <div className="Sandbox-Area">
            {sandboxElements.map((sandboxElement) => (<SandboxElement sandboxElement={sandboxElement} onDelete={onDelete}/>))}
        </div>
    )
}

SandboxArea.defaultProps = {
    sandboxElements: []
}

export default SandboxArea

