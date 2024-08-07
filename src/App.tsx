import { InputProvider } from './components/input';
import { Calculator } from './components/calculator';
import './App.css'

function App() {
  return (
    <>
      <InputProvider>
        <Calculator />
      </InputProvider>
    </>
  )
}

export default App
