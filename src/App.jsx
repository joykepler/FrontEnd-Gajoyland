import './App.css'
import Container from './components/Container'
import ContainerRegister from './components/ContainerRegister'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/register" element={<ContainerRegister />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App