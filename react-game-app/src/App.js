import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SandboxNav from './components/SandboxNav'
import SandboxArea from './components/SandboxArea'
import { useState, useEffect } from 'react'

function App() {
  // const [sandboxElements, setSandboxElements] = useState([
  //   {
  //     key: 1,
  //     style: {
  //       color: "red"
  //     }
  //   },
  //   {
  //     key: 2,
  //     style: {
  //       color: "blue"
  //     }
  //   }
  // ]);

  const [sandboxElements, setSandboxElements] = useState([]);

  useEffect(() => {
    const getSandboxElements = async () => {
      const sandboxElements = await fetchSandboxElements();
      setSandboxElements(sandboxElements);
    }

    getSandboxElements();
  }, [])

  const fetchSandboxElements = async () => {
    const response = await fetch('https://localhost:5001/api/ReactSandbox/GetAllSandboxElements').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    }).catch(err => {
      console.log(err)
    })

    const data = await response;
    return data;
  }

  // Create Element
  const createElement = async ({ id = null, color = null }) => {
    const element = {
      //key: id ?? Math.floor(Math.random() * 10000),
      style: {
        color: color ?? ("#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
      }
    }

    const response = await fetch(`https://localhost:5001/api/ReactSandbox/CreateSandboxElement`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(element)
      }).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        
        return response.json();
      }).catch(err => {
        console.log(err)
      });

    const data = await response
    setSandboxElements([...sandboxElements, data]);
  }


  const addSandboxElement = ({ id, color }) => {
    createElement({ id, color });
  }

  // Delete Element
  const deleteElement = async (key) => {
    await fetch(`https://localhost:5001/api/ReactSandbox/DeleteSandboxElement/${key}`, { method: 'DELETE' }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
    }).catch(err => {
      console.log(err)
    });

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
