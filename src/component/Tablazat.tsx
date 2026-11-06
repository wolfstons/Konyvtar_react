import { useContext } from "react";
import Sor from "./Sor";
import { TablazatContext } from "../context/TablazatContext";

export default function Tablazat() {
  const context = useContext(TablazatContext);

  if (!context) {
    throw new Error("A Tablazat komponenst TablazatContextProviderben kell használni.");
  }

  const { konyvek, torles: torol } = context;

  return (
    <>
      <header>könyvmoly</header>
      <div className="tablazat">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Cím</th>
              <th>Szerző</th>
              <th>Ár</th>
              <th>DB</th>
              <th>Művelet</th>
            </tr>
          </thead>{" "}
          <tbody>
            {konyvek.map((konyv) => (
              <Sor key={konyv.id} konyv={konyv} torol={torol} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
