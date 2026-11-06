import './App.css'
import Tablazat from './component/Tablazat'
import { UjKonyv } from './component/UjKonyv'
import TablazatContextProvider from './context/TablazatContext'

function App() {
  return (
    <TablazatContextProvider>
      <UjKonyv />
      <Tablazat />
      
    </TablazatContextProvider>
  )
}

export default App
