import SandboxElement from "./SandboxElement"

const SandboxArea = ({sandboxElements}) => {
    return (
        <div className="Sandbox-Area">
            {sandboxElements.map((sandboxElement) => (<SandboxElement sandboxElement={sandboxElement}/>))}
        </div>
    )
}

SandboxArea.defaultProps = {
    sandboxElements: []
}

export default SandboxArea

