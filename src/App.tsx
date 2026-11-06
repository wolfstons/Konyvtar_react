import './App.css'
import Tablazat from './component/Tablazat'
import TablazatContextProvider from './context/TablazatContext'

function App() {
  return (
    <TablazatContextProvider>
      <Tablazat />
    </TablazatContextProvider>
  )
}

export default App
