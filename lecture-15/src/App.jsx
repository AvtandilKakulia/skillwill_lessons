import { useRef } from 'react';
import './App.css';
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useLocalStorage from './hooks/useLocalStorage';
import usePageBottom from './hooks/usePageBottom';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [isOpen, toggle] = useLocalStorage('key-1', true)
  const { copiedContent, makeCopy } = useCopyToClipboard(5000)
  const inputRef = useRef()
  const bottom = usePageBottom()
  const device = useWindowResize()
  console.log(device)

  return <>
    <div>
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle</button>
      {isOpen && <h1>Hello There</h1>}
    </div>

    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => makeCopy(inputRef.current.value)}>copy</button>
      {copiedContent && <p>Copied to Clipboard</p>}
    </div>

    {device && <h1>You are on {device}</h1>}

    <div style={{ height: "100vh", backgroundColor: "#ccc" }}>
      {bottom ? <h2>You are far from the head</h2> : <h2>DIV header</h2>}
    </div>
  </>
}

export default App;
