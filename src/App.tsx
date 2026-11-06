import { useState } from 'react'
import './App.css'
import { KONYVEK, type KonyvTipus } from './data/adat'
import Tablazat from './component/Tablazat'

function App() {
  const [konyvek, setKonyvek] = useState<KonyvTipus[]>(KONYVEK)

  function torles(id: number) {
    setKonyvek((aktualisKonyvek) => aktualisKonyvek.filter((konyv) => konyv.id !== id))
  }

  return <Tablazat konyvek={konyvek} onDelete={torles} />
}

export default App
