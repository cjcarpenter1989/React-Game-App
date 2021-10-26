import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SandboxNav from './components/SandboxNav'
import SandboxArea from './components/SandboxArea'
import { useState } from 'react'

function App() {
  const [sandboxElements, setSandboxElements] = useState([
    {
      key: 1,
      style: {
        color: "red"
      }
    },
    {
      key: 2,
      style: {
        color: "blue"
      }
    }
  ]);

  // Create Element
  const createElement = ({ id = null, color = null }) => {
    const element = {
      key: id ?? Math.floor(Math.random() * 10000),
      style: {
        color: color ?? ("#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
      }
    }

    setSandboxElements([...sandboxElements, element]);
  }

  const addSandboxElement = ({ id, color }) => {
    createElement({ id, color });
  }

  // Delete Element
  const deleteElement = (key) => {
    setSandboxElements(sandboxElements.filter((sandboxElement) => sandboxElement.key !== key))
  }


  return (
    <div className="App">
      <Header />
      <div className="App-Container">
        <SandboxNav onCreate={createElement} addSandboxElement={addSandboxElement} />
        <SandboxArea sandboxElements={sandboxElements} onDelete={deleteElement} />
      </div>
    </div>


  );
}

export default App;
