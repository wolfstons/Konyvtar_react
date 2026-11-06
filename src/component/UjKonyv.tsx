import { useContext, useState } from "react";
import type { UjKonyvTipus } from "../context/TablazatContext";
import { TablazatContext } from "../context/TablazatContext";

export function UjKonyv() {
  const [cim, setCim] = useState<string>("");
  const [szerzo, setSzerzo] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [darabszam, setDarabszam] = useState<number>(0);
  const context = useContext(TablazatContext);

  if (!context) {
    throw new Error("Az UjKonyv komponenst TablazatContextProviderben kell használni.");
  }

  const { ujKonyvHozzaadas } = context;

  function mentes(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ujKonyv: UjKonyvTipus = {
      cim,
      szerzo,
      ar,
      darabszam,
    };

    ujKonyvHozzaadas(ujKonyv);
    setCim("");
    setSzerzo("");
    setAr(0);
    setDarabszam(0);
  }

  return (
    <form className="uj-konyv" onSubmit={mentes}>
      <h2>Új könyv hozzáadása</h2>
      <div className="form-field">
        <label htmlFor="cim">Cím</label>
        <input id="cim" value={cim} onChange={(e) => setCim(e.target.value)} type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="szerzo">Szerző</label>
        <input id="szerzo" value={szerzo} onChange={(e) => setSzerzo(e.target.value)} type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="ar">Ár</label>
        <input id="ar" value={ar} onChange={(e) => setAr(Number(e.target.value))} type="number" min="0" required />
      </div>
      <div className="form-field">
        <label htmlFor="darabszam">Darabszám</label>
        <input id="darabszam" value={darabszam} onChange={(e) => setDarabszam(Number(e.target.value))} type="number" min="0" required />
      </div>
      <button type="submit">Könyv hozzáadása</button>
    </form>
  );
}
